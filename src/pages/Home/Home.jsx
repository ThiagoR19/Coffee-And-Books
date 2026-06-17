import EsenciaCB from "../../components/EsenciaCB/EsenciaCB"
import Estanteria from "../../components/Estanteria/Estanteria"

import imagenIzquierda from '../../assets/imagen-home-izquierda.png'
import imagenDerecha from '../../assets/imagen-home-derecha.png'

import './Home.css'

function Home() {
  return (
    <section id="Home">
      <article id="hero">
        <div className="hero__div">
          <img className="hero__imagen-izquierda" src={imagenIzquierda} alt="" />
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
          <img className="hero__imagen-derecha" src={imagenDerecha} alt="" />
        </div>
        <EsenciaCB />
        <Estanteria />
      </article>

      <article id="explora">
        <h2 className="explora__h2">Explorá nuestros mundos</h2>
        <div className="explora__div">
          <div className="explora__div-div">
            <h3 className="explora__div-div-h3">CAFÉS DE ORIGEN</h3>
            <p className="explora__div-div-p">Seleccionamos lo mejor del mundo para vos.</p>
            <button className="explora__div-div-button">CONOCER MÁS</button>
          </div>
          <div className="explora__div-div">
            <h3 className="explora__div-div-h3">NOVEDADES LITERARIAS</h3>
            <p className="explora__div-div-p">Descubrí los últimos lanzamientos.</p>
            <button className="explora__div-div-button">VER NOVEDADES</button>
          </div>
          <div className="explora__div-div">
            <h3 className="explora__div-div-h3" >COMBOS ESPECIALES</h3>
            <p className="explora__div-div-p">Libros + Café al mejor precio</p>
            <button className="explora__div-div-button" >VER COMBOS</button>
          </div>
        </div>
        <div className="explora__slogan">
          <img className="explora__slogan-img" src="" alt="" />
          <div className="explora__slogan-div">
            <h2 className="explora__slogan-div-h2">“Cada lectura merece un buen café”</h2>
            <div className="underline-slogan"></div>
          </div>
          <button className="explora__slogan-button">Descubrí los combos</button>
        </div>
      </article>
      <article id="masVendido">
        <h2 className="masVendido__h2">Los más vendidos</h2>
      </article>
    </section>
  )
}

export default Home