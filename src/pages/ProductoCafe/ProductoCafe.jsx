import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import Carrusel from "../../components/Carrusel/Carrusel"
import ProductoCafeDesarrollo from "../../components/ProductoCafeDesarrollo/ProductoCafeDesarrollo"
<<<<<<< HEAD
import obtenerProductos from "../../context/obtenerProductos";
=======
import { useShop } from "../../context/ShopContext"
>>>>>>> main

import './ProductoCafe.css'

function ProductoCafe() {
<<<<<<< HEAD
  const [, params] = useRoute('/productoCafe/:id?');
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;

    obtenerProductos()
      .then((productos) => {
        const productoEncontrado = productos.find(
          (item) => item.tipo === 'cafe' && item.id === Number(params?.id || 1)
        );
        if (activo) setProducto(productoEncontrado || null);
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, [params?.id]);

  if (cargando) {
    return <p className="texto-mostrando">CARGANDO PRODUCTO...</p>;
  }

  if (!producto) {
    return <p className="texto-mostrando">CAFÉ NO ENCONTRADO.</p>;
  }

  return (
    <section id='productoCafe'>
      <ProductoCafeDesarrollo producto={producto} />
=======
  const { products, isLoading, error } = useShop();
  const product = products.find((item) => item.id_prod === 1) || products.find((item) => item.id_cat === 1);

  if (isLoading) return <section id="productoCafe"><p className="catalogo-estado">Cargando producto…</p></section>;
  if (error || !product) return <section id="productoCafe"><p className="catalogo-estado">{error || 'No encontramos cafés en el catálogo.'}</p></section>;

  return (
    <section id='productoCafe'>
      <ProductoCafeDesarrollo product={product} />
>>>>>>> main
      <Carrusel />
    </section>
  )
}

export default ProductoCafe
