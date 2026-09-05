import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import './ListaProd.css';
import useCarrusel from './hooksCatalogo/useCarrousel';

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
  { etiqueta: 'CAFE PREMIUM', especificacion: 'En grano', id: 1, nombre: 'Café Colombia', precio: '100.000', imagen: cafe3, categoria: 'cafe', origen: true, premium: true, vendidos: 42, fecha: 15 },
  { etiqueta: 'OFERTA', especificacion: 'Molido', id: 2, nombre: 'Café Espresso', precio: '100.000', imagen: cafe8, categoria: 'cafe', molido: true, vendidos: 67, fecha: 18 },
  { etiqueta: 'NUEVO', especificacion: 'Novela', id: 3, nombre: 'El Principito', precio: '100.000', imagen: cafe5, categoria: 'libro', novela: true, fecha: 20 },
  { etiqueta: 'DESTACADO', especificacion: 'Novela', id: 4, nombre: 'Cien años de soledad', precio: '100.000', imagen: cafe1, categoria: 'libro', novela: true, fecha: 22 },
  { etiqueta: 'OFERTA ESPECIAL', especificacion: 'Combo especial', id: 5, nombre: 'Combo lectura y café', precio: '100.000', imagen: cafe3, categoria: 'combo', oferta: true, fecha: 25 },
  { etiqueta: 'POPULAR', especificacion: 'En grano', id: 6, nombre: 'Café de origen', precio: '100.000', imagen: cafe2, categoria: 'cafe', origen: true, vendidos: 80, fecha: 12 },
  { etiqueta: 'NUEVO', especificacion: 'Ciencia ficción', id: 7, nombre: '1984', precio: '100.000', imagen: cafe9, categoria: 'libro', cienciaFiccion: true, fecha: 27 },
  { etiqueta: 'DESTACADO', especificacion: 'Cómic', id: 8, nombre: 'Maus', precio: '100.000', imagen: cafe7, categoria: 'libro', comic: true, fecha: 10 },
  { etiqueta: 'OFERTA', especificacion: 'Cápsula', id: 9, nombre: 'Café cápsula', precio: '100.000', imagen: cafe4, categoria: 'cafe', capsula: true, oferta: true, fecha: 8 },
  { etiqueta: 'POPULAR', especificacion: 'Policial', id: 10, nombre: 'Novela policial', precio: '100.000', imagen: cafe6, categoria: 'libro', policial: true, vendidos: 55, fecha: 6 },
  { etiqueta: 'NUEVO', especificacion: 'Café', id: 11, nombre: 'Café especial', precio: '100.000', imagen: cafe3, categoria: 'cafe', fecha: 30 },
  { etiqueta: 'DESTACADO', especificacion: 'Libro', id: 12, nombre: 'Novedad literaria', precio: '100.000', imagen: cafe8, categoria: 'libro', fecha: 29 },
  { etiqueta: 'OFERTA ESPECIAL', especificacion: 'Combo especial', id: 13, nombre: 'Combo de regalo', precio: '100.000', imagen: cafe5, categoria: 'combo', oferta: true, fecha: 5 },
  { etiqueta: 'POPULAR', especificacion: 'En grano', id: 14, nombre: 'Café intenso', precio: '100.000', imagen: cafe1, categoria: 'cafe', vendidos: 60, fecha: 3 },
  { etiqueta: 'NUEVO', especificacion: 'Libro', id: 15, nombre: 'Última novedad', precio: '100.000', imagen: cafe3, categoria: 'libro', fecha: 31 },
]

// cuando se active la paginación,hayque reemplazar `productos` por
// `productosMostrados` en el .map() y descomentar las flechas de navegación maldito pe causa.

export default function ListaProductos() {


  const [location] = useLocation();
  const filtroInicial = new URLSearchParams(location.split('?')[1]).get('filtro');
  const [animando, setAnimando] = useState(false);
  const [esMobile, setEsMobile] = useState(() => window.matchMedia('(max-width: 480px)').matches);
  const [filtro, setFiltro] = useState(filtroInicial || '16');

  // Hook conservado — este lo usamos cuando se active la paginación, por ahora no hace nada

  // const cambiarPagina = (accion) => {
  //   setAnimando(true);
  //   setTimeout(() => {
  //     accion();
  //     setAnimando(false);
  //   }, 300);
  // }

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 480px)');
    const handler = (e) => setEsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const sizeFlechas = esMobile ? 40 : 110;

  const productosPorPagina = esMobile ? 9 : 15;

  const productosFiltrados = useMemo(() => {
    const resultado = [...productos];

    switch (filtro) {
      case '1':
        return resultado.sort((a, b) => b.fecha - a.fecha);
      case '2':
        return resultado.sort((a, b) => (b.vendidos || 0) - (a.vendidos || 0));
      case '3':
        return resultado.filter((producto) => producto.etiqueta === 'NUEVO');
      case '4':
        return resultado.filter((producto) => producto.categoria === 'cafe');
      case '5':
        return resultado.filter((producto) => producto.premium);
      case '6':
        return resultado.filter((producto) => producto.especificacion === 'En grano');
      case '7':
        return resultado.filter((producto) => producto.molido);
      case '8':
        return resultado.filter((producto) => producto.capsula);
      case '9':
        return resultado.filter((producto) => producto.origen);
      case '10':
        return resultado.filter((producto) => producto.categoria === 'combo');
      case '11':
        return resultado.filter((producto) => producto.categoria === 'libro');
      case '12':
        return resultado.filter((producto) => producto.novela);
      case '13':
        return resultado.filter((producto) => producto.cienciaFiccion);
      case '14':
        return resultado.filter((producto) => producto.comic);
      case '15':
        return resultado.filter((producto) => producto.policial);
      default:
        return resultado;
    }
  }, [filtro]);

  const {
    productosMostrados,
    irAtras,
    irAdelante,
    hayPaginaAnterior,
    hayPaginaSiguiente,
  } = useCarrusel(productosFiltrados, productosPorPagina);

  const cambiarPagina = (accion) => {
    setAnimando(true);
    accion();
    window.setTimeout(() => setAnimando(false), 300);
  };

  return (

    <div className="main-lista" >

      <div className="lista-productos">

        <div className="filtro-contenedor">
          <p className="texto-mostrando desktop-only" style={{ color: 'white' }}>
            MOSTRANDO: {productosFiltrados.length} PRODUCTOS
          </p>
          <div className="filtro-select">

            <span style={{ color: 'white' }}>ORDENAR POR:</span>

            <div className="filtro-select-wrapper">
              <select className="FiltroDeLista" value={filtro} onChange={(event) => setFiltro(event.target.value)}>
                <option value="1">MÁS RECIENTES</option>
                <option value="2">MÁS VENDIDOS</option>
                <option value="3">NOVEDADES</option>
                <option value="4">CAFÉS</option>
                <option value="5">PREMIUM</option>
                <option value="6">EN GRANO</option>
                <option value="7">MOLIDO</option>
                <option value="8">CÁPSULA</option>
                <option value="9">DE ORIGEN</option>
                <option value="10">COMBOS ESPECIALES</option>
                <option value="11" >LIBROS</option>
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
        {/* {hayPaginaAnterior && ( */}
        <button className="prod-flechitas izquierda" onClick={() => cambiarPagina(irAtras)} disabled={!hayPaginaAnterior}>
          <GoChevronLeft size={sizeFlechas} />
        </button>
        {/* )} */}


        <div className={`prod-grid ${animando ? 'animando' : ''}`}>
          {productosMostrados.map((producto) => (
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
                  <AiOutlinePlusCircle size={esMobile ? 22 : 35} color="#DCDACE" />
                </button>
              </div>

            </div>
          ))}
        </div><p className="texto-mostrando mobile-only">
          MOSTRANDO: {productosFiltrados.length} PRODUCTOS
        </p>



        {/* Flechita de la derecha deshabilitada hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación */}
        {/* {hayPaginaSiguiente && ( */}
        <button className="prod-flechitas derecha" onClick={() => cambiarPagina(irAdelante)} disabled={!hayPaginaSiguiente}>
          <GoChevronRight size={sizeFlechas} />
        </button>
        {/* )} */}


      </div>

    </div >


  );
}