const COLORES_ETIQUETA = {
  'MÁS VENDIDO': '#C4744F',
  'OFERTA': '#B23A48',
  'NUEVO': '#289E92',
  'DESTACADO': '#8E5B3F',
  'OFERTA ESPECIAL': '#A13D2B',
  'POPULAR': '#6B4226',
};

const COLOR_POR_DEFECTO = '#cc6a3d';

export function getColorEtiqueta(etiqueta) {
  return COLORES_ETIQUETA[etiqueta?.toUpperCase()] || COLOR_POR_DEFECTO;
}