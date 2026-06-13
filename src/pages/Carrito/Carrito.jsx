import ProductosCarrito from '../../components/productosCarrito/ProductosCarrito'
import ProductoCarrito from '../../components/ProductoCarrito/ProductoCarrito'
import ResumenCarrito from '../../components/ResumenCarrito/ResumenCarrito'

import '/Carrito.css'

const productos = [
  { id: 1, nombre: 'Nombre Producto', precio: 100000 },
  { id: 2, nombre: 'Nombre Producto', precio: 100000 },
  { id: 3, nombre: 'Nombre Producto', precio: 100000 },
  { id: 4, nombre: 'Nombre Producto', precio: 100000 },
  { id: 5, nombre: 'Nombre Producto', precio: 100000 },
]

function Carrito() {
  return (
    <section>
      <ProductosCarrito productos={productos} />
      <ProductoCarrito />
      <ResumenCarrito />
    </section>
  )
}

export default Carrito