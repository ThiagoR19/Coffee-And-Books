import { useState, useEffect } from 'react';

export default function useCarrusel(productos, productosPorPagina) {
    const [paginaActual, setPaginaActual] = useState(0);

    useEffect(() => {
        setPaginaActual(0);
    }, [productosPorPagina]);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    const productosMostrados = productos.slice(
        paginaActual * productosPorPagina,
        paginaActual * productosPorPagina + productosPorPagina
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