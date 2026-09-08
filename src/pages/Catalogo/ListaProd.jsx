<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import { useEffect, useMemo, useState } from 'react';
>>>>>>> main
import './ListaProd.css';
import useCarrusel from './hooksCatalogo/useCarrousel';
import obtenerProductos from '../../context/obtenerProductos';
import { Link } from 'wouter';

<<<<<<< HEAD
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoChevronRight, GoChevronLeft, } from "react-icons/go";

export default function ListaProductos({ filtroRuta }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [filtroEspecifico, setFiltroEspecifico] = useState('todos');

  useEffect(() => {
    let activo = true;

    obtenerProductos()
      .then((productosObtenidos) => {
        if (activo) setProductos(productosObtenidos);
      })
      .catch(() => {
        if (activo) setError('No se pudieron cargar los productos.');
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, []);

  const productosPorAmbito = filtroRuta === 'libro'
    ? productos.filter((producto) => producto.tipo === 'libro')
    : filtroRuta === 'cafe'
      ? productos.filter((producto) => producto.tipo === 'cafe')
      : productos;

  const productosFiltrados = filtroEspecifico === 'todos'
    ? productosPorAmbito
    : productosPorAmbito.filter((producto) => producto.subcategoria === filtroEspecifico);

  function mostrar(productosParaMostrar) {
    return productosParaMostrar.map((producto) => (
          <Link key={producto.id} href={producto.tipo === 'cafe' ? `/productoCafe/${producto.id}` : `/productoLibro/${producto.id}`} className="lista-productos_card">

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

          </Link>
        ))
  }
=======
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { formatPrice, useShop } from '../../context/ShopContext';

function ordenarProductos(productos, orden) {
  const copia = [...productos];
  if (orden === 'vendidos') return copia.sort((a, b) => b.cant_vendida - a.cant_vendida);
  if (orden === 'recientes' || orden === 'novedades') return copia.sort((a, b) => String(b.fecha_subida).localeCompare(String(a.fecha_subida)));
  if (orden === 'cafes') return copia.filter((producto) => producto.id_cat === 1);
  if (orden === 'libros') return copia.filter((producto) => producto.id_cat === 2);
  if (orden === 'premium') return copia.filter((producto) => producto.etiquetas.includes('PREMIUM'));
  if (orden === 'grano') return copia.filter((producto) => producto.cafe?.tipo?.toLowerCase().includes('grano'));
  if (orden === 'molido') return copia.filter((producto) => producto.cafe?.tipo?.toLowerCase().includes('molido'));
  if (orden === 'capsula') return copia.filter((producto) => producto.cafe?.tipo?.toLowerCase().includes('cápsula'));
  if (orden === 'origen') return copia.filter((producto) => producto.cafe?.origen);
  if (orden === 'combos') return [];
  if (orden === 'novelas') return copia.filter((producto) => producto.libro?.genero?.toLowerCase().includes('novela'));
  if (orden === 'ciencia') return copia.filter((producto) => producto.libro?.genero?.toLowerCase().includes('ciencia'));
  if (orden === 'comics') return copia.filter((producto) => producto.libro?.genero?.toLowerCase().includes('cómic'));
  if (orden === 'policiales') return copia.filter((producto) => producto.libro?.genero?.toLowerCase().includes('policial'));
  return copia;
}
>>>>>>> main

export default function ListaProductos({ categoryFilter = 'todos' }) {
  const { filteredProducts, isLoading, error, addToCart, getProductImage } = useShop();
  const [animando, setAnimando] = useState(false);
<<<<<<< HEAD
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
=======
  const [orden, setOrden] = useState('todos');
  const [esMobile, setEsMobile] = useState(() => window.matchMedia('(max-width: 480px)').matches);
>>>>>>> main

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 480px)');
    const handler = (event) => setEsMobile(event.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const productosFiltrados = useMemo(() => {
    const byCategory = categoryFilter === 'todos'
      ? filteredProducts
      : filteredProducts.filter((producto) => producto.id_cat === (categoryFilter === 'cafe' ? 1 : 2));
    return ordenarProductos(byCategory, orden);
  }, [filteredProducts, categoryFilter, orden]);

  const productosPorPagina = esMobile ? 9 : 15;
  const { productosMostrados, irAtras, irAdelante, hayPaginaAnterior, hayPaginaSiguiente } = useCarrusel(productosFiltrados, productosPorPagina);

<<<<<<< HEAD
  const opcionesFiltro = filtroRuta === 'cafe'
    ? [
      { value: 'todos', label: 'TODOS LOS CAFÉS' },
      { value: 'premium', label: 'PREMIUM' },
      { value: 'grano', label: 'EN GRANO' },
      { value: 'molido', label: 'MOLIDO' },
      { value: 'capsula', label: 'CÁPSULA' },
      { value: 'origen', label: 'DE ORIGEN' },
    ]
    : filtroRuta === 'libro'
      ? [
        { value: 'todos', label: 'TODOS LOS LIBROS' },
        { value: 'novela', label: 'NOVELAS' },
        { value: 'ciencia-ficcion', label: 'DE CIENCIA FICCIÓN' },
        { value: 'comic', label: 'CÓMICS' },
        { value: 'policial', label: 'POLICIALES' },
      ]
      : [
        { value: 'todos', label: 'TODOS LOS PRODUCTOS' },
        { value: 'premium', label: 'PREMIUM' },
        { value: 'grano', label: 'EN GRANO' },
        { value: 'molido', label: 'MOLIDO' },
        { value: 'capsula', label: 'CÁPSULA' },
        { value: 'origen', label: 'DE ORIGEN' },
        { value: 'novela', label: 'NOVELAS' },
        { value: 'ciencia-ficcion', label: 'DE CIENCIA FICCIÓN' },
        { value: 'comic', label: 'CÓMICS' },
        { value: 'policial', label: 'POLICIALES' },
      ];

  const {
    productosMostrados,
    irAtras,
    irAdelante,
    hayPaginaAnterior,
    hayPaginaSiguiente,
  } = useCarrusel(productosFiltrados, productosPorPagina);

  if (cargando) {
    return <p className="texto-mostrando">CARGANDO PRODUCTOS...</p>;
  }

  if (error) {
    return <p className="texto-mostrando">{error}</p>;
  }
=======
  const cambiarPagina = (accion) => {
    setAnimando(true);
    window.setTimeout(() => {
      accion();
      setAnimando(false);
    }, 180);
  };

  const cantidad = productosFiltrados.length;

  if (isLoading) return <p className="catalogo-estado">Cargando productos desde Google Sheets…</p>;
  if (error) return <p className="catalogo-estado">{error}</p>;
>>>>>>> main

  return (
    <div className="main-lista">
      <div className="lista-productos">
        <div className="filtro-contenedor">
          <p className="texto-mostrando desktop-only" style={{ color: 'white' }}>
<<<<<<< HEAD
            PAGINA 1/{Math.ceil(productosFiltrados.length / productosPorPagina)} - <b>MOSTRANDO</b>: {productosFiltrados.length} PRODUCTOS
=======
            MOSTRANDO: <b>{cantidad}</b> PRODUCTOS
>>>>>>> main
          </p>
          <div className="filtro-select">
            <span style={{ color: 'white' }}>ORDENAR POR:</span>
            <div className="filtro-select-wrapper">
<<<<<<< HEAD
              <select
                className="FiltroDeLista"
                value={filtroEspecifico}
                onChange={(event) => setFiltroEspecifico(event.target.value)}
              >
                {opcionesFiltro.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
=======
              <select className="FiltroDeLista" value={orden} onChange={(event) => setOrden(event.target.value)}>
                <option value="todos">TODOS</option>
                <option value="recientes">MÁS RECIENTES</option>
                <option value="vendidos">MÁS VENDIDOS</option>
                <option value="novedades">NOVEDADES</option>
                <option value="cafes">CAFÉS</option>
                <option value="premium">PREMIUM</option>
                <option value="grano">EN GRANO</option>
                <option value="molido">MOLIDO</option>
                <option value="capsula">CÁPSULA</option>
                <option value="origen">DE ORIGEN</option>
                <option value="combos">COMBOS ESPECIALES</option>
                <option value="libros">LIBROS</option>
                <option value="novelas">NOVELAS</option>
                <option value="ciencia">DE CIENCIA FICCIÓN</option>
                <option value="comics">CÓMICS</option>
                <option value="policiales">POLICIALES</option>
>>>>>>> main
              </select>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Flechitas pro max deshabilitadas hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación */}
        {hayPaginaAnterior && (
        <button className="prod-flechitas izquierda" onClick={() => cambiarPagina(irAtras)}>
          <GoChevronLeft size={sizeFlechas} />
        </button>
        )} 

        <div className={`prod-grid ${animando ? 'animando' : ''}`}>
          {mostrar(productosMostrados)}
        </div>

        <p className="texto-mostrando mobile-only">
          PAGINA 1/{Math.ceil(productosFiltrados.length / productosPorPagina)} - <b>MOSTRANDO</b>: {productosFiltrados.length} PRODUCTOS
        </p>

        {/* Flechita de la derecha deshabilitada hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación */}
        {hayPaginaSiguiente && (
        <button className="prod-flechitas derecha" onClick={() => cambiarPagina(irAdelante)}>
          <GoChevronRight size={sizeFlechas} />
        </button>
        )} 
=======
        {hayPaginaAnterior && (
          <button className="prod-flechitas izquierda" onClick={() => cambiarPagina(irAtras)} aria-label="Página anterior">
            <GoChevronLeft size={esMobile ? 40 : 110} />
          </button>
        )}

        {productosFiltrados.length > 0 ? (
          <div className={`prod-grid ${animando ? 'animando' : ''}`}>
            {productosMostrados.map((producto) => (
              <div key={producto.id_prod} className="lista-productos_card">
                <div className="card-imagen-contenedor">
                  {producto.etiqueta && <span className="card-etiqueta">{producto.etiqueta}</span>}
                  <img className="card-imagen" src={getProductImage(producto)} alt={producto.nombre} />
                </div>
                <div className="card-info">
                  <div className="card-info-texto">
                    <h3 className="card-nombre">{producto.nombre}</h3>
                    <span className="card-especificacion">{producto.especificacion}</span>
                    <span className="card-precio">${formatPrice(producto.precio)}</span>
                  </div>
                  <button className="card-btn-agregar" onClick={() => addToCart(producto)} aria-label={`Agregar ${producto.nombre} al carrito`}>
                    <AiOutlinePlusCircle size={esMobile ? 22 : 35} color="#DCDACE" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="catalogo-estado">No encontramos productos con ese filtro.</p>
        )}

        <p className="texto-mostrando mobile-only">MOSTRANDO: <b>{cantidad}</b> PRODUCTOS</p>

        {hayPaginaSiguiente && (
          <button className="prod-flechitas derecha" onClick={() => cambiarPagina(irAdelante)} aria-label="Página siguiente">
            <GoChevronRight size={esMobile ? 40 : 110} />
          </button>
        )}
>>>>>>> main
      </div>
    </div>
  );
}
