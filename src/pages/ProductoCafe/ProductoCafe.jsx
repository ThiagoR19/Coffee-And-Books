import Carrusel from "../../components/Carrusel/Carrusel"
import ProductoCafeDesarrollo from "../../components/ProductoCafeDesarrollo/ProductoCafeDesarrollo"
import { useShop } from "../../context/ShopContext"
import { useRoute } from "wouter"

import './ProductoCafe.css'

function ProductoCafe() {
  const { products, isLoading, error } = useShop();
  const [, params] = useRoute('/productoCafe/:id?');
  const id = Number(params?.id);
  const product = products.find((item) => item.id_cat === 1 && item.id_prod === id)
    || products.find((item) => item.id_cat === 1);

  if (isLoading) return <section id="productoCafe"><p className="catalogo-estado">Cargando producto…</p></section>;
  if (error || !product) return <section id="productoCafe"><p className="catalogo-estado">{error || 'No encontramos cafés en el catálogo.'}</p></section>;

  return (
    <section id='productoCafe'>
      <ProductoCafeDesarrollo product={product} />
      <Carrusel />
    </section>
  )
}

export default ProductoCafe
