import { useState } from 'react';
import ProductosCarrito from '../../components/ProductosCarrito/ProductosCarrito';
import ProductoCarrito from '../../components/ProductoCarrito/ProductoCarrito';
import ResumenCarrito from '../../components/ResumenCarrito/ResumenCarrito';
import { useShop } from '../../context/ShopContext';
import './Carrito.css';

function Carrito() {
  const { cartItems, isLoading, error, updateQuantity, removeFromCart, getProductImage } = useShop();
  const [selectedId, setSelectedId] = useState(null);
  const prodSeleccionado = cartItems.find((item) => item.id_prod === selectedId) || cartItems[0] || null;

  if (isLoading) return <section className="Carrito"><p className="carrito-estado">Cargando catálogo…</p></section>;
  if (error) return <section className="Carrito"><p className="carrito-estado">{error}</p></section>;

  return (
<<<<<<< HEAD
    <section className='Carrito'>
      <ProductosCarrito productos={productosCarrito} setProdSeleccionado={setProdSeleccionado} />
      <ProductoCarrito prodSeleccionado={prodSeleccionado} borrarDelCarrito={borrarDelCarrito} handleAdd={handleAdd} handleSustrac={handleSustract} />
      <ResumenCarrito productosCarrito={productosCarrito} onCompraFinalizada={() => alert('Compra registrada correctamente.')} />
=======
    <section className="Carrito">
      <ProductosCarrito productos={cartItems} productoSeleccionado={prodSeleccionado} setProdSeleccionado={(product) => setSelectedId(product.id_prod)} getProductImage={getProductImage} />
      <ProductoCarrito
        prodSeleccionado={prodSeleccionado}
        borrarDelCarrito={removeFromCart}
        handleAdd={() => prodSeleccionado && updateQuantity(prodSeleccionado.id_prod, 1)}
        handleSustract={() => prodSeleccionado && updateQuantity(prodSeleccionado.id_prod, -1)}
        getProductImage={getProductImage}
      />
      <ResumenCarrito productosCarrito={cartItems} />
>>>>>>> main
    </section>
  );
}

export default Carrito;
