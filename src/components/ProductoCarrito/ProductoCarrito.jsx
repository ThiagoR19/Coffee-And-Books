import cafeDefault2 from '../../assets/coffees/imagen-cafe-default2.webp'
import buttonMinus from '../../assets/carrito/icon-minus-carrito.svg'
import buttonPlus from '../../assets/carrito/icon-plus-carrito.svg'
import iconoTrash from '../../assets/icon-trash.svg'

import './ProductoCarrito.css'

function ProductoCarrito({ prodSeleccionado, borrarDelCarrito, handleAdd, handleSustract, getProductImage }) {

  if (!prodSeleccionado) {
    return (
      <article id="producto">
        <div className='producto__div'>
          <div className='producto__div-div-titulo'>
            <h2 className='producto__div-div-h2-titulo'>Sin producto seleccionado</h2>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article id="producto">
      <div className='producto__div'>
        <button className='producto__div-div-trash' onClick={() => borrarDelCarrito(prodSeleccionado.id_prod)} aria-label={`Quitar ${prodSeleccionado.nombre} del carrito`}>
          <img className='producto__div-div-img-trash' src={iconoTrash} alt="" />
        </button>
        <div className='producto__div-div-titulo'>
          <h2 className='producto__div-div-h2-titulo'>{prodSeleccionado.nombre}</h2>
        </div>
        <div className='producto__div-div-principal'>
          <img className='producto__div-div-img-principal' src={getProductImage(prodSeleccionado)} alt={prodSeleccionado.nombre} />
        </div>
        <div className='producto__div-div-botones'>
          <button className='producto__div-div-button' onClick={handleSustract} disabled={prodSeleccionado.cantidad <= 1} aria-label="Disminuir cantidad">
            <img className='producto__div-div-button-img' src={buttonMinus} alt="" />
          </button>
          <div className='producto__div-div-div'>
            <h3 className='producto__div-div-div-h3'>{prodSeleccionado.cantidad}</h3>
          </div>
          <button className='producto__div-div-button' onClick={handleAdd} disabled={prodSeleccionado.cantidad >= prodSeleccionado.stock} aria-label="Aumentar cantidad">
            <img className='producto__div-div-button-img' src={buttonPlus} alt="" />
          </button>
        </div>
      </div>
      <div className='producto__div'>
        <div className='producto__div-div'>
          <h3 className='producto__div-div-h3'>Descripción</h3>
        </div>
        <p className='producto__divp'>{prodSeleccionado.descripcion}</p>
        <img className='producto__div-img' src={cafeDefault2} alt="Café por defecto 2" />
      </div>
    </article>
  )
}

export default ProductoCarrito
