import iconoCheck from '../../assets/icon-check.svg';
import iconoBolsa from '../../assets/icon-bolsa.svg';
import { formatPrice } from '../../context/ShopContext';
import './ResumenCarrito.css';

function ResumenCarrito({ productosCarrito }) {
  const subtotal = productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  const descuento = 0;
  const total = Math.max(0, subtotal - descuento);

  const finalizarCompra = () => {
    if (!productosCarrito.length) return;
    const detalle = productosCarrito.map((producto) => `• ${producto.nombre} x${producto.cantidad} - $${formatPrice(producto.precio * producto.cantidad)}`).join('\n');
    const mensaje = `Hola, quiero realizar este pedido:\n${detalle}\n\nTotal: $${formatPrice(total)}`;
    window.open(`https://wa.me/5400000000?text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <article id="resumen">
      <div className="resumen__div"><h3 className="resumen__h3">Resumen de Compra</h3></div>
      <div className="resumen__div">
        {productosCarrito.map((producto) => <ItemResumen producto={producto} key={producto.id_prod} />)}
        <div className="resumen__div-div"><h5 className="resumen__div-div-h5">Subtotal</h5><span className="resumen__div-div-span">${formatPrice(subtotal)}</span></div>
        <div className="resumen__div-div"><h5 className="resumen__div-div-h5 descuento">Descuentos</h5><span className="resumen__div-div-span descuento-precio">-${formatPrice(descuento)}</span></div>
      </div>
      <div className="resumen__underline" />
      <div className="resumen__div-total"><h5 className="resumen__div-h5 total">Total</h5><span className="resumen__div-span total-precio">${formatPrice(total)}</span></div>
      <button className="resumen__button" disabled={!productosCarrito.length} onClick={finalizarCompra}>Finalizar compra <img src={iconoBolsa} alt="" /></button>
      <div className="resumen__div-segura">
        <img className="resumen__div-img" src={iconoCheck} alt="" />
        <div className="resumen__div-div-segura"><h3 className="resumen__div-div-h3">Compra 100% segura</h3><span className="resumen__div-div-span">Tu pedido se prepara desde WhatsApp</span></div>
      </div>
    </article>
  );
}

export default ResumenCarrito;

function ItemResumen({ producto }) {
  return <div className="resumen__div-div"><h5 className="resumen__div-div-h5">{producto.nombre} ×{producto.cantidad}</h5><span className="resumen__div-div-span">${formatPrice(producto.precio * producto.cantidad)}</span></div>;
}
