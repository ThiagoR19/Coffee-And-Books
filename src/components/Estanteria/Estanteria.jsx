import estanteria from '../../assets/estanteria/Estanteria2.svg'
import cafeEstanteria from '../../assets/estanteria/imagen-cafe-estanteria.webp'

import lineEstanteria from '../../assets/estanteria/imagen-line-estanteria.webp'
import sloganEstanteria from '../../assets/home/imagen-slogan-estanteria.webp'
import cafeEjemplo from '../../assets/coffees/coffee-example1.webp'
import cafeEjemplo4 from '../../assets/coffees/coffee-example4.webp'
import cafeEjemplo5 from '../../assets/coffees/coffee-example5.webp'
import cafeEjemplo6 from '../../assets/coffees/coffee-example6.webp'
import cafeEjemplo7 from '../../assets/coffees/coffee-example7.webp'
import cafeEjemplo8 from '../../assets/coffees/coffee-example8.webp'

import libroEjemplo1 from '../../assets/books/libro-example1.webp'
import libroEjemplo2 from '../../assets/books/libro-example2.webp'
import libroEjemplo3 from '../../assets/books/libro-example3.webp'
import libroEjemplo4 from '../../assets/books/libro-example4.webp'

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
    </article>
  )
}

export default Estanteria