import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import estanteria from '../../assets/estanteria/Estanteria2.svg'
import cafeEstanteria from '../../assets/estanteria/imagen-cafe-estanteria.webp'
import obtenerProductos from '../../context/obtenerProductos'

import lineEstanteria from '../../assets/estanteria/imagen-line-estanteria.webp'
import sloganEstanteria from '../../assets/home/imagen-slogan-estanteria.webp'

import './Estanteria.css'

function Estanteria() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    let activo = true

    obtenerProductos().then((productosObtenidos) => {
      if (activo) setProductos(productosObtenidos)
    })

    return () => {
      activo = false
    }
  }, [])

  const masVendidos = [...productos]
    .sort((a, b) => b.vendidos - a.vendidos)
    .slice(0, 4)
  const nuevos = [...productos]
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, 4)
  const enDescuento = productos.filter((producto) => producto.enDescuento).slice(0, 6)

  const rutaDetalle = (producto) => producto.tipo === 'cafe'
    ? `/productoCafe/${producto.id}`
    : `/productoLibro/${producto.id}`

  const mostrarProductos = (productosDelGrupo) => productosDelGrupo.map((producto) => (
    <Link
      key={producto.id}
      href={rutaDetalle(producto)}
      className='estanteria__hero-div-div-div-link'
    >
      <img
        className='estanteria__hero-div-div-div-img'
        src={producto.imagen}
        alt={producto.nombre}
      />
    </Link>
  ))

  return (
    <article id="estanteria">
      <h2 className='estanteria__h2'>La estantería del mes</h2>
      <img className='estanteria__img' src={lineEstanteria} alt="" />
      <div id='estanteria__hero'>
        <img className='estanteria__hero-img' src={sloganEstanteria} alt="" />
        <div className='estanteria__hero-div'>
          <img className='estanteria__hero-div-img' src={estanteria} alt="" />
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div nuevos'>
              {mostrarProductos(nuevos)}
            </div>
          </div>
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div enDescuento'>
              {mostrarProductos(enDescuento)}
            </div>
          </div>
          <div className='estanteria__hero-div-div'>
            <div className='estanteria__hero-div-div-div masPedidos'>
              {mostrarProductos(masVendidos)}
            </div>
          </div>
          <img className='estanteria__hero-img' src={cafeEstanteria} alt="" />
        </div>
      </div>
    </article>
  )
}

export default Estanteria
