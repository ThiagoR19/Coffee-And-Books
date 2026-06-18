import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import coffeeExample1 from '../../assets/coffee-example1.png'
import coffeeExample2 from '../../assets/coffee-example2.png'
import coffeeExample3 from '../../assets/coffee-example3.png'

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