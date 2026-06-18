import { useState } from 'react';

const PRODUCTOS_POR_PAGINA = 15;

export default function useCarrusel(productos) {
    const [paginaActual, setPaginaActual] = useState(0);

    const totalPaginas = Math.ceil(productos.length / PRODUCTOS_POR_PAGINA);

    const productosMostrados = productos.slice(
        paginaActual * PRODUCTOS_POR_PAGINA,
        paginaActual * PRODUCTOS_POR_PAGINA + PRODUCTOS_POR_PAGINA
    );

    const irAtras = () => setPaginaActual(paginaActual - 1);
    const irAdelante = () => setPaginaActual(paginaActual + 1);

    const hayPaginaAnterior = paginaActual > 0;
    const hayPaginaSiguiente = paginaActual < totalPaginas - 1;

    return {
        productosMostrados,
        irAtras,
        irAdelante,
        hayPaginaAnterior,
        hayPaginaSiguiente,
    };
}