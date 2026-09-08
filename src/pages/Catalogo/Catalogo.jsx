import './Catalogo.css'
import '../../App.css'
import imagenCatalogo from '../../assets/catalogo/imagen-catalogo.webp'
<<<<<<< HEAD
// import imagenFondo from '../../assets/fondos/fondo3.1.0.png' esto no se usa acá
// import imagenFondoRes from '../../assets/fondos/fondo2.0.0.svg' esto tampoco
import ListaProductos from './ListaProd'
import {useRoute,useLocation} from 'wouter';
  

export default function Catalogo() {
  const [, route] = useRoute('/:vista/:filtro?')
  const [, setLocation] = useLocation()
  const filtroActual = route?.filtro || "todos"

  function clase(tipo) {
    if (filtroActual == tipo) {
      return ("btn active")
    } else {
      return ("btn")
    }
  }
  
=======
import ListaProductos from './ListaProd'
import { useState } from 'react'

export default function Catalogo() {
  const [categoryFilter, setCategoryFilter] = useState('todos');

>>>>>>> main
  return (
    <div className="catalogo">
      <div className="catalogo-barra">
        <div className="catalogo-texto">
          <h1 className="h-cat" >Catálogo</h1>
          <p className="p-Cat" >Libros y cafés importados <br /> para inspirar tus <br /> mejores momentos.</p>

          <div className="catalogo-botones">
<<<<<<< HEAD
            <button className={clase("todos")}  onClick={() => setLocation("/catalogo/todos")} >TODOS LOS PRODUCTOS</button>
            <button className={clase("libro")}  onClick={() => setLocation("/catalogo/libro")} >LIBROS</button>
            <button className={clase("cafe")}  onClick={() => setLocation("/catalogo/cafe")} >CAFÉS IMPORTADOS</button>
=======
            <button className={`btn ${categoryFilter === 'todos' ? 'active' : ''}`} onClick={() => setCategoryFilter('todos')}>TODOS</button>
            <button className={`btn ${categoryFilter === 'libro' ? 'active' : ''}`} onClick={() => setCategoryFilter('libro')}>LIBROS</button>
            <button className={`btn ${categoryFilter === 'cafe' ? 'active' : ''}`} onClick={() => setCategoryFilter('cafe')}>CAFÉS IMPORTADOS</button>
>>>>>>> main
          </div>
        </div>

        <img className="catalogo-img" src={imagenCatalogo} alt="Cafetería con libros" />
      </div>

      <div className="container-productos">
        <div className="productos">
<<<<<<< HEAD
          <ListaProductos key={filtroActual} filtroRuta={filtroActual} />
=======
          <ListaProductos categoryFilter={categoryFilter} />
>>>>>>> main
        </div>
      </div>
    </div>
  );
}
