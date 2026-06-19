import estanteria from '../../assets/Estanteria2.png'
import cafeEstanteria from '../../assets/imagen-cafe-estanteria.png'
// import maderaEstanteria from '../../assets/imagen-madera-estanteria.png'
import lineEstanteria from '../../assets/imagen-line-estanteria.png'
import sloganEstanteria from '../../assets/imagen-slogan-estanteria.png'
import cafeEjemplo from '../../assets/coffee-example1.png'
import cafeEjemplo4 from '../../assets/coffee-example4.png'
import cafeEjemplo5 from '../../assets/coffee-example5.png'
import cafeEjemplo6 from '../../assets/coffee-example6.png'
import cafeEjemplo7 from '../../assets/coffee-example7.png'
import cafeEjemplo8 from '../../assets/coffee-example8.png'

import libroEjemplo1 from '../../assets/libro-example1.png'
import libroEjemplo2 from '../../assets/libro-example2.png'
import libroEjemplo3 from '../../assets/libro-example3.png'
import libroEjemplo4 from '../../assets/libro-example4.png'

import './Estanteria.css'

function Estanteria() {
  return (
    <article id="estanteria">
      <h2 className='estanteria__h2'>La estantería del mes</h2>
      <img className='estanteria__img' src={lineEstanteria} alt="" />
      <div id='estanteria__hero'>
        <img className='estanteria__hero-img' src={sloganEstanteria} alt="" />
        <div className='estanteria__hero-div'>
          <img className='estanteria__hero-div-img' src={estanteria} alt="" />
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div nuevos'>
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo4} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo5} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo6} alt="" />
            </div>
          </div>
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div enDescuento'>
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo5} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo6} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo7} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo8} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={cafeEjemplo4} alt="" />
            </div>
          </div>
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div masPedidos'>
              <img className='estanteria__hero-div-div-div-img' src={libroEjemplo1} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={libroEjemplo2} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={libroEjemplo3} alt="" />
              <img className='estanteria__hero-div-div-div-img' src={libroEjemplo4} alt="" />
            </div>
          </div>
          <img className='estanteria__hero-img' src={cafeEstanteria} alt="" />
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </article>
  )
}

export default Estanteria