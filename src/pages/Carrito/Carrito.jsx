import ProductosCarrito from '../../components/ProductosCarrito/ProductosCarrito'
import ProductoCarrito from '../../components/ProductoCarrito/ProductoCarrito'
import ResumenCarrito from '../../components/ResumenCarrito/ResumenCarrito'

import db from '../../db/db.json'
import { useState } from 'react'
import './Carrito.css'


function Carrito() {
  const [productosCarrito, setProductosCarrito] = useState(db.Productos)
  const [prodSeleccionado, setProdSeleccionado] = useState(db.Productos[0])

  const borrarDelCarrito = (id) => {
    console.log('hola')
    setProductosCarrito(productosCarrito.filter(producto => producto.id !== id));
    console.log('chau')
  }

  return (
    <section className='Carrito'>
      <ProductosCarrito productos={productosCarrito} setProdSeleccionado={setProdSeleccionado} />
      <ProductoCarrito prodSeleccionado={prodSeleccionado} borrarDelCarrito={borrarDelCarrito} />
      <ResumenCarrito productosCarrito={productosCarrito} />
    </section>
  )
}

export default Carrito