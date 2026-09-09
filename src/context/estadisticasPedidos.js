const ESTADISTICAS_KEY = 'coffee-books-estadisticas-pedidos';

export function obtenerEstadisticas() {
  const datosGuardados = localStorage.getItem(ESTADISTICAS_KEY);

  if (!datosGuardados) {
    return { pedidosCompletados: 0, productosVendidos: 0 };
  }

  try {
    return JSON.parse(datosGuardados);
  } catch {
    return { pedidosCompletados: 0, productosVendidos: 0 };
  }
}

export function registrarCompra(productosCarrito) {
  const estadisticasActuales = obtenerEstadisticas();
  const cantidadVendida = productosCarrito.reduce(
    (total, producto) => total + (producto.cantidad || 1),
    0,
  );

  const nuevasEstadisticas = {
    pedidosCompletados: estadisticasActuales.pedidosCompletados + 1,
    productosVendidos: estadisticasActuales.productosVendidos + cantidadVendida,
  };

  localStorage.setItem(ESTADISTICAS_KEY, JSON.stringify(nuevasEstadisticas));
}
