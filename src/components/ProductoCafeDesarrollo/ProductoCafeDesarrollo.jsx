import iconoCarrito from '../../assets/icon-trolley.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconPlus from '../../assets/icon-plus.svg';
import iconMarca from '../../assets/icon-marca.svg';
import iconIntensidad from '../../assets/icon-intensidad.svg';
import iconOrigen from '../../assets/icon-origen.svg';
import iconTipo from '../../assets/icon-tipo.svg';
import iconContenido from '../../assets/icon-contenido.svg';
import coffeeExample2 from '../../assets/coffees/coffee-example2.webp';
import coffeeExample3 from '../../assets/coffees/coffee-example3.webp';
import iconoFlechaDe from '../../assets/icono-flecha-derecha.svg';
import iconoFlechaIz from '../../assets/icono-flecha-izquierda.svg';
import { formatPrice, useShop } from '../../context/ShopContext';
import './ProductoCafeDesarrollo.css';

function ProductoCafeDesarrollo({ product }) {
  const { addToCart, updateQuantity, cartItems, getProductImage } = useShop();
  const cantidad = cartItems.find((item) => item.id_prod === product.id_prod)?.cantidad || 0;
  const cafe = product.cafe || {};

  return (
    <article id="cafe">
      <div id="titulos">
        <h2 className="titulos__h2">{product.nombre}</h2>
        <div className="titulos__div"><h3 className="titulos__div-h3">{cafe.marca || 'Café'}</h3><h2 className="titulos__div-h2">${formatPrice(product.precio)}</h2></div>
      </div>
      <div id="imagenes">
        <img className="imagenes__imgs1" src={iconoFlechaDe} alt="" />
        <img className="imagenes__imgs2" src={iconoFlechaIz} alt="" />
        <img className="imagenes__img" src={getProductImage(product)} alt={product.nombre} />
        <div className="imagenes__div">
          <img className="imagenes__div-img" src={getProductImage(product)} alt={product.nombre} />
          <img className="imagenes__div-img" src={coffeeExample2} alt="Café de ejemplo" />
          <img className="imagenes__div-img" src={coffeeExample3} alt="Café de ejemplo" />
        </div>
      </div>
      <div id="informacion">
        <div id="descripcion">
          <h4 className="descripcion__h4">DESCRIPCIÓN</h4>
          <p className="descripcion__p">{product.descripcion}</p>
          <div className="underline underline-desc" />
          <ul id="lista">
            <li><span>Perfil de sabor:</span> {cafe.perfil_sabor || 'Consultar disponibilidad.'}</li>
            <li><span>Compatibilidad:</span> {cafe.compatibilidad || 'Presentación seleccionada.'}</li>
            <li><span>Contenido:</span> {cafe.contenido || product.especificacion}</li>
          </ul>
        </div>
        <div className="underline underline-det" />
        <div id="detalles">
          <h3 className="detalles__h3">DETALLES DEL CAFÉ</h3>
          <div className="detalles__div"><img className="detalles__div-img" src={iconMarca} alt="" /><span>Marca:</span><p>{cafe.marca}</p></div>
          <div className="detalles__div"><img className="detalles__div-img" src={iconTipo} alt="" /><span>Tipo:</span><p>{cafe.tipo}</p></div>
          <div className="detalles__div"><img className="detalles__div-img" src={iconIntensidad} alt="" /><span>Intensidad:</span><p>{cafe.intensidad}</p></div>
          <div className="detalles__div"><img className="detalles__div-img" src={iconOrigen} alt="" /><span>Origen:</span><p>{cafe.origen}</p></div>
          <div className="detalles__div"><img className="detalles__div-img" src={iconContenido} alt="" /><span className="span-cont">Contenido:</span><p>{cafe.contenido || product.especificacion}</p></div>
        </div>
        <div id="botones">
          <button className="botones__button" onClick={() => addToCart(product)}><img src={iconoCarrito} alt="" />AGREGAR AL CARRITO</button>
          <div className="botones__div">
            <button className="botones__div-button" onClick={() => updateQuantity(product.id_prod, -1)} disabled={!cantidad}><img src={iconMinus} alt="Disminuir cantidad" /></button>
            <span className="botones__div-span">{cantidad}</span>
            <button className="botones__div-button" onClick={() => addToCart(product)} disabled={cantidad >= product.stock}><img src={iconPlus} alt="Aumentar cantidad" /></button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductoCafeDesarrollo;
