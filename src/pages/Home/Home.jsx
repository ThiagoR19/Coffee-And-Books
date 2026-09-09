import EsenciaCB from "../../components/EsenciaCB/EsenciaCB"
import Estanteria from "../../components/Estanteria/Estanteria"
import { useLocation } from "wouter"
import { getColorEtiqueta } from "../../context/etiquetaColores"

import imagenIzquierda from '../../assets/home/imagen-home-izquierda.webp'
import imagenIzquierdaMobile from '../../assets/fondos/fondo-img-hero-libro.svg'
import imagenDerechaMobile from '../../assets/fondos/fondo-img-hero-cafe.svg'
import imagenDerecha from '../../assets/home/imagen-home-derecha.webp'
import imagenSlogan from '../../assets/fondos/fondo-tarjeta4.webp'

import { CiCirclePlus } from "react-icons/ci";
import obtenerPodio from "../../context/obtenerPodio"
import iconoFlecha from '../../assets/icono-flecha.svg'

import './Home.css'
import { formatPrice, useShop } from "../../context/ShopContext";

function Home() {
  const [, setLocation] = useLocation();
  const { products, isLoading, error, addToCart, getProductImage } = useShop();
  const top3 = obtenerPodio(products);

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
            <button className="hero__div-button" onClick={() => setLocation("/catalogo/libro")}>VER LIBROS</button>
            <button className="hero__div-button" onClick={() => setLocation("/catalogo/cafe")}>EXPLORAR CAFÉS</button>
          </div>
          <img className="hero__imagen-derecha hero__imagen-derecha--desktop" src={imagenDerecha} alt="Imagen principal derecha" />
          <img className="hero__imagen-derecha hero__imagen-derecha--mobile" src={imagenDerechaMobile} alt="Imagen principal derecha" />
        </div>
        {/* resto del componente igual, sin conflictos */}
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
            {/*  */}
            <button className="explora__div-div-button" onClick={() => setLocation("/catalogo/todos?orden=recientes")}>CONOCER MÁS</button>
            {/*  */}
          </div>
          <div className="explora__div-div novedades">
            <h3 className="explora__div-div-h3">NOVEDADES <br /> LITERARIAS</h3>
            <p className="explora__div-div-p">Descubrí los últimos <br /> lanzamientos.</p>
            {/*  */}

            <button className="explora__div-div-button" onClick={() => setLocation("/catalogo/todos?orden=novedades")}>VER NOVEDADES</button>
            {/*  */}
          </div>
          <div className="explora__div-div combos">
            <h3 className="explora__div-div-h3" >COMBOS <br /> ESPECIALES</h3>
            <p className="explora__div-div-p">Libros + Café <br /> al mejor precio</p>
            {/*  */}
            <button className="explora__div-div-button" onClick={() => setLocation("/catalogo/todos?orden=combos")}>VER COMBOS</button>
            {/*  */}
          </div>
        </div>
        <div className="explora__slogan">
          <img className="explora__slogan-img" src={imagenSlogan} alt="" />
          <div className="explora__slogan-div">
            <h2 className="explora__slogan-div-h2">“Cada lectura merece <br /> un buen café”</h2>
            <div className="underline-slogan"></div>
          </div>
          {/* <button className="explora__slogan-button">Descubrí los combos</button> */}
        </div>
      </article>
      <article id="masVendido">
        <h2 className="masVendido__h2">Los más vendidos</h2>
        {isLoading && <p className="catalogo-estado">Cargando productos desde Google Sheets…</p>}
        {error && <p className="catalogo-estado">{error}</p>}
        {!isLoading && !error && (
          <div className="masVendidoP">
            {top3.map((producto) => (
              <ProductoTop key={producto.id_prod} producto={producto} addToCart={addToCart} getProductImage={getProductImage} />
            ))}
          </div>
        )}
      </article>
    </section>
  )
}

export default Home

function ProductoTop({ producto, addToCart, getProductImage }) {
  return (
    <div className="masVendido__div" >

      <div className="masVendido__div-cartel cartel2" style={{ background: getColorEtiqueta(producto.etiqueta || 'MÁS VENDIDO') }}>
        <h6>{producto.etiqueta || 'MÁS VENDIDO'}</h6>
      </div>

      <img className="masVendido__div-img" src={getProductImage(producto)} alt={producto.nombre} />
      <div className="masVendido__div-div">
        <div className="masVendido__div-div-div">
          <h5 className="masVendido__div-div-div-h5">{producto.nombre}</h5>
          <h6 className="masVendido__div-div-div-h6">{producto.descripcion}</h6>
          <span className="masVendido__div-div-div-span">${formatPrice(producto.precio)}</span>
        </div>
        <button className="iconoPlus-button" onClick={() => addToCart(producto)} aria-label={`Agregar ${producto.nombre} al carrito`}>
          <CiCirclePlus className="iconoPlus" />
        </button>
      </div>
    </div >
  )
} 
