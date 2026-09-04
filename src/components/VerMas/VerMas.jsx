import { useState } from 'react';
import './VerMas.css';

function VerMas({ texto, children, limite = 150, className = '', as: Component = 'p' }) {
  const [expandido, setExpandido] = useState(false);
  const contenidoTexto = typeof texto === 'string' ? texto : (typeof children === 'string' ? children : '');
  if (!contenidoTexto) { return null; }
  const esMasDeXCaracteres = contenidoTexto.length > limite;
  if (!esMasDeXCaracteres) { return <Component className={className}>{contenidoTexto}</Component>; }
  const textoAMostrar = expandido ? contenidoTexto : `${contenidoTexto.slice(0, limite).trim()}...`;

  return (
    <Component className={`ver-mas-texto ${className}`}>
      {textoAMostrar}{' '}
      <button
        type="button"
        className="ver-mas-btn"
        onClick={() => setExpandido(!expandido)}
        aria-expanded={expandido}
      >
        {expandido ? 'Ver menos' : 'Ver más'}
      </button>
    </Component>
  );
}

export default VerMas;
