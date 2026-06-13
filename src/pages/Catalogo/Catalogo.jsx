import  './Catalogo.css'
import  '../../App.css'

export default function Catalogo() {
    return(
        <div className="catalogo">
            <h1>Catálogo</h1>
            <p>Libros y cafés importados</p>
            <p>para inspirar tus mejores momentos.</p>

            <button>TODOS LOS PRODUCTOS</button>
            <button>LIBROS</button>
            <button>CAFÉS IMPORTADOS</button>
        </div>
    );
}