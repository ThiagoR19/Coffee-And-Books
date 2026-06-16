import Carrusel from "../../components/Carrusel/Carrusel"
import ProductoCafeDesarrollo from "../../components/ProductoCafeDesarrollo/ProductoCafeDesarrollo"

import './ProductoCafe.css'

function ProductoCafe() {
  return (
    <section id='productoCafe'>
      <ProductoCafeDesarrollo />
      <Carrusel />
    </section>
  )
}

export default ProductoCafe