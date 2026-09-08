import db from '../db/db.json';

import cafe1 from '../assets/catalogo/productos/colombia.webp';
import cafe3 from '../assets/catalogo/productos/cositas.webp';
import cafe5 from '../assets/catalogo/productos/habitosAtom.webp';
import cafe8 from '../assets/catalogo/productos/verdeYblanco.webp';
import cafe9 from '../assets/catalogo/productos/laInvencion.webp';

const imagenesPorId = {
  1: cafe3,
  2: cafe8,
  3: cafe5,
  4: cafe1,
  5: cafe9,
};

function obtenerSubcategoria(producto, detalle) {
  if (producto.id_cat === 1) {
    const tipo = detalle?.tipo?.toLowerCase();
    if (tipo?.includes('grano')) return 'grano';
    if (tipo?.includes('molido')) return 'molido';
    if (producto.nombre.toLowerCase().includes('premium')) return 'premium';
    return 'origen';
  }

  const genero = detalle?.genero?.toLowerCase();
  if (genero?.includes('distop')) return 'ciencia-ficcion';
  return 'novela';
}

export default async function obtenerProductos() {
  return db.Productos.map((producto) => {
    const detalle = producto.id_cat === 1
      ? db.Cafe.find((cafe) => cafe.id_prod === producto.id_prod)
      : db.Libro.find((libro) => libro.id_prod === producto.id_prod);
    const promocion = db.Prod_Promo
      .map((relacion) => relacion.id_prod === producto.id_prod
        ? db.Promociones.find((promo) => promo.id_promo === relacion.id_promo)
        : null)
      .find(Boolean);

    return {
      id: producto.id_prod,
      nombre: producto.nombre,
      precio: producto.precio.toLocaleString('es-AR'),
      imagen: imagenesPorId[producto.id_prod],
      tipo: producto.id_cat === 1 ? 'cafe' : 'libro',
      subcategoria: obtenerSubcategoria(producto, detalle),
      especificacion: detalle?.tipo || detalle?.genero || producto.desc,
      descripcion: producto.desc,
      marca: detalle?.marca || '',
      tipoCafe: detalle?.tipo || '',
      intensidad: detalle?.intensidad || '',
      origen: detalle?.origen || '',
      contenido: detalle?.contenido || '',
      etiqueta: producto.cant_vendida >= 40 ? 'POPULAR' : 'NUEVO',
      vendidos: producto.cant_vendida,
      fecha: producto.fecha_subida,
      enDescuento: Boolean(promocion),
      descuento: promocion?.descuento || 0,
    };
  });
}
