import './Catalogo.css'
import '../../App.css'
import imagenCatalogo from '../../assets/catalogo/imagen-catalogo.webp'
import ListaProductos from './ListaProd'
import { useRoute, useLocation } from 'wouter';

export default function Catalogo() {
  const [, route] = useRoute(':vista/:filtro')
  const [, setLocation] = useLocation()
  const filtro = route?.filtro || 'todos'

  function clase(tipo) {
    return filtro === tipo ? 'btn active' : 'btn'
  }

  return (
    <div className="catalogo">
      <div className="catalogo-barra">
        <div className="catalogo-texto">
          <h1 className="h-cat">Catálogo</h1>
          <p className="p-Cat">Libros y cafés importados <br /> para inspirar tus <br /> mejores momentos.</p>

          <div className="catalogo-botones">
            <button className={clase('todos')} onClick={() => setLocation('/catalogo/todos')}>TODOS LOS PRODUCTOS</button>
            <button className={clase('libro')} onClick={() => setLocation('/catalogo/libro')}>LIBROS</button>
            <button className={clase('cafe')} onClick={() => setLocation('/catalogo/cafe')}>CAFÉS IMPORTADOS</button>
          </div>
        </div>

        <img className="catalogo-img" src={imagenCatalogo} alt="Cafetería con libros" />
      </div>

      <div className="container-productos">
        <div className="productos">
          <ListaProductos key={filtro} categoryFilter={filtro} />
        </div>
      </div>
    </div>
  );
}