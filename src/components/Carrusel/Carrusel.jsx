import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import coffeeExample1 from '../../assets/coffees/coffee-example1.webp'
import coffeeExample2 from '../../assets/coffees/coffee-example2.webp'
import coffeeExample3 from '../../assets/coffees/coffee-example3.webp'

import './Carrusel.css'

function Carrusel() {
  return (
    <article id='carusel'>
      <h3 className='carusel__h3'>Misma Marca</h3>
      <div className='carusel__div'>
        <img className='carusel__div-img' src={leftArrow} alt="Flecha Derecha" />
        <div className='carusel__div-div'>
          <img className='carusel__div-div-img' src={coffeeExample1} alt="Café de ejemplo" />
          <img className='carusel__div-div-img' src={coffeeExample2} alt="Café de ejemplo" />
          <img className='carusel__div-div-img' src={coffeeExample3} alt="Café de ejemplo" />
          <img className='carusel__div-div-img' src={coffeeExample2} alt="Café de ejemplo" />
          <img className='carusel__div-div-img' src={coffeeExample2} alt="Café de ejemplo" />
        </div>
        <img className='carusel__div-img' src={rightArrow} alt="Flecha Derecha" />
      </div>
    </article>
  )
}

export default Carrusel