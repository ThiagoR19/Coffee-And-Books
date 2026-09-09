import { useEffect } from "react"
import Carrusel from "../../components/Carrusel/Carrusel"
import ProductoCafeDesarrollo from "../../components/ProductoCafeDesarrollo/ProductoCafeDesarrollo"
import { useShop } from "../../context/ShopContext"

import './ProductoCafe.css'

function ProductoCafe({ params }) {
  const { products, isLoading, error } = useShop();
  const productId = Number(params?.id);
  const product = params?.id
    ? products.find((item) => item.id_prod === productId && item.id_cat === 1)
    : products.find((item) => item.id_cat === 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (isLoading) return <section id="productoCafe"><p className="catalogo-estado">Cargando producto…</p></section>;
  if (error || !product) return <section id="productoCafe"><p className="catalogo-estado">{error || 'No encontramos este café en el catálogo.'}</p></section>;

  return (
    <section id='productoCafe'>
      <ProductoCafeDesarrollo key={product.id_prod} product={product} />
      <Carrusel key={`marca-${product.id_prod}`} product={product} />
    </section>
  )
}

export default ProductoCafe
