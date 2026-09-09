import { useState } from 'react';

export default function useCarrusel(productos, productosPorPagina) {
    const [paginaActual, setPaginaActual] = useState(0);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const ultimaPagina = Math.max(0, totalPaginas - 1);
    const paginaSegura = Math.min(paginaActual, ultimaPagina);

    const productosMostrados = productos.slice(
        paginaSegura * productosPorPagina,
        paginaSegura * productosPorPagina + productosPorPagina
    );

    const irAtras = () => setPaginaActual((pagina) => Math.max(0, Math.min(pagina, ultimaPagina) - 1));
    const irAdelante = () => setPaginaActual((pagina) => Math.min(ultimaPagina, pagina + 1));

    const hayPaginaAnterior = paginaSegura > 0;
    const hayPaginaSiguiente = paginaSegura < ultimaPagina;

    return {
        productosMostrados,
        irAtras,
        irAdelante,
        hayPaginaAnterior,
        hayPaginaSiguiente,
    };
}
