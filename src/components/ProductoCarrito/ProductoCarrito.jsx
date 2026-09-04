import cafeDefault from '../../assets/coffees/imagen-cafe-default.webp'
import cafeDefault2 from '../../assets/coffees/imagen-cafe-default2.webp'
import buttonMinus from '../../assets/carrito/icon-minus-carrito.svg'
import buttonPlus from '../../assets/carrito/icon-plus-carrito.svg'
import iconoTrash from '../../assets/icon-trash.svg'

import './ProductoCarrito.css'

function ProductoCarrito({ prodSeleccionado, borrarDelCarrito, handleAdd, handleSustract }) {

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
        <div className='producto__div-div-trash' onClick={() => borrarDelCarrito(prodSeleccionado.id_prod)}>
          <img className='producto__div-div-img-trash' src={iconoTrash} alt="Icono de Basura" />
        </div>
        <div className='producto__div-div-titulo'>
          <h2 className='producto__div-div-h2-titulo'>{prodSeleccionado.nombre}</h2>
        </div>
        <div className='producto__div-div-principal'>
          <img className='producto__div-div-img-principal' src={cafeDefault} alt="" />
        </div>
        <div className='producto__div-div-botones'>
          <button className='producto__div-div-button'>
            <img className='producto__div-div-button-img' onClick={() => handleSustract()} src={buttonMinus} alt="" />
          </button>
          <div className='producto__div-div-div'>
            <h3 className='producto__div-div-div-h3'>{prodSeleccionado.cantidad}</h3>
          </div>
          <button className='producto__div-div-button'>
            <img className='producto__div-div-button-img' onClick={() => handleAdd()} src={buttonPlus} alt="" />
          </button>
        </div>
      </div>
      <div className='producto__div'>
        <div className='producto__div-div'>
          <h3 className='producto__div-div-h3'>Descripción</h3>
        </div>
        <p className='producto__divp'>{prodSeleccionado.desc} </p>
        <img className='producto__div-img' src={cafeDefault2} alt="Café por defecto 2" />
      </div>
    </article>
  )
}

export default ProductoCarrito