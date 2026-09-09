/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SHEET_ID = "1iEV7N64-zYX_GLUTrsHtx_Qk-2wB2VQBUEFKQ_6jqUw";
const CART_STORAGE_KEY = "coffee-and-books-cart";

const SHEETS = [
  "Productos",
  "Cafe",
  "Libro",
  "Autores",
  "Libro_Autor",
  "Categorias",
  "Etiquetas",
  "Prod_Etiq",
  "Promociones",
];

const localImages = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const fallbackImages = Object.entries(localImages).reduce((images, [path, image]) => {
  const fileName = path.split("/").pop()?.toLowerCase();
  if (fileName) images[fileName] = image;
  return images;
}, {});

function toNumber(value) {
  const number = Number(String(value ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function toBoolean(value) {
  return value === true || String(value).toLowerCase() === "true" || String(value) === "1";
}

function parseCell(cell) {
  if (!cell) return "";
  return cell.v ?? cell.f ?? "";
}

function parseGoogleSheetResponse(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  const payload = JSON.parse(text.slice(start, end + 1));
  const columns = payload.table.cols.map((column, index) => column.label || column.id || `columna_${index}`);
  return payload.table.rows.map((row) =>
    Object.fromEntries(columns.map((column, index) => [column, parseCell(row.c?.[index])])),
  );
}

async function fetchSheet(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`No se pudo leer la pestaña ${sheetName}.`);
  return parseGoogleSheetResponse(await response.text());
}

function joinProducts(rows) {
  const products = rows.Productos.map((product) => {
    const id = toNumber(product.id_prod);
    const cafe = rows.Cafe.find((item) => toNumber(item.id_prod) === id);
    const libro = rows.Libro.find((item) => toNumber(item.id_prod) === id);
    const category = rows.Categorias.find((item) => toNumber(item.id_cat) === toNumber(product.id_cat));
    const authorLink = rows.Libro_Autor.find((item) => toNumber(item.id_prod) === id);
    const author = rows.Autores.find((item) => toNumber(item.id_autor) === toNumber(authorLink?.id_autor));
    const labels = rows.Prod_Etiq
      .filter((item) => toNumber(item.id_prod) === id)
      .map((item) => rows.Etiquetas.find((label) => toNumber(label.id_etiqueta) === toNumber(item.id_etiqueta)))
      .filter(Boolean);

    return {
      ...product,
      id_prod: id,
      precio: toNumber(product.precio),
      stock: toNumber(product.stock),
      cant_vendida: toNumber(product.cant_vendida),
      id_cat: toNumber(product.id_cat),
      oferta: toBoolean(product.oferta),
      categoria: category?.nombre_cat || (toNumber(product.id_cat) === 1 ? "Café" : "Libro"),
      cafe,
      libro,
      autor: author ? `${author.nombre} ${author.apellido}` : "",
      etiquetas: labels.map((label) => label.texto),
      etiqueta: labels[0]?.texto || (toBoolean(product.oferta) ? "OFERTA" : ""),
      promociones: [],
      enDescuento: toBoolean(product.oferta),
      imagen: product.imagen || "",
    };
  });

  return products;
}

function getProductImage(product) {
  const remoteImage = String(product?.imagen || "");
  if (remoteImage && !remoteImage.includes("img.link")) return remoteImage;

  const id = Number(product?.id_prod || 0);
  const baseName = product?.id_cat === 1
    ? `coffee-example${((id - 1) % 8) + 1}`
    : `libro-example${((id - 28) % 4) + 1}`;
  const localImage = Object.entries(fallbackImages).find(([name]) => name.startsWith(`${baseName}.`))?.[1];

  return localImage || fallbackImages[product?.id_cat === 1 ? "imagen-cafe-default.webp" : "libro-example1.webp"];
}

function readStoredCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState(readStoredCart);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let activo = true;

    Promise.all(SHEETS.map(fetchSheet))
      .then((sheetRows) => {
        if (!activo) return;
        const rows = Object.fromEntries(SHEETS.map((name, index) => [name, sheetRows[index]]));
        const joinedProducts = joinProducts(rows);
        setProducts(joinedProducts);
        setCartItems((currentItems) => currentItems
          .map((item) => {
            const freshProduct = joinedProducts.find((product) => product.id_prod === item.id_prod);
            if (!freshProduct || freshProduct.stock <= 0) return null;
            return { ...freshProduct, cantidad: Math.min(item.cantidad || 1, freshProduct.stock) };
          })
          .filter(Boolean));
        setPromotions(rows.Promociones || []);
      })
      .catch((requestError) => {
        if (!activo) return;
        setError(requestError.message || "No se pudo cargar el catálogo desde Google Sheets.");
      })
      .finally(() => {
        if (activo) setIsLoading(false);
      });

    return () => {
      activo = false;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    if (!product || product.stock <= 0) return;
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id_prod === product.id_prod);
      const cantidadActual = existing?.cantidad || 0;
      const nuevaCantidad = Math.min(cantidadActual + quantity, product.stock);

      if (existing) {
        return currentItems.map((item) => item.id_prod === product.id_prod
          ? { ...product, cantidad: nuevaCantidad }
          : item);
      }

      return [...currentItems, { ...product, cantidad: Math.min(quantity, product.stock) }];
    });
  };

  const updateQuantity = (productId, quantityOrDelta, isDelta = true) => {
    setCartItems((currentItems) => currentItems
      .map((item) => {
        if (item.id_prod !== productId) return item;
        const nextQuantity = isDelta ? item.cantidad + quantityOrDelta : quantityOrDelta;
        return { ...item, cantidad: Math.min(Math.max(nextQuantity, 0), item.stock) };
      })
      .filter((item) => item.cantidad > 0));
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id_prod !== productId));
  };

  const clearCart = () => setCartItems([]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return products;
    return products.filter((product) => [
      product.nombre,
      product.descripcion,
      product.categoria,
      product.cafe?.marca,
      product.cafe?.tipo,
      product.libro?.genero,
      product.autor,
    ].some((value) => String(value || "").toLowerCase().includes(query)));
  }, [products, searchQuery]);

  const value = useMemo(() => ({
    products,
    filteredProducts,
    promotions,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    cartItems,
    cartCount: cartItems.reduce((total, item) => total + item.cantidad, 0),
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getProductImage,
  }), [products, filteredProducts, promotions, isLoading, error, searchQuery, cartItems]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop debe utilizarse dentro de ShopProvider.");
  return context;
}

export function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 }).format(Number(value) || 0);
}
