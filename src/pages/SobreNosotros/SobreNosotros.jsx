import imagenNuestraHistoria from '../../assets/img-portada.png'
import iconBag from '../../assets/icon-bag-estadisticas.png'
import iconPeople from '../../assets/icon-people-estadisticas.png'
import iconCoffee from '../../assets/icon-coffee-estadisticas.png'

import './SobreNosotros.css'

function SobreNosotros() {
  return (
    <section id="sobreNosotros">
      <article id="nuestraHistoria">
        <div className='nuestraHistoria__div'>
          <h2 className='nuestraHistoria__div-h2'>Nuestra Historia</h2>
          <p className='nuestraHistoria__div-p'>Donde el café y las letras se encuentran.</p>
        </div>
        <img className='nuestraHistoria__img' src={imagenNuestraHistoria} alt="Imagen de nuestra historia" />
      </article>
      <article id='somosCB'>
        <h2 className='somosCB__h2'>Somos Coffee & Books</h2>
        <p className='somosCB__p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </article>
      <article id='estadisticas'>
        <div className='estadisticas__div'>
          <div className='estadisticas__div-div'>
            <img className='estadisticas__div-img' src={iconBag} alt="Icono Productos Vendidos" />
            <span className='estadisticas__div-div-span'>600+</span>
          </div>
          <span className='estadisticas__div-span'>Productos vendidos</span>
        </div>
        <div className='estadisticas__line'></div>
        <div className='estadisticas__div'>
          <div className='estadisticas__div-div'>
            <img className='estadisticas__div-img' src={iconPeople} alt="Icono Clientes Satisfechos" />
            <span className='estadisticas__div-div-span'>120+</span>
          </div>
          <span className='estadisticas__div-span'>Clientes satisfechos</span>
        </div>
        <div className='estadisticas__line'></div>
        <div className='estadisticas__div'>
          <div className='estadisticas__div-div'>
            <img className='estadisticas__div-img' src={iconCoffee} alt="Icono Café" />
            <span className='estadisticas__div-div-span'>19+</span>
          </div>
          <span className='estadisticas__div-span'>Países de Cafés</span>
        </div>
      </article>
    </section>
  )
}

export default SobreNosotros