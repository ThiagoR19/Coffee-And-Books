export default function obtenerPodio(productos) {
  const top = productos.sort((a, b) => b.cant_vendida - a.cant_vendida).slice(0, 3);
  return top;
}