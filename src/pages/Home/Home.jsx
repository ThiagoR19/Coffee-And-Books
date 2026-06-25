import EsenciaCB from "../../components/EsenciaCB/EsenciaCB"
import Estanteria from "../../components/Estanteria/Estanteria"

import imagenIzquierda from '../../assets/imagen-home-izquierda.png'
import imagenDerecha from '../../assets/imagen-home-derecha.png'
import imagenSlogan from '../../assets/fondos/fondo-tarjeta4.png'

import { CiCirclePlus } from "react-icons/ci";
import cafeEjemplo1 from '../../assets/coffee-example1.png'
import cafeEjemplo2 from '../../assets/coffee-example2.png'
import cafeEjemplo3 from '../../assets/coffee-example3.png'

// import sombraEstanteria from '../../assets/sombra-estanteria.svg'

import iconoFlecha from '../../assets/icono-flecha.svg'

import './Home.css'

function Home() {
  return (
    <section id="Home">
      <article id="hero">
        <div className="hero__div">
          <img className="hero__imagen-izquierda" src={imagenIzquierda} alt="Imagen principal izquierda" />
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
          <img className="hero__imagen-derecha" src={imagenDerecha} alt="Imagen principal derecha" />
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
          <div className="masVendido__div">
            <div className="masVendido__div-cartel cartel1"><h6>NOVEDAD</h6></div>
            <img className="masVendido__div-img" src={cafeEjemplo1} alt="" />
            <div className="masVendido__div-div">
              <div className="masVendido__div-div-div">
                <h5 className="masVendido__div-div-div-h5">Nombre del café</h5>
                <h6 className="masVendido__div-div-div-h6">Especificación</h6>
                <span className="masVendido__div-div-div-span">$100.000</span>
              </div>
              <CiCirclePlus className="iconoPlus" />
            </div>
          </div>
          <div className="masVendido__div">
            <div className="masVendido__div-cartel cartel2"><h6>PREMIUM</h6></div>
            <img className="masVendido__div-img" src={cafeEjemplo2} alt="" />
            <div className="masVendido__div-div">
              <div className="masVendido__div-div-div">
                <h5 className="masVendido__div-div-div-h5">Nombre del café</h5>
                <h6 className="masVendido__div-div-div-h6">Especificación</h6>
                <span className="masVendido__div-div-div-span">$100.000</span>
              </div>
              <CiCirclePlus className="iconoPlus" />
            </div>
          </div>
          <div className="masVendido__div">
            <div className="masVendido__div-cartel cartel3"><h6>NOVEDAD</h6></div>
            <img className="masVendido__div-img" src={cafeEjemplo3} alt="" />
            <div className="masVendido__div-div">
              <div className="masVendido__div-div-div">
                <h5 className="masVendido__div-div-div-h5">Nombre del café</h5>
                <h6 className="masVendido__div-div-div-h6">Especificación</h6>
                <span className="masVendido__div-div-div-span">$100.000</span>
              </div>
              <CiCirclePlus className="iconoPlus" />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Home