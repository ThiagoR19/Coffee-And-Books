import EsenciaCB from "../../components/EsenciaCB/EsenciaCB"
import Estanteria from "../../components/Estanteria/Estanteria"

import imagenIzquierda from '../../assets/home/imagen-home-izquierda.webp'
import imagenIzquierdaMobile from '../../assets/fondos/fondo-img-hero-libro.svg'
import imagenDerechaMobile from '../../assets/fondos/fondo-img-hero-cafe.svg'
import imagenDerecha from '../../assets/home/imagen-home-derecha.webp'
import imagenSlogan from '../../assets/fondos/fondo-tarjeta4.webp'

import { CiCirclePlus } from "react-icons/ci";
// import cafeEjemplo1 from '../../assets/coffee-example1.png'
import cafeEjemplo2 from '../../assets/coffees/coffee-example2.webp'
// import cafeEjemplo3 from '../../assets/coffee-example3.png'

// import sombraEstanteria from '../../assets/sombra-estanteria.svg'

import obtenerPodio from "../../context/obtenerPodio"

import iconoFlecha from '../../assets/icono-flecha.svg'

import './Home.css'

import db from '../../db/db.json'

function Home() {

  const top3 = obtenerPodio(db.Productos)

  return (
    <section id="Home">
      <article id="hero">
        <div className="hero__div">
          <img className="hero__imagen-izquierda hero__imagen-izquierda--desktop" src={imagenIzquierda} alt="Imagen principal izquierda" />
          <img className="hero__imagen-izquierda hero__imagen-izquierda--mobile" src={imagenIzquierdaMobile} alt="Imagen principal izquierda" />
          <h4 className="hero__h4">BIENVENIDO A COFFEE AND BOOKS</h4>
          <h1 className="hero__h1">Libros que cuentan historias. <br /> Café que crea momentos.</h1>
          <div className="hero__underline"></div>
          <p className="hero__p">Tu tienda online de libros y café importado. <br />
            Elegí tu próxima lectura y acompañala con <br />
            el mejor café del mundo.</p>
          <div className="hero__buttons">
            <button className="hero__div-button">VER LIBROS</button>
            <button className="hero__div-button">EXPLORAR CAFÉS</button>
          </div>
          <img className="hero__imagen-derecha hero__imagen-derecha--desktop" src={imagenDerecha} alt="Imagen principal derecha" />
          <img className="hero__imagen-derecha hero__imagen-derecha--mobile" src={imagenDerechaMobile} alt="Imagen principal derecha" />
        </div>
        <EsenciaCB />
        <Estanteria />
        <div id='maderaEstanteria'>
          <span>Ver todos los productos</span>
          <img src={iconoFlecha} alt="Icono flecha" />
          {/* <img className="sombra__estanteria sombra1" src={sombraEstanteria} alt="Sombra de la estanteria" />
          <img className="sombra__estanteria sombra2" src={sombraEstanteria} alt="Sombra de la estanteria" /> */}
        </div>

      </article>

      <article id="explora">
        <h2 className="explora__h2">Explorá nuestros mundos</h2>
        <div className="explora__div">
          <div className="explora__div-div cafes-origen">
            <h3 className="explora__div-div-h3">CAFÉS DE <br /> ORIGEN</h3>
            <p className="explora__div-div-p">Seleccionamos lo mejor del  <br />mundo para vos.</p>
            <button className="explora__div-div-button">CONOCER MÁS</button>
          </div>
          <div className="explora__div-div novedades">
            <h3 className="explora__div-div-h3">NOVEDADES <br /> LITERARIAS</h3>
            <p className="explora__div-div-p">Descubrí los últimos <br /> lanzamientos.</p>
            <button className="explora__div-div-button">VER NOVEDADES</button>
          </div>
          <div className="explora__div-div combos">
            <h3 className="explora__div-div-h3" >COMBOS <br /> ESPECIALES</h3>
            <p className="explora__div-div-p">Libros + Café <br /> al mejor precio</p>
            <button className="explora__div-div-button" >VER COMBOS</button>
          </div>
        </div>
        <div className="explora__slogan">
          <img className="explora__slogan-img" src={imagenSlogan} alt="" />
          <div className="explora__slogan-div">
            <h2 className="explora__slogan-div-h2">“Cada lectura merece <br /> un buen café”</h2>
            <div className="underline-slogan"></div>
          </div>
          <button className="explora__slogan-button">Descubrí los combos</button>
        </div>
      </article>
      <article id="masVendido">
        <h2 className="masVendido__h2">Los más vendidos</h2>
        <div className="masVendidoP">
          {top3.map((producto) => {
            return <ProductoTop producto={producto} key={producto.id_prod} />
          })}
        </div>
      </article>
    </section>
  )
}

export default Home

function ProductoTop({ producto }) {
  console.log(producto)
  return (
    < div className="masVendido__div" >
      <div className="masVendido__div-cartel cartel2"><h6>NUEVO</h6></div>
      <img className="masVendido__div-img" src={cafeEjemplo2} alt="" />
      <div className="masVendido__div-div">
        <div className="masVendido__div-div-div">
          <h5 className="masVendido__div-div-div-h5">{producto.nombre}</h5>
          <h6 className="masVendido__div-div-div-h6">{producto.desc}</h6>
          <span className="masVendido__div-div-div-span">${producto.precio}</span>
        </div>
        <CiCirclePlus className="iconoPlus" />
      </div>
    </div >
  )
} 