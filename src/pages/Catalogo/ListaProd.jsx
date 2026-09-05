import { useState, useEffect } from 'react';
import './ListaProd.css';
import useCarrusel from './hooksCatalogo/useCarrousel';
import { useRoute } from 'wouter';

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoChevronRight, GoChevronLeft, } from "react-icons/go";
import cafe1 from '../../assets/catalogo/productos/colombia.webp'
import cafe2 from '../../assets/catalogo/productos/expresso.webp'
import cafe3 from '../../assets/catalogo/productos/cositas.webp'
import cafe4 from '../../assets/catalogo/productos/georgeOrwel.webp'
import cafe5 from '../../assets/catalogo/productos/habitosAtom.webp'
import cafe6 from '../../assets/catalogo/productos/maus.webp'
import cafe7 from '../../assets/catalogo/productos/unCafe.webp'
import cafe8 from '../../assets/catalogo/productos/verdeYblanco.webp'
import cafe9 from '../../assets/catalogo/productos/laInvencion.webp'

const productos = [
  { etiqueta: 'CAFE PREMIUM', especificacion: 'algo del prod', id: 1, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3, tipo: "libro" },
  { etiqueta: 'OFERTA', especificacion: 'Especificacion', id: 2, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe8, tipo: "libro" },
  { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 3, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe5, tipo: "libro" },
  { etiqueta: 'DESTACADO', especificacion: 'Especificacion', id: 4, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe1, tipo: "libro" },
  { etiqueta: 'OFERTA ESPECIAL', especificacion: 'Especificacion', id: 5, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3, tipo: "libro" },
  { etiqueta: 'POPULAR', especificacion: 'Especificacion', id: 6, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe2, tipo: "libro" },
  { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 7, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe9, tipo: "libro" },
  { etiqueta: 'DESTACADO', especificacion: 'Especificacion', id: 8, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe7, tipo: "libro" },
  { etiqueta: 'OFERTA', especificacion: 'Especificacion', id: 9, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe4, tipo: "libro" },
  { etiqueta: 'POPULAR', especificacion: 'Especificacion', id: 10, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe6, tipo: "libro" },
  { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 11, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3, tipo: "cafe" },
  { etiqueta: 'DESTACADO', especificacion: 'Especificacion', id: 12, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe8, tipo: "cafe" },
  { etiqueta: 'OFERTA ESPECIAL', especificacion: 'Especificacion', id: 13, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe5, tipo: "cafe" },
  { etiqueta: 'POPULAR', especificacion: 'Especificacion', id: 14, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe1, tipo: "cafe" },
  { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 15, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3, tipo: "cafe" },
]

// cuando se active la paginación,hayque reemplazar `productos` por
// `productosMostrados` en el .map() y descomentar las flechas de navegación maldito pe causa.

export default function ListaProductos() {
  const [, route] = useRoute(':vista/:filtro'); // pagina/catalogo/libros
  function mostrar() {
    if (route.filtro == "todos") {
      return (
        productos.map((producto) => (
          <div key={producto.id} className="lista-productos_card">

            <div className="card-imagen-contenedor">
              {producto.etiqueta && (
                <span className="card-etiqueta">{producto.etiqueta}</span>
              )}
              {producto.imagen && (
                <img className="card-imagen" src={producto.imagen} alt={producto.nombre} />
              )}
            </div>

            <div className="card-info">
              <div className="card-info-texto">
                <h3 className="card-nombre">{producto.nombre}</h3>
                <span className="card-especificacion">{producto.especificacion}</span>
                <span className="card-precio">${producto.precio}</span>
              </div>
              <button className="card-btn-agregar">
                <AiOutlinePlusCircle size={35} color="#DCDACE" />
              </button>
            </div>

          </div>
        ))

      )
    } else {
      return (
        productos.filter((p) => p.tipo == route.filtro).map((producto) => (
          <div key={producto.id} className="lista-productos_card">

            <div className="card-imagen-contenedor">
              {producto.etiqueta && (
                <span className="card-etiqueta">{producto.etiqueta}</span>
              )}
              {producto.imagen && (
                <img className="card-imagen" src={producto.imagen} alt={producto.nombre} />
              )}
            </div>

            <div className="card-info">
              <div className="card-info-texto">
                <h3 className="card-nombre">{producto.nombre}</h3>
                <span className="card-especificacion">{producto.especificacion}</span>
                <span className="card-precio">${producto.precio}</span>
              </div>
              <button className="card-btn-agregar">
                <AiOutlinePlusCircle size={35} color="#DCDACE" />
              </button>
            </div>
          </div>
        ))
      )
    }
  }
  console.log(route);

  const [animando, setAnimando] = useState(false);
  // const esMobileRef = useRef(window.matchMedia('(max-width: 480px)').matches);
  // const [esMobile, setEsMobile] = useState(esMobileRef.current);
  const [esMobile, setEsMobile] = useState(() => window.matchMedia('(max-width: 480px)').matches);


  // Hook conservado — este lo usamos cuando se active la paginación, por ahora no hace nada
  const cambiarPagina = (accion) => {
    setAnimando(true);
    setTimeout(() => {
      accion();
      setAnimando(false);
    }, 300);
  }

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 480px)');
    const handler = (e) => setEsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const sizeFlechas = esMobile ? 40 : 110;

  const productosPorPagina = esMobile ? 9 : 15;

  const {
    // productosMostrados,
    irAtras,
    irAdelante,
    hayPaginaAnterior,
    hayPaginaSiguiente,
  } = useCarrusel(productos, productosPorPagina);

  return (

    <div className="main-lista" >

      <div className="lista-productos">

        <div className="filtro-contenedor">
          <p className="texto-mostrando desktop-only" style={{ color: 'white' }}>
            PAGINA 1/{productos.length} - <b>MOSTRANDO</b>: {productos.length} PRODUCTOS
          </p>
          <div className="filtro-select">

            <span style={{ color: 'white' }}>ORDENAR POR:</span>

            <div className="filtro-select-wrapper">
              <select className="FiltroDeLista">
                <option value="1">MÁS RECIENTES</option>
                <option value="2">MÁS VENDIDOS</option>
                <option value="3">NOVEDADES</option>
                <option value="4">CAFÉ</option>
                <option value="5">PREMIUM</option>
                <option value="6">EN GRANO</option>
                <option value="7">MOLIDO</option>
                <option value="8">CÁPSULA</option>
                <option value="9">DE ORIGEN</option>
                <option value="10">COMBOS ESPECIALES</option>
                <option value="11">LIBROS</option>
                <option value="12">NOVELAS</option>
                <option value="13">DE CIENCIA FICCIÓN</option>
                <option value="14">CÓMICS</option>
                <option value="15">POLICIALES</option>
                <option value="16">TODOS</option>
              </select>
            </div>
          </div>
        </div>

        {/* Flechitas pro max deshabilitadas hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación */}
        {hayPaginaAnterior && (
        <button className="prod-flechitas izquierda" onClick={() => cambiarPagina(irAtras)}>
          <GoChevronLeft size={sizeFlechas} />
        </button>
        )} 

        <div className={`prod-grid ${animando ? 'animando' : ''}`}>
          {mostrar()}
        </div>

        <p className="texto-mostrando mobile-only">
          PAGINA 1/{productos.length} - <b>MOSTRANDO</b>: {productos.length} PRODUCTOS
        </p>

        {/* Flechita de la derecha deshabilitada hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación */}
        {hayPaginaSiguiente && (
        <button className="prod-flechitas derecha" onClick={() => cambiarPagina(irAdelante)}>
          <GoChevronRight size={sizeFlechas} />
        </button>
        )} 
      </div>
    </div>
  );
}