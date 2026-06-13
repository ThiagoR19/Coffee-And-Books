import cafeDefault from '../../assets/imagen-cafe-default.png'
import cafeDefault2 from '../../assets/imagen-cafe-default2.png'
import buttonMinus from '../../assets/icon-minus-carrito.png'
import buttonPlus from '../../assets/icon-plus-carrito.png'
import iconoWhatsapp from '../../assets/icon-whatsapp.png'
import iconoCheck from '../../assets/icon-check.png'
import iconoBolsa from '../../assets/icon-bolsa.png'
import iconoTrash from '../../assets/icon-trash.png'

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
      <article id="productos">
        <h3 className='productos__h3'>Productos</h3>
        <div className='productos__div'>
          {productos.map((producto) => {
            return <div
              key={producto.id}
              className="producto"
            >
              <img className='producto__img' src={cafeDefault} alt="Café por defecto" />
              <div className='producto__div'>
                <h4 className='producto__div-h4'>{producto.nombre}</h4>
                <span className='producto__div-span'>{producto.precio}</span>
              </div>
              <div className='producto__underline'></div>
            </div>
          })}
        </div>
        <div className='productos__div'>
          <img className='productos__div-img' src={iconoWhatsapp} alt="Icono de Whatsapp" />
          <div className='productos__div-div'>
            <h3 className='productos__div-div-h3'>¿No encontraste tu producto?</h3>
            <span className='productos__div-div-span'>No dudes en pedirme que lo agregue al catálogo</span>
          </div>
        </div>
      </article>

      <article id="producto">
        <div className='producto__div'>
          <div className='producto__div-div'>
            <img className='producto__div-div-img' src={iconoTrash} alt="Icono de Basura" />
          </div>
          <div className='producto__div-div'>
            <h2 className='producto__div-div-h2'>Café Colombiano Importado</h2>
          </div>
          <img className='producto__div-img' src={cafeDefault} alt="" />
          <div className='producto__div-div'>
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

      <article id="resumen">
        <h3 className='resumen__h3'>Resumen de Compra</h3>
        <div className='resumen__div'>
          <div className='resumen__div-div'>
            <h5 className='resumen__div-div-h5'>Café Colombiano...</h5>
            <span className='resumen__div-div-span'>$75.000</span>
          </div>
          <div className='resumen__div-div'>
            <h5 className='resumen__div-div-h5'>Subtotal</h5>
            <span className='resumen__div-div-span'>$75.000</span>
          </div>
          <div className='resumen__div-div'>
            <h5 className='resumen__div-div-h5'>Descuentos</h5>
            <span className='resumen__div-div-span'>$-10.000</span>
          </div>
          <div className='resumen__underline'></div>
        </div>
        <div className='resumen__div'>
          <h5 className='resumen__div-h5'>Total</h5>
          <span className='resumen__div-span'>$65.000</span>
        </div>
        <button className='resumen__button'>Finalizar Compra <img src={iconoBolsa} alt="" /></button>
        <div className='resumen__div'>
          <img className='resumen__div-img' src={iconoCheck} alt="" />
          <div className='resumen__div-div'>
            <h3 className='resumen__div-div-h3'>Compra 100% segura</h3>
            <span className='resumen__div-div-span'>Tus datos están protegidos en todo momento</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Carrito