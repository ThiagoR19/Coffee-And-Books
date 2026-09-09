import './Catalogo.css'
import '../../App.css'
import imagenCatalogo from '../../assets/catalogo/imagen-catalogo.webp'
import ListaProductos from './ListaProd'
import { useLocation, useSearch } from 'wouter'

function getCategoryFromSearch(search) {
  const categoria = new URLSearchParams(search).get('categoria');

  if (categoria === 'libro' || categoria === 'cafe') return categoria;
  return 'todos';
}

export default function Catalogo() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const categoryFilter = getCategoryFromSearch(search);
  const cambiarCategoria = (categoria) => {
    navigate(categoria === 'todos' ? '/catalogo' : `/catalogo?categoria=${categoria}`);
  };

  return (
    <div className="catalogo">
      <div className="catalogo-barra">
        <div className="catalogo-texto">
          <h1 className="h-cat" >Catálogo</h1>
          <p className="p-Cat" >Libros y cafés importados <br /> para inspirar tus <br /> mejores momentos.</p>

          <div className="catalogo-botones">
            <button className={`btn ${categoryFilter === 'todos' ? 'active' : ''}`} onClick={() => cambiarCategoria('todos')}>TODOS</button>
            <button className={`btn ${categoryFilter === 'libro' ? 'active' : ''}`} onClick={() => cambiarCategoria('libro')}>LIBROS</button>
            <button className={`btn ${categoryFilter === 'cafe' ? 'active' : ''}`} onClick={() => cambiarCategoria('cafe')}>CAFÉS IMPORTADOS</button>
          </div>
        </div>

        <img className="catalogo-img" src={imagenCatalogo} alt="Cafetería con libros" />
      </div>

      <div className="container-productos">
        <div className="productos">
          <ListaProductos key={categoryFilter} categoryFilter={categoryFilter} />
        </div>
      </div>
    </div>
  );
}
