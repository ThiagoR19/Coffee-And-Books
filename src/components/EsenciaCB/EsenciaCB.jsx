import iconoSloganCafe from '../../assets/icono-esencia-cafe.png'
import iconoSloganLibro from '../../assets/icono-esencia-libro.png'
import imagenEsencia from '../../assets/imagen-esencia.png'

import './EsenciaCB.css'

function EsenciaCB() {
  return (
    <div id='esencia'>
      <div className='esencia__div'>
        <img className='esencia__div-img' src={iconoSloganCafe} alt="" />
        <div className='esencia__div-div'>
          <h5 className='esencia__div-div-h5'>CAFÉS QUE ACOMPAÑAN</h5>
          <p className='esencia__div-div-p'>Elegimos cafés de calidad para que <br /> cada taza sea parte de tu historia.</p>
        </div>
      </div>
      <div className='esencia__line'></div>
      <div className='esencia__div'>
        <img className='esencia__div-img' src={iconoSloganLibro} alt="" />
        <div className='esencia__div-div'>
          <h5 className='esencia__div-div-h5'>LECTURAS QUE INSPIRAN</h5>
          <p className='esencia__div-div-p'>Seleccionamos libros que abren nuevos <br /> mundos, ideas y perspectivas.</p>
        </div>
      </div>
      <img className='esencia__img' src={imagenEsencia} alt="" />
    </div>
  )
}

export default EsenciaCB