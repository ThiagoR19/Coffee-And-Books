import { useState } from 'react';

export default function useCarrusel(productos, productosPorPagina) {
    const [paginaActual, setPaginaActual] = useState(0);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const ultimaPagina = Math.max(totalPaginas - 1, 0);
    const paginaVisible = Math.min(paginaActual, ultimaPagina);

    const productosMostrados = productos.slice(
        paginaVisible * productosPorPagina,
        paginaVisible * productosPorPagina + productosPorPagina
    );

    const irAtras = () => setPaginaActual(paginaActual - 1);
    const irAdelante = () => setPaginaActual(paginaActual + 1);

    const hayPaginaAnterior = paginaVisible > 0;
    const hayPaginaSiguiente = paginaVisible < ultimaPagina;

    return {
        productosMostrados,
        irAtras,
        irAdelante,
        hayPaginaAnterior,
        hayPaginaSiguiente,
    };
}