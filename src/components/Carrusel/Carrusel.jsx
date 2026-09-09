import { useMemo, useState } from 'react'
import { Link } from 'wouter'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import { useShop } from '../../context/ShopContext'

import './Carrusel.css'

const VISIBLES = 5

function Carrusel({ product }) {
  const { products, getProductImage } = useShop()
  const [inicio, setInicio] = useState(0)

  const mismaMarca = useMemo(() => {
    const marca = String(product?.cafe?.marca || '').trim().toLowerCase()
    if (!marca) return []
    return products.filter((item) =>
      item.id_cat === 1 &&
      item.id_prod !== product.id_prod &&
      String(item.cafe?.marca || '').trim().toLowerCase() === marca)
  }, [products, product])

  if (mismaMarca.length === 0) return null

  const maxInicio = Math.max(mismaMarca.length - VISIBLES, 0)
  const inicioActual = Math.min(inicio, maxInicio)
  const visibles = mismaMarca.slice(inicioActual, inicioActual + VISIBLES)

  return (
    <article id='carusel'>
      <h3 className='carusel__h3'>Misma Marca</h3>
      <div className='carusel__div'>
        <img
          className={`carusel__div-img ${inicioActual === 0 ? 'carusel__div-img--inactiva' : ''}`}
          src={leftArrow}
          alt="Anterior"
          onClick={() => setInicio((valor) => Math.max(valor - 1, 0))}
        />
        <div className='carusel__div-div'>
          {visibles.map((item) => (
            <Link key={item.id_prod} href={`/producto/cafe/${item.id_prod}`} className='carusel__div-div-link' aria-label={`Ver ${item.nombre}`}>
              <img className='carusel__div-div-img' src={getProductImage(item)} alt={item.nombre} />
            </Link>
          ))}
        </div>
        <img
          className={`carusel__div-img ${inicioActual === maxInicio ? 'carusel__div-img--inactiva' : ''}`}
          src={rightArrow}
          alt="Siguiente"
          onClick={() => setInicio((valor) => Math.min(valor + 1, maxInicio))}
        />
      </div>
    </article>
  )
}

export default Carrusel