import  './Catalogo.css'
import  '../../App.css'
import imagenCatalogo from '../../assets/imagen-catalogo.png'

export default function Catalogo() {
    return(
        <>
        <div className="catalogo">
            <div className="catalogo-texto">
                <h1>Catálogo</h1>
                <p>Libros y cafés importados <hr/> para inspirar tus <hr/> mejores momentos.</p>

                <div className="catalogo-botones">
                    <button className="btn active">TODOS LOS LIBROS</button>
                    <button className="btn">LIBROS</button>
                    <button className="btn">CAFÉS IMPORTADOS</button>
                </div>
            </div>
            

              <img className="catalogo-img" src={imagenCatalogo} alt="Cafetería con libros"/>
        </div>

        <div className="container-productos">
            <div className="productos"></div>
        </div>
        </>
    );
}