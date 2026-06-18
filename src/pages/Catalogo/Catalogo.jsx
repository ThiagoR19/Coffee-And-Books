import './Catalogo.css'
import '../../App.css'
import imagenCatalogo from '../../assets/imagen-catalogo.png'
import imagenFondo from '../../assets/fondos/fondo3.1.0.png'
import ListaProductos from './ListaProd'

export default function Catalogo() {
    return (
        <div className="catalogo">
            <div className="catalogo-barra">
                <div className="catalogo-texto">
                    <h1 className="h-cat" >Catálogo</h1>
                    <p className="p-Cat" >Libros y cafés importados <br /> para inspirar tus <br/> mejores momentos.</p>

                    <div className="catalogo-botones">
                        <button className="btn active">TODOS LOS LIBROS</button>
                        <button className="btn">LIBROS</button>
                        <button className="btn">CAFÉS IMPORTADOS</button>
                    </div>
                </div>

                <img className="catalogo-img" src={imagenCatalogo} alt="Cafetería con libros" />
            </div>

            <div className="container-productos">
                <div className="productos">
                    <ListaProductos/>
                </div>
            </div>
        </div>
    );
}