import "./ProductoLibro.css"
import { FaCartShopping } from "react-icons/fa6"
import imagenGrande from "../../assets/productoLibro/grande.png"
import chiquita1 from "../../assets/productoLibro/chiquita1.png"
import chiquita2 from "../../assets/productoLibro/chiquita2.png"
import chiquita3 from "../../assets/productoLibro/chiquita3.png"
import iconUsuario from "../../assets/productoLibro/iconsPL/usuario-icon 3.svg"
import iconLibro from "../../assets/productoLibro/iconsPL/icono-libro 5.svg"
import iconIsbn from "../../assets/productoLibro/iconsPL/icon-isbn 2.svg"
import iconEditorial from "../../assets/productoLibro/iconsPL/icon-editorial 2.svg"
import iconDE from "../../assets/productoLibro/iconsPL/descuento-resumen 4.svg"

export default function ProductoLibro() {
    return (
        <main className="Contenedor-Principal-PL">

            <div className="contenedor-de-contenedores">

                <div className="cont-de-imagen-grande">
                    <img className="imagen-grande" src={imagenGrande} alt="Imagen de un libro" />
                </div>

                <div className="detalles-libro-1">
                    <div className="contenido-de-detalles">
                        <h1 className="titulo-libro">Nombre del libro</h1>
                        <p className="autor-libro">Autor del libro</p>
                        <p className="precio-libro">$19.00</p>
                        <p className="genero">Género</p>
                        <p className="formato">Formato</p>

                        <div className="bnt-copra-LP">
                            <button className="boton-comprar"><FaCartShopping className="icono-carrito" />Comprar</button>
                            <p className="UEC">Unidadee en carrito: 1</p>
                        </div>
                        <span className="titleSinopsisLP">SINOPSIS</span>
                        <p className="SinopsisLP">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                </div>

            </div>

            <div className="detalles-libro-2">

            </div>

            <div className="contenedor-de-autores">

            </div>
        </main>
    )
}