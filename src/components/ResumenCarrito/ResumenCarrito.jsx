import iconoCheck from '../../assets/icon-check.svg'
import iconoBolsa from '../../assets/icon-bolsa.svg'

import './ResumenCarrito.css'

function ResumenCarrito() {
  return (
    <article id="resumen">
      <div className='resumen__div'>
        <h3 className='resumen__h3'>Resumen de Compra</h3>
      </div>
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
          <h5 className='resumen__div-div-h5 descuento'>Descuentos</h5>
          <span className='resumen__div-div-span descuento-precio'>$-10.000</span>
        </div>
      </div>
      <div className='resumen__underline'></div>
      <div className='resumen__div-total'>
        <h5 className='resumen__div-h5 total'>Total</h5>
        <span className='resumen__div-span total-precio'>$65.000</span>
      </div>
      <button className='resumen__button'>Finalizar compra <img src={iconoBolsa} alt="" /></button>
      <div className='resumen__div-segura'>
        <img className='resumen__div-img' src={iconoCheck} alt="" />
        <div className='resumen__div-div-segura'>
          <h3 className='resumen__div-div-h3'>Compra 100% segura</h3>
          <span className='resumen__div-div-span'>Tus datos están protegidos en todo momento</span>
        </div>
      </div>
    </article>
  )
}

export default ResumenCarrito