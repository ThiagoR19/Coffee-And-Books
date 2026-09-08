import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import Carrusel from "../../components/Carrusel/Carrusel"
import ProductoCafeDesarrollo from "../../components/ProductoCafeDesarrollo/ProductoCafeDesarrollo"
import obtenerProductos from "../../context/obtenerProductos";

import './ProductoCafe.css'

function ProductoCafe() {
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
      <Carrusel />
    </section>
  )
}

export default ProductoCafe