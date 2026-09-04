import iconoCarrito from '../../assets/icon-trolley.png'
import iconMinus from '../../assets/icon-minus.png'
import iconPlus from '../../assets/icon-plus.png'
import iconMarca from '../../assets/icon-marca.png'
import iconIntensidad from '../../assets/icon-intensidad.png'
import iconOrigen from '../../assets/icon-origen.png'
import iconTipo from '../../assets/icon-tipo.png'
import iconContenido from '../../assets/icon-contenido.png'
import coffeeExample1 from '../../assets/coffee-example1.png'
import coffeeExample2 from '../../assets/coffee-example2.png'
import coffeeExample3 from '../../assets/coffee-example3.png'

import iconoFlechaDe from '../../assets/icono-flecha-derecha.png'
import iconoFlechaIz from '../../assets/icono-flecha-izquierda.png'

import VerMas from '../VerMas/VerMas'

import './ProductoCafeDesarrollo.css'

function ProductoCafeDesarrollo() {
  return (
    <article id='cafe'>
      <div id='titulos'>
        <h2 className='titulos__h2'>Caramel Expresso</h2>
        <div className='titulos__div'>
          <h3 className='titulos__div-h3'>Starbucks</h3>
          <h2 className='titulos__div-h2'>$19.000</h2>
        </div>
      </div>
      <div id='imagenes'>
        <img className='imagenes__imgs1' src={iconoFlechaDe} alt="" />
        <img className='imagenes__imgs2' src={iconoFlechaIz} alt="" />
        <img className='imagenes__img' src={coffeeExample1} alt="Café de ejemplo" />
        <div className='imagenes__div'>
          <img className='imagenes__div-img' src={coffeeExample1} alt="Café de ejemplo" />
          <img className='imagenes__div-img' src={coffeeExample2} alt="Café de ejemplo" />
          <img className='imagenes__div-img' src={coffeeExample3} alt="Café de ejemplo" />
        </div>
      </div>
      <div id='informacion'>
        <div id='descripcion'>
          <h4 className='descripcion__h4'>DESCRIPCIÓN</h4>
          <VerMas
            className='descripcion__p'
            limite={150}
            texto="Disfrutá de la experiencia Starbucks en la comodidad de tu casa. El Caramel Espresso combina la intensidad de granos de café 100% Arábica cuidadosamente seleccionados de América Latina con un perfil sutilmente dulce y un delicioso aroma a caramelo tostado."
          />
          <div className='underline underline-desc'></div>
          <ul id='lista'>
            <li><span>Perfil de sabor:</span> Dulce, equilibrado y con notas a caramelo mantecoso.</li>
            <li><span>Compatibilidad:</span> Cápsulas totalmente compatibles con el sistema Nespresso®.</li>
            <li><span>Momento ideal:</span> Perfecto para tomar solo como Espresso (40 ml) o combinado con leche texturizada para crear un Latte Macchiato inolvidable.</li>
          </ul>
        </div>

        <div className='underline underline-det'></div>
        <div id='detalles'>
          <h3 className='detalles__h3'>DETALLES DEL CAFÉ</h3>
          <div className='detalles__div'><img className='detalles__div-img' src={iconMarca} alt="" /><span>Marca:</span><p>Starbucks</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconTipo} alt="Icono Tipo" /><span>Tipo:</span><p>Cápsula</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconIntensidad} alt="Icono Intensidad" /><span>Intensidad:</span><p>(media)</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconOrigen} alt="Icono Origen" /><span>Origen:</span><p>América Latina</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconContenido} alt="Icono Contenido" /><span className='span-cont'>Contenido:</span><p><b>Contenido:</b>Caja por 10 cápsulas</p></div>
        </div>
        <div id='botones'>
          <button className='botones__button'><img src={iconoCarrito} alt="Icono del Carrito" />AGREGAR AL CARRITO</button>
          <div className='botones__div'>
            <button className='botones__div-button'><img src={iconMinus} alt="Icono de resta" /></button>
            <span className='botones__div-span'>1</span>
            <button className='botones__div-button'><img src={iconPlus} alt="Icono de suma" /></button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductoCafeDesarrollo