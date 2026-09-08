import iconoWhatsapp from '../../assets/icon-whatsapp.svg';
import { formatPrice } from '../../context/ShopContext';
import './ProductosCarrito.css';

function ProductosCarrito({ productos, productoSeleccionado, setProdSeleccionado, getProductImage }) {
  return (
    <article id="productos">
      <h3 className="productos__h3">Productos</h3>
      <div className="productos__div">
        {productos.length > 0 ? productos.map((producto) => (
          <ProductoCarritoLateral
            key={producto.id_prod}
            producto={producto}
            seleccionado={producto.id_prod === productoSeleccionado?.id_prod}
            setProdSeleccionado={setProdSeleccionado}
            getProductImage={getProductImage}
          />
        )) : (
          <p className="productos__div-div-span" style={{ padding: '1rem' }}>No hay productos en el carrito.</p>
        )}
      </div>
      <div className="productos__div">
        <img className="productosL__div-img" src={iconoWhatsapp} alt="" />
        <div className="productos__div-div">
          <h3 className="productos__div-div-h3">¿No encontraste tu producto?</h3>
          <span className="productos__div-div-span">Podés pedir que lo agreguemos al catálogo</span>
        </div>
      </div>
    </article>
  );
}

function ProductoCarritoLateral({ producto, seleccionado, setProdSeleccionado, getProductImage }) {
  return (
    <>
      <button onClick={() => setProdSeleccionado(producto)} className={`productoL ${seleccionado ? 'productoL--seleccionado' : ''}`}>
        <img className="productoL__img" src={getProductImage(producto)} alt={producto.nombre} />
        <div className="productoL__div">
          <h4 className="productoL__div-h4">{producto.nombre}</h4>
          <span className="productoL__div-span">{producto.cantidad} × ${formatPrice(producto.precio)}</span>
        </div>
      </button>
      <div className="productoL__underline" />
    </>
  );
}

export default ProductosCarrito;
