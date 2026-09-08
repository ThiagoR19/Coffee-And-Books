import './Catalogo.css'
import '../../App.css'
import imagenCatalogo from '../../assets/catalogo/imagen-catalogo.webp'
import ListaProductos from './ListaProd'
import { useState } from 'react'

export default function Catalogo() {
  const [categoryFilter, setCategoryFilter] = useState('todos');

  return (
    <div className="catalogo">
      <div className="catalogo-barra">
        <div className="catalogo-texto">
          <h1 className="h-cat" >Catálogo</h1>
          <p className="p-Cat" >Libros y cafés importados <br /> para inspirar tus <br /> mejores momentos.</p>

          <div className="catalogo-botones">
            <button className={`btn ${categoryFilter === 'todos' ? 'active' : ''}`} onClick={() => setCategoryFilter('todos')}>TODOS</button>
            <button className={`btn ${categoryFilter === 'libro' ? 'active' : ''}`} onClick={() => setCategoryFilter('libro')}>LIBROS</button>
            <button className={`btn ${categoryFilter === 'cafe' ? 'active' : ''}`} onClick={() => setCategoryFilter('cafe')}>CAFÉS IMPORTADOS</button>
          </div>
        </div>

        <img className="catalogo-img" src={imagenCatalogo} alt="Cafetería con libros" />
      </div>

      <div className="container-productos">
        <div className="productos">
          <ListaProductos categoryFilter={categoryFilter} />
        </div>
      </div>
    </div>
  );
}
