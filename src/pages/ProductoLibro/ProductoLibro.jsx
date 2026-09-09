import "./ProductoLibro.css";
import { FaCartShopping, FaRegUser } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imagenGrande from "../../assets/productoLibro/grande.webp";
import chiquita1 from "../../assets/productoLibro/chiquita1.webp";
import chiquita2 from "../../assets/productoLibro/chiquita2.webp";
import chiquita3 from "../../assets/productoLibro/chiquita3.webp";
import IconLibro from "../../assets/productoLibro/iconsPL/icono-libro-5.webp";
import IconIsbn from "../../assets/productoLibro/iconsPL/icon-isbn-2.webp";
import IconEditorial from "../../assets/productoLibro/iconsPL/icon-editorial-2.webp";
import IconDE from "../../assets/productoLibro/iconsPL/descuento-resumen-4.webp";
import CarrouselAutores from "./carrouselAutores";
import { formatPrice, useShop } from "../../context/ShopContext";

export default function ProductoLibro({ params }) {
    const { products, isLoading, error, addToCart, cartItems, getProductImage } = useShop();
    const productId = Number(params?.id);
    const product = products.find((item) => item.id_prod === productId && item.id_cat === 2)
        || products.find((item) => item.id_prod === 28)
        || products.find((item) => item.id_cat === 2);
    const cantidad = cartItems.find((item) => item.id_prod === product?.id_prod)?.cantidad || 0;

    if (isLoading) return <main className="Contenedor-Principal-PL"><p className="catalogo-estado">Cargando producto…</p></main>;
    if (error || !product) return <main className="Contenedor-Principal-PL"><p className="catalogo-estado">{error || 'No encontramos libros en el catálogo.'}</p></main>;

    const libro = product.libro || {};
    return (
        <main className="Contenedor-Principal-PL">
            <div className="contenedor-de-contenedores">
                <div className="cont-de-imagen-grande">
                    <FaChevronLeft className="flecha-slider flecha-izq" />
                    <img className="imagen-grande" src={getProductImage(product) || imagenGrande} alt={product.nombre} />
                    <span className="contador-slider">1/3</span>
                    <FaChevronRight className="flecha-slider flecha-der" />
                </div>
                <div className="detalles-libro-1">
                    <div className="contenido-de-detalles">
                        <h1 className="titulo-libro">{product.nombre}</h1>
                        <p className="autor-libro">{product.autor || 'Autor no informado'}</p>
                        <div className="cont-auxiliar">
                            <div className="lado-izquierdo"><p className="precio-libro">${formatPrice(product.precio)}</p><div className="cont-de-atributos"><p className="genero">{libro.genero}</p><p className="formato">{libro.formato}</p></div></div>
                            <div className="bnt-copra-LP"><button className="boton-comprar" onClick={() => addToCart(product)}><FaCartShopping className="icono-carrito" />AGREGAR AL CARRITO</button><p className="UEC">Unidades en carrito: {cantidad}</p></div>
                        </div>
                        <span className="titleSinopsisLP">SINOPSIS</span>
                        <p className="SinopsisLP">{product.descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="detalles-libro-2">
                <ul className="mi-listilla-pe">
                    <h3 className="detalle-del-detalle-h3">DETALLES DEL LIBRO</h3>
                    <li><span className="icono-circulo"><FaRegUser style={{ color: "black" }} className="icono-lista" /></span>Autor: {product.autor || 'No informado'}</li>
                    <li><span className="icono-circulo"><img className="icono-lista" src={IconDE} alt="" /></span>Género: {libro.genero}</li>
                    <li><span className="icono-circulo"><img className="icono-lista" src={IconLibro} alt="" /></span>Formato: {libro.formato}</li>
                    <li><span className="icono-circulo"><img className="icono-lista" src={IconEditorial} alt="" /></span>Editorial: {libro.editorial}</li>
                    <li><span className="icono-circulo"><img className="icono-lista" src={IconIsbn} alt="" /></span>ISBN: {libro.isbn}</li>
                </ul>
                <div className="contenedor-de-imagenes"><img className="imagenesChiquitas" src={chiquita1} alt="" /><img className="imagenesChiquitas" src={chiquita2} alt="" /><img className="imagenesChiquitas" src={chiquita3} alt="" /></div>
            </div>
            <h1 className="autore-h1">Mismo autor</h1>
            <div className="contenedor-de-autores"><div className="contenedor-de-autores"><CarrouselAutores /></div></div>
        </main>
    );
}
