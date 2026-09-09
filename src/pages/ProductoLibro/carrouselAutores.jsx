import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./carrouselAutores.css";
import { useMemo, useState } from "react";
import { useShop } from "../../context/ShopContext";

const VISIBLES = 6;

export default function CarrouselAutores({ product }) {
    const { products, getProductImage } = useShop();

    const libros = useMemo(() => {
        if (!product?.autor) return [];
        return products.filter(
            (item) => item.id_prod !== product.id_prod && item.autor === product.autor,
        );
    }, [products, product]);

    const [inicio, setInicio] = useState(0);
    const maxInicio = Math.max(0, libros.length - VISIBLES);
    const anterior = () => setInicio((i) => Math.max(i - 1, 0));
    const siguiente = () => setInicio((i) => Math.min(i + 1, maxInicio));
    const visibles = libros.slice(inicio, inicio + VISIBLES);

    if (libros.length === 0) {
        return <p className="carrousel-vacio">No encontramos más libros de este autor.</p>;
    }

    return (
        <div className="carrousel-wrapper">
            <button
                className="carrousel-btn"
                onClick={anterior}
                disabled={inicio === 0}
                aria-label="Anterior"
            >
                <FaChevronLeft size={70} color="#D9D9D9" />
            </button>

            <div className="carrousel-track-container">
                <div className="carrousel-track">
                    {visibles.map((libro) => (
                        <div className="carrousel-card" key={libro.id_prod}>
                            <img src={getProductImage(libro)} alt={libro.nombre} />
                            <p>{libro.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="carrousel-btn"
                onClick={siguiente}
                disabled={inicio >= maxInicio}
                aria-label="Siguiente"
            >
                <FaChevronRight size={70} color="#D9D9D9" />
            </button>
        </div>
    );
}