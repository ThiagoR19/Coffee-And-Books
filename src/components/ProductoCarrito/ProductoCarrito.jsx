import cafeDefault from '../../assets/imagen-cafe-default.png'
import cafeDefault2 from '../../assets/imagen-cafe-default2.png'
import buttonMinus from '../../assets/icon-minus-carrito.png'
import buttonPlus from '../../assets/icon-plus-carrito.png'
import iconoTrash from '../../assets/icon-trash.png'

import './ProductoCarrito.css'

function ProductoCarrito() {
  return (
    <article id="producto">
      <div className='producto__div'>
        <div className='producto__div-div-trash'>
          <img className='producto__div-div-img-trash' src={iconoTrash} alt="Icono de Basura" />
        </div>
        <div className='producto__div-div-titulo'>
          <h2 className='producto__div-div-h2-titulo'>Café Colombiano Importado</h2>
        </div>
        <div className='producto__div-div-principal'>
          <img className='producto__div-div-img-principal' src={cafeDefault} alt="" />
        </div>
        <div className='producto__div-div-botones'>
          <button className='producto__div-div-button'>
            <img className='producto__div-div-button-img' src={buttonMinus} alt="" />
          </button>
          <div className='producto__div-div-div'>
            <h3 className='producto__div-div-div-h3'>3</h3> 
          </div>
          <button className='producto__div-div-button'>
            <img className='producto__div-div-button-img' src={buttonPlus} alt="" />
          </button>
        </div>
      </div>
      <div className='producto__div'>
        <div className='producto__div-div'>
          <h3 className='producto__div-div-h3'>Descripción</h3>
        </div>
        <p className='producto__divp'>Disfrutá de una experiencia premium con nuestro café French Vanilla. Este blend combina granos seleccionados con el toque dulce y cremoso de la vainilla francesa, ideal para acompañar esos momentos de lectura profunda o una tarde tranquila de estudio. Disfrutá de una experiencia premium con nuestro café French Vanilla. Este blend combina granos seleccionados con el toque dulce y cremoso de la vainilla francesa, ideal para acompañar </p>
        <img className='producto__div-img' src={cafeDefault2} alt="Café por defecto 2" />
      </div>
    </article>
  )
}

export default ProductoCarrito