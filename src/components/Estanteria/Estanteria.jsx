import { useMemo } from 'react'
import { Link } from 'wouter'
import estanteria from '../../assets/estanteria/Estanteria2.svg'
import cafeEstanteria from '../../assets/estanteria/imagen-cafe-estanteria.webp'
import lineEstanteria from '../../assets/estanteria/imagen-line-estanteria.webp'
import sloganEstanteria from '../../assets/home/imagen-slogan-estanteria.webp'
import { useShop } from '../../context/ShopContext'

import './Estanteria.css'

function Estanteria() {
  const { products, isLoading, error, getProductImage } = useShop()

  const grupos = useMemo(() => ({
    nuevos: [...products]
      .sort((a, b) => String(b.fecha_subida).localeCompare(String(a.fecha_subida)))
      .slice(0, 4),
    descuentos: products.filter((producto) => producto.enDescuento).slice(0, 6),
    masVendidos: [...products]
      .sort((a, b) => b.cant_vendida - a.cant_vendida)
      .slice(0, 4),
  }), [products])

  const rutaDetalle = (producto) => producto.id_cat === 1
    ? `/producto/cafe/${producto.id_prod}`
    : `/producto/libro/${producto.id_prod}`

  const mostrarProductos = (grupo) => grupo.map((producto) => (
    <Link key={producto.id_prod} href={rutaDetalle(producto)} className="estanteria__hero-div-div-div-link">
      <img className="estanteria__hero-div-div-div-img" src={getProductImage(producto)} alt={producto.nombre} />
    </Link>
  ))

  return (
    <article id="estanteria">
      <h2 className='estanteria__h2'>La estantería del mes</h2>
      <img className='estanteria__img' src={lineEstanteria} alt="" />
      {isLoading && <p className="estanteria__estado">Cargando productos...</p>}
      {error && <p className="estanteria__estado">{error}</p>}
      {!isLoading && !error && <div id='estanteria__hero'>
        <img className='estanteria__hero-img' src={sloganEstanteria} alt="" />
        <div className='estanteria__hero-div'>
          <img className='estanteria__hero-div-img' src={estanteria} alt="" />
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div nuevos'>
              {mostrarProductos(grupos.nuevos)}
            </div>
          </div>
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div enDescuento'>
              {mostrarProductos(grupos.descuentos)}
            </div>
          </div>
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div masPedidos'>
              {mostrarProductos(grupos.masVendidos)}
            </div>
          </div>
          <img className='estanteria__hero-img' src={cafeEstanteria} alt="" />
        </div>
      </div>}
    </article>
  )
}

export default Estanteria
