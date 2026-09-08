import { useState } from 'react';

export default function useCarrusel(productos, productosPorPagina) {
    const [paginaActual, setPaginaActual] = useState(0);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
<<<<<<< HEAD
    const ultimaPagina = Math.max(totalPaginas - 1, 0);
    const paginaVisible = Math.min(paginaActual, ultimaPagina);

    const productosMostrados = productos.slice(
        paginaVisible * productosPorPagina,
        paginaVisible * productosPorPagina + productosPorPagina
=======
    const ultimaPagina = Math.max(0, totalPaginas - 1);
    const paginaSegura = Math.min(paginaActual, ultimaPagina);

    const productosMostrados = productos.slice(
        paginaSegura * productosPorPagina,
        paginaSegura * productosPorPagina + productosPorPagina
>>>>>>> main
    );

    const irAtras = () => setPaginaActual((pagina) => Math.max(0, Math.min(pagina, ultimaPagina) - 1));
    const irAdelante = () => setPaginaActual((pagina) => Math.min(ultimaPagina, pagina + 1));

<<<<<<< HEAD
    const hayPaginaAnterior = paginaVisible > 0;
    const hayPaginaSiguiente = paginaVisible < ultimaPagina;
=======
    const hayPaginaAnterior = paginaSegura > 0;
    const hayPaginaSiguiente = paginaSegura < ultimaPagina;
>>>>>>> main

    return {
        productosMostrados,
        irAtras,
        irAdelante,
        hayPaginaAnterior,
        hayPaginaSiguiente,
    };
}
