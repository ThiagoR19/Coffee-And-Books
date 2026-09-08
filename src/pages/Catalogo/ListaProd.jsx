import { useEffect, useMemo, useState } from 'react';
import './ListaProd.css';
import useCarrusel from './hooksCatalogo/useCarrousel';

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

export default function ListaProductos({ categoryFilter = 'todos' }) {
  const { filteredProducts, isLoading, error, addToCart, getProductImage } = useShop();
  const [animando, setAnimando] = useState(false);
  const [orden, setOrden] = useState('todos');
  const [esMobile, setEsMobile] = useState(() => window.matchMedia('(max-width: 480px)').matches);

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

  return (
    <div className="main-lista">
      <div className="lista-productos">
        <div className="filtro-contenedor">
          <p className="texto-mostrando desktop-only" style={{ color: 'white' }}>
            MOSTRANDO: <b>{cantidad}</b> PRODUCTOS
          </p>
          <div className="filtro-select">
            <span style={{ color: 'white' }}>ORDENAR POR:</span>
            <div className="filtro-select-wrapper">
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
              </select>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
}
