import { useState } from 'react'
import iconoCarrito from '../../assets/icon-trolley.svg'
import iconMinus from '../../assets/icon-minus.svg'
import iconPlus from '../../assets/icon-plus.svg'
import iconMarca from '../../assets/icon-marca.svg'
import iconIntensidad from '../../assets/icon-intensidad.svg'
import iconOrigen from '../../assets/icon-origen.svg'
import iconTipo from '../../assets/icon-tipo.svg'
import iconContenido from '../../assets/icon-contenido.svg'
import coffeeExample2 from '../../assets/coffees/coffee-example2.webp'
import coffeeExample3 from '../../assets/coffees/coffee-example3.webp'

import iconoFlechaDe from '../../assets/icono-flecha-derecha.svg'
import iconoFlechaIz from '../../assets/icono-flecha-izquierda.svg'

import './ProductoCafeDesarrollo.css'

function ProductoCafeDesarrollo({ producto }) {
  const imagenes = [producto.imagen, coffeeExample2, coffeeExample3].filter(Boolean);
  const [imagenActiva, setImagenActiva] = useState(0);

  const mostrarImagenAnterior = () => {
    setImagenActiva((actual) => (actual - 1 + imagenes.length) % imagenes.length);
  };

  const mostrarImagenSiguiente = () => {
    setImagenActiva((actual) => (actual + 1) % imagenes.length);
  };

  return (
    <article id='cafe'>
      <div id='titulos'>
        <h2 className='titulos__h2'>{producto.nombre}</h2>
        <div className='titulos__div'>
          <h3 className='titulos__div-h3'>{producto.marca}</h3>
          <h2 className='titulos__div-h2'>${producto.precio}</h2>
        </div>
      </div>
      <div id='imagenes'>
        <button className='imagenes__flecha imagenes__imgs1' onClick={mostrarImagenSiguiente} aria-label="Ver siguiente imagen">
          <img src={iconoFlechaDe} alt="" />
        </button>
        <button className='imagenes__flecha imagenes__imgs2' onClick={mostrarImagenAnterior} aria-label="Ver imagen anterior">
          <img src={iconoFlechaIz} alt="" />
        </button>
        <img className='imagenes__img' src={imagenes[imagenActiva]} alt={producto.nombre} />
        <div className='imagenes__div'>
          {imagenes.map((imagen, indice) => (
            <button
              key={imagen}
              className={`imagenes__miniatura ${indice === imagenActiva ? 'activa' : ''}`}
              onClick={() => setImagenActiva(indice)}
              aria-label={`Ver imagen ${indice + 1}`}
            >
              <img className='imagenes__div-img' src={imagen} alt={producto.nombre} />
            </button>
          ))}
        </div>
      </div>
      <div id='informacion'>
        <div id='descripcion'>
          <h4 className='descripcion__h4'>DESCRIPCIÓN</h4>
          <p className='descripcion__p'>{producto.descripcion}</p>
          <div className='underline underline-desc'></div>
          <ul id='lista'>
            <li><span>Intensidad:</span> {producto.intensidad}</li>
            <li><span>Tipo:</span> {producto.tipoCafe}</li>
            <li><span>Origen:</span> {producto.origen}</li>
          </ul>
        </div>

        <div className='underline underline-det'></div>
        <div id='detalles'>
          <h3 className='detalles__h3'>DETALLES DEL CAFÉ</h3>
          <div className='detalles__div'><img className='detalles__div-img' src={iconMarca} alt="" /><span>Marca:</span><p>{producto.marca}</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconTipo} alt="Icono Tipo" /><span>Tipo:</span><p>{producto.tipoCafe}</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconIntensidad} alt="Icono Intensidad" /><span>Intensidad:</span><p>{producto.intensidad}</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconOrigen} alt="Icono Origen" /><span>Origen:</span><p>{producto.origen}</p></div>
          <div className='detalles__div'><img className='detalles__div-img' src={iconContenido} alt="Icono Contenido" /><span className='span-cont'>Contenido:</span><p>{producto.contenido}</p></div>
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