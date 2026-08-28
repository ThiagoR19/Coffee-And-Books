export default function getPodium(productos) {
  const top = productos.sort((a, b) => a.ventas - b.ventas).slice(0, 3)
  return top
}