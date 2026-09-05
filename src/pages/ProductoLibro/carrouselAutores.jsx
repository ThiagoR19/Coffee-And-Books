import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./carrouselAutores.css";
import cafe9 from '../../assets/catalogo/productos/laInvencion.webp';
import cafe5 from '../../assets/catalogo/productos/habitosAtom.webp';
import cafe6 from '../../assets/catalogo/productos/maus.webp';

const librosEjemplo = [
    { id: 1, titulo: "La Invención de Morel", portada: cafe9 },
    { id: 2, titulo: "Hábitos Atómicos", portada: cafe5 },
    { id: 3, titulo: "Maus", portada: cafe6 },
    { id: 4, titulo: "Hábitos Atómicos", portada: cafe5 },
    { id: 5, titulo: "La Invención de Morel", portada: cafe9 },
    { id: 6, titulo: "Maus", portada: cafe6 },
    { id: 7, titulo: "Hábitos Atómicos", portada: cafe5 },
    { id: 8, titulo: "La Invención de Morel", portada: cafe9 },
    { id: 9, titulo: "Maus", portada: cafe6 },
];

const VISIBLES = 6;

export default function CarrouselAutores({ libros = librosEjemplo }) {
    // const [inicio, setInicio] = useState(0);
    // const maxInicio = Math.max(0, libros.length - VISIBLES);
    // const anterior = () => setInicio((i) => Math.max(i - 1, 0));
    // const siguiente = () => setInicio((i) => Math.min(i + 1, maxInicio));
    // const visibles = libros.slice(inicio, inicio + VISIBLES);

    return (
        <div className="carrousel-wrapper">
            <button
                className="carrousel-btn"
                // onClick={anterior}
                // disabled={inicio === 0}
                aria-label="Anterior"
            >
                <FaChevronLeft size={70} color="#D9D9D9" />
            </button>

            <div className="carrousel-track-container">
                <div className="carrousel-track">
                    {/* visibles */}
                    {libros.slice(0, VISIBLES).map((libro) => (
                        <div className="carrousel-card" key={libro.id}>
                            <img src={libro.portada} alt={libro.titulo} />
                            <p>{libro.titulo}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="carrousel-btn"
                // onClick={siguiente}
                // disabled={inicio >= maxInicio}
                aria-label="Siguiente"
            >
                <FaChevronRight size={70} color="#D9D9D9" />
            </button>
        </div>
    );
}