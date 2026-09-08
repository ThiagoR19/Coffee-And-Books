const CLAVE_ESTADISTICAS = 'coffee-books-estadisticas-pedidos';

const estadisticasIniciales = {
  pedidosCompletados: 0,
  productosVendidos: 0,
};

export function obtenerEstadisticas() {
  try {
    const datosGuardados = localStorage.getItem(CLAVE_ESTADISTICAS);
    return datosGuardados
      ? { ...estadisticasIniciales, ...JSON.parse(datosGuardados) }
      : estadisticasIniciales;
  } catch {
    return estadisticasIniciales;
  }
}

export function registrarCompra(productosCarrito) {
  const estadisticasActuales = obtenerEstadisticas();
  const productosDeLaCompra = productosCarrito.reduce(
    (total, producto) => total + (producto.cantidad || 1),
    0
  );

  const nuevasEstadisticas = {
    pedidosCompletados: estadisticasActuales.pedidosCompletados + 1,
    productosVendidos: estadisticasActuales.productosVendidos + productosDeLaCompra,
  };

  localStorage.setItem(CLAVE_ESTADISTICAS, JSON.stringify(nuevasEstadisticas));
}
