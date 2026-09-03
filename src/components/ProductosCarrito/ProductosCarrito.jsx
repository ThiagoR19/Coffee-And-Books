import cafeDefault from '../../assets/imagen-cafe-default.png'
import iconoWhatsapp from '../../assets/icon-whatsapp.png'

import './ProductosCarrito.css'

function ProductosCarrito({ productos, setProdSeleccionado }) {
  return (
    <article id="productos">
      <h3 className='productos__h3'>Productos</h3>
      <div className='productos__div'>
        {productos.length > 0 ? (
          productos.map((producto) => <ProductoCarritoLateral key={producto.id_prod} producto={producto} setProdSeleccionado={setProdSeleccionado} />)
        ) : (
          <p className='productos__div-div-span' style={{ padding: '1rem' }}>No hay productos en el carrito.</p>
        )}
      </div>
      <div className='productos__div'>
        <img className='productosL__div-img' src={iconoWhatsapp} alt="Icono de Whatsapp" />
        <div className='productos__div-div'>
          <h3 className='productos__div-div-h3'>¿No encontraste tu producto?</h3>
          <span className='productos__div-div-span'>No dudes en pedirme que lo agregue al catálogo</span>
        </div>
      </div>
    </article>
  )
}

function ProductoCarritoLateral({ producto, setProdSeleccionado }) {

  const handleClick = () => {
    setProdSeleccionado(producto)
  }

  return (
    <>
      <div onClick={handleClick} className="productoL">
        <img className='productoL__img' src={cafeDefault} alt="Café por defecto" />
        <div className='productoL__div'>
          <h4 className='productoL__div-h4'>{producto.nombre}</h4>
          <span className='productoL__div-span'>${producto.precio}</span>
        </div>
      </div>
      <div className='productoL__underline'></div>
    </>
  )
}

export default ProductosCarrito