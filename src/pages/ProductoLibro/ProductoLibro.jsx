import "./ProductoLibro.css"
import { FaCartShopping } from "react-icons/fa6"
import imagenGrande from "../../assets/productoLibro/grande.png"
import chiquita1 from "../../assets/productoLibro/chiquita1.png"
import chiquita2 from "../../assets/productoLibro/chiquita2.png"
import chiquita3 from "../../assets/productoLibro/chiquita3.png"
import { FaRegUser } from "react-icons/fa6";
import IconLibro from "../../assets/productoLibro/iconsPL/icono-libro 5.png"
import IconIsbn from "../../assets/productoLibro/iconsPL/icon-isbn 2.png"
import IconEditorial from "../../assets/productoLibro/iconsPL/icon-editorial 2.png"
import IconDE from "../../assets/productoLibro/iconsPL/descuento-resumen 4.png"

export default function ProductoLibro() {
    return (
        <main className="Contenedor-Principal-PL">

            <div className="contenedor-de-contenedores">

                <div className="cont-de-imagen-grande">
                    <img className="imagen-grande" src={imagenGrande} alt="Imagen de un libro" />
                </div>

                <div className="detalles-libro-1">
                    <div className="contenido-de-detalles">

                        <h1 className="titulo-libro">Nombre del Libro</h1>
                        <p className="autor-libro">Autor del libro</p>

                        <div className="cont-auxiliar">
                            <div className="lado-izquierdo">
                                <p className="precio-libro">$19.000</p>
                                <div className="cont-de-atributos">
                                    <p className="genero">Género</p>
                                    <p className="formato">Formato</p>
                                </div>
                            </div>
                            <div className="bnt-copra-LP">
                                <button className="boton-comprar">
                                    <FaCartShopping className="icono-carrito" />AGREGAR AL CARRITO
                                </button>
                                <p className="UEC">Unidades en carrito: 1</p>
                            </div>
                        </div>

                        <span className="titleSinopsisLP">SINOPSIS</span>
                        <p className="SinopsisLP">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                </div>

            </div>

            <div className="detalles-libro-2">

                <ul className="mi-listilla-pe">
                    <h3 style={{ color: "white", fontFamily: "molengo" }}>DETALLES DEL LIBRO</h3>
                    <li>
                        <span className="icono-circulo">
                            <FaRegUser style={{ color: "black" }} className="icono-lista" />
                        </span>
                        Autor:  Someone Somebody
                    </li>
                    <li>
                        <span className="icono-circulo">
                            <img className="icono-lista" src={IconDE} alt="Icono de libro" />
                        </span>
                        Género: Some gender
                    </li>
                    <li>
                        <span className="icono-circulo">
                            <img className="icono-lista" src={IconLibro} alt="Icono de usuario" />
                        </span>
                        Formato: a kind of format
                    </li>
                    <li>
                        <span className="icono-circulo">
                            <img className="icono-lista" src={IconEditorial} alt="Icono de usuario" />
                        </span>
                        Editorial: any
                    </li>
                    <li>
                        <span className="icono-circulo">
                            <img className="icono-lista" src={IconIsbn} alt="Icono de usuario" />
                        </span>
                        ISBN: 123-456-789-098-6
                    </li>
                </ul>
                <div className="contenedor-de-imagenes">
                    <img className="imagenesChiquitas" src={chiquita1} alt="Imagen de un libro" />
                    <img className="imagenesChiquitas" src={chiquita2} alt="Imagen de un libro" />
                    <img className="imagenesChiquitas" src={chiquita3} alt="Imagen de un libro" />
                </div>
            </div>

            <div className="contenedor-de-autores">

            </div>
        </main>
    )
}