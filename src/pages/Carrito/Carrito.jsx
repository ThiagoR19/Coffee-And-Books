import ProductosCarrito from '../../components/ProductosCarrito/ProductosCarrito'
import ProductoCarrito from '../../components/ProductoCarrito/ProductoCarrito'
import ResumenCarrito from '../../components/ResumenCarrito/ResumenCarrito'

import db from '../../db/db.json'
import { useState } from 'react'
import './Carrito.css'


function Carrito() {

  const productos = db.Productos

  const productosConCantidad = productos.map((producto) => ({
    ...producto,
    cantidad: 1
  }))

  const [productosCarrito, setProductosCarrito] = useState(productosConCantidad)
  const [prodSeleccionado, setProdSeleccionado] = useState(productosConCantidad[0])

  const borrarDelCarrito = (id) => {
    const nuevosProductos = productosCarrito.filter(producto => producto.id_prod !== id);
    setProductosCarrito(nuevosProductos);

    if (prodSeleccionado?.id_prod === id) {
      setProdSeleccionado(nuevosProductos.length > 0 ? nuevosProductos[0] : null);
    }
  }

  const handleAdd = () => {
    setProdSeleccionado(prodSeleccionado.cantidad + 1)
  }

  const handleSustract = () => {
    // if (prodSeleccionado.cantidad == 0) return
    // console.log(prodSeleccionado.cantidad)
    // const nuevosProductos = productosCarrito.filter(producto => producto.id_prod !== id);
    // setProductosCarrito(nuevosProductos)
  }


  return (
    <section className='Carrito'>
      <ProductosCarrito productos={productosCarrito} setProdSeleccionado={setProdSeleccionado} />
      <ProductoCarrito prodSeleccionado={prodSeleccionado} borrarDelCarrito={borrarDelCarrito} handleAdd={handleAdd} handleSustrac={handleSustract} />
      <ResumenCarrito productosCarrito={productosCarrito} />
    </section>
  )
}

export default Carrito