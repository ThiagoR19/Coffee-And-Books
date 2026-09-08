import Carrusel from "../../components/Carrusel/Carrusel"
import ProductoCafeDesarrollo from "../../components/ProductoCafeDesarrollo/ProductoCafeDesarrollo"
import { useShop } from "../../context/ShopContext"

import './ProductoCafe.css'

function ProductoCafe() {
  const { products, isLoading, error } = useShop();
  const product = products.find((item) => item.id_prod === 1) || products.find((item) => item.id_cat === 1);

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
