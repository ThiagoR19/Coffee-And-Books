import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import coffeeExample1 from '../../assets/coffee-example1.png'
import coffeeExample2 from '../../assets/coffee-example2.png'
import coffeeExample3 from '../../assets/coffee-example3.png'
import iconoCarrito from '../../assets/icon-trolley.png'
import iconMinus from '../../assets/icon-minus.png'
import iconPlus from '../../assets/icon-plus.png'
import iconMarca from '../../assets/icon-marca.png'
import iconIntensidad from '../../assets/icon-intensidad.png'
import iconOrigen from '../../assets/icon-origen.png'
import iconTipo from '../../assets/icon-tipo.png'
import iconContenido from '../../assets/icon-contenido.png'

function ProductoCafe() {
  return (
    <section id='productoCafe'>
      <article id='cafe'>
        <div id='imagenes'>
          <img src={coffeeExample1} alt="Café de ejemplo" />
          <div>
            <img src={coffeeExample1} alt="Café de ejemplo" />
            <img src={coffeeExample2} alt="Café de ejemplo" />
            <img src={coffeeExample3} alt="Café de ejemplo" />
          </div>
        </div>
        <div id='informacion'>
          <div id='titulos'>
            <h2>Caramel Expresso</h2>
            <div>
              <h3>Sturbucks</h3>
              <h2>$19.000</h2>
            </div>
          </div>
          <div id='descripcion'>
            <h4>Descripción</h4>
            <p>Disfrutá de la experiencia Starbucks en la comodidad de tu casa. El Caramel Espresso combina la intensidad de granos de café 100% Arábica cuidadosamente seleccionados de América Latina con un perfil sutilmente dulce y un delicioso aroma a caramelo tostado.</p>
          </div>
          <div className='underline'></div>
          <ul id='lista'>
            <li><span>Perfil de sabor:</span> Dulce, equilibrado y con notas a caramelo mantecoso.</li>
            <li><span>Compatibilidad:</span> Cápsulas totalmente compatibles con el sistema Nespresso®.</li>
            <li><span>Momento ideal:</span> Perfecto para tomar solo como Espresso (40 ml) o combinado con leche texturizada para crear un Latte Macchiato inolvidable.</li>
          </ul>
          <div className='underline'></div>
          <div id='detalles'>
            <h3>Detalles del café</h3>
            <div><img src={iconMarca} alt="" /><span>Marca:</span><p>Sturbubcks</p></div>
            <div><img src={iconTipo} alt="Icono Tipo" /><span>Tipo:</span><p>Cápsula</p></div>
            <div><img src={iconIntensidad} alt="Icono Intensidad" /><span>Intensidad:</span><p>Sturbubcks</p></div>
            <div><img src={iconOrigen} alt="Icono Origen" /><span>Origen:</span><p>America Latina</p></div>
            <div><img src={iconContenido} alt="Icono Contenido" /><span>Contenido:</span><p>Caja de 10 capsulas</p></div>
          </div>
          <div id='botones'>
            <button><img src={iconoCarrito} alt="Icono del Carrito" />Agregar al carrito</button>
            <div>
              <button><img src={iconMinus} alt="Icono de resta" /></button>
              <span>1</span>
              <button><img src={iconPlus} alt="Icono de suma" /></button>
            </div>
          </div>
        </div>
      </article>

      <article id='carusel'>
        <h3>Misma Marca</h3>
        <div>
          <img src={leftArrow} alt="Flecha Derecha" />
          <div>
            <img src={coffeeExample1} alt="Café de ejemplo" />
            <img src={coffeeExample2} alt="Café de ejemplo" />
            <img src={coffeeExample3} alt="Café de ejemplo" />
            <img src={coffeeExample2} alt="Café de ejemplo" />
            <img src={coffeeExample2} alt="Café de ejemplo" />
          </div>
          <img src={rightArrow} alt="Flecha Derecha" />
        </div>
      </article>

    </section>
  )
}

export default ProductoCafe