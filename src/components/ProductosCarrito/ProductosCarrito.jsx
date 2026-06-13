import cafeDefault from '../../assets/imagen-cafe-default.png'
import iconoWhatsapp from '../../assets/icon-whatsapp.png'

function ProductosCarrito({ productos }) {
  return (
    <article id="productos">
      <h3 className='productos__h3'>Productos</h3>
      <div className='productos__div'>
        {productos.map((producto) => <ProductoCarritoLateral key={producto.id} producto={producto} />)}
      </div>
      <div className='productos__div'>
        <img className='productos__div-img' src={iconoWhatsapp} alt="Icono de Whatsapp" />
        <div className='productos__div-div'>
          <h3 className='productos__div-div-h3'>¿No encontraste tu producto?</h3>
          <span className='productos__div-div-span'>No dudes en pedirme que lo agregue al catálogo</span>
        </div>
      </div>
    </article>
  )
}

function ProductoCarritoLateral({ producto }) {
  return (
    <div className="producto">
      <img className='producto__img' src={cafeDefault} alt="Café por defecto" />
      <div className='producto__div'>
        <h4 className='producto__div-h4'>{producto.nombre}</h4>
        <span className='producto__div-span'>{producto.precio}</span>
      </div>
      <div className='producto__underline'></div>
    </div>
  )
}

export default ProductosCarrito