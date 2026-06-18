import { useState } from 'react';
import './ListaProd.css';
import useCarrusel from './hooksCatalogo/UseCarrousel';
import imagen1 from '../../assets/imagen-catalogo.png'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import cafe1 from '../../assets/catalogo/productos/colombia.png'
import cafe2 from '../../assets/catalogo/productos/expresso.png'
import cafe3 from '../../assets/catalogo/productos/cositas.png'
import cafe4 from '../../assets/catalogo/productos/georgeOrwel.png'
import cafe5 from '../../assets/catalogo/productos/habitosAtom.png'
import cafe6 from '../../assets/catalogo/productos/maus.png'
import cafe7 from '../../assets/catalogo/productos/unCafe.png'
import cafe8 from '../../assets/catalogo/productos/verdeYblanco.png'
import cafe9 from '../../assets/catalogo/productos/laInvencion.png'
import { GoChevronDown } from "react-icons/go";

const productos = [
    { etiqueta: 'CAFE PREMIUM', especificacion: 'algo del prod', id: 1, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3 },
    { etiqueta: 'OFERTA', especificacion: 'Especificacion', id: 2, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe8 },
    { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 3, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe5 },
    { etiqueta: 'DESTACADO', especificacion: 'Especificacion', id: 4, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe1 },
    { etiqueta: 'OFERTA ESPECIAL', especificacion: 'Especificacion', id: 5, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3 },
    { etiqueta: 'POPULAR', especificacion: 'Especificacion', id: 6, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe2 },
    { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 7, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe9 },
    { etiqueta: 'DESTACADO', especificacion: 'Especificacion', id: 8, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe7 },
    { etiqueta: 'OFERTA', especificacion: 'Especificacion', id: 9, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe4 },
    { etiqueta: 'POPULAR', especificacion: 'Especificacion', id: 10, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe6 },
    { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 11, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3 },
    { etiqueta: 'DESTACADO', especificacion: 'Especificacion', id: 12, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe8 },
    { etiqueta: 'OFERTA ESPECIAL', especificacion: 'Especificacion', id: 13, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe5 },
    { etiqueta: 'POPULAR', especificacion: 'Especificacion', id: 14, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe1 },
    { etiqueta: 'NUEVO', especificacion: 'Especificacion', id: 15, nombre: 'Nombre del Cafe', precio: '100.000', imagen: cafe3 },
]

// cuando se active la paginación,hayque reemplazar `productos` por
// `productosMostrados` en el .map() y descomentar las flechas de navegación maldito pe causa.

export default function ListaProductos() {
    const [animando, setAnimando] = useState(false);

    // Hook conservado — este lo usamos cuando se active la paginación, por ahora no hace nada
    const {
        productosMostrados,
        irAtras,
        irAdelante,
        hayPaginaAnterior,
        hayPaginaSiguiente,
    } = useCarrusel(productos);

    const cambiarPagina = (accion) => {
        setAnimando(true);
        setTimeout(() => {
            accion();
            setAnimando(false);
        }, 300);
    }

    return (

        <div className="main-lista" >

            <div className="lista-productos">

                <div className="filtro-contenedor">
                    <p style={{ color: 'white' }}>MOSTRANDO 1-{productos.length} DE {productos.length} PRODUCTOS</p>

                    <div className="filtro-select">

                        <span style={{ color: 'white' }}>ORDENAR POR:</span>

                        <div className="filtro-select-wrapper">
                            <select className="FiltroDeLista">
                                <option value="1">MÁS RECIENTES</option>
                                <option value="2">LIBROS</option>
                                <option value="3">CAFÉS IMPORTADOS</option>
                            </select>
                            <GoChevronDown className="filtro-select-icono" size={30} color="white" />
                        </div>
                    </div>
                </div>

                {/* Flechitas pro max deshabilitadas hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación
                {hayPaginaAnterior && (
                    <button className="prod-flechitas izquierda" onClick={() => cambiarPagina(irAtras)}>
                        <GoChevronLeft size={110} />
                    </button>
                )}
                */}

                <div className={`prod-grid ${animando ? 'animando' : ''}`}>
                    {productos.map((producto) => (
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
                    ))}
                </div>

                {/* Flechita de la derecha deshabilitada hasta terminar la etapa de enmaquebodrio — descomentar al activar paginación
                {hayPaginaSiguiente && (
                    <button className="prod-flechitas derecha" onClick={() => cambiarPagina(irAdelante)}>
                        <GoChevronRight size={110} />
                    </button>
                )}
                */}

            </div>

        </div >


    );
}