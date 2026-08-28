import './PreguntasFrecuentes.css';
import portadaFaq from '../../assets/img-portada.png';
import iconFaqItem from '../../assets/icon-faq-item.png';
import iconMinusFaqs from '../../assets/icon-minus-faqs.png';
import iconPlusFaqs from '../../assets/icon-plus-faqs.png';
import { useState } from 'react';

const FAQS = [
  {
    id: 1,
    pregunta: "1. ¿Cómo realizo un pedido?",
    respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
  },
  {
    id: 2,
    pregunta: "2. ¿Puedo pagar desde la página web?",
    respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
  },
  {
    id: 3,
    pregunta: "3. ¿Necesito tener WhatsApp para hacer un pedido?",
    respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
  },
  {
    id: 4,
    pregunta: "4. ¿Qué información se envía por WhatsApp?",
    respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
  },
  {
    id: 5,
    pregunta: "5. ¿Puedo modificar mi pedido después de enviarlo?",
    respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
  },
];

function PreguntasFrecuentes() {
  return (
    <div className="container-faqs">
      <div className="header-faqs">
        <div className="header-faqs-text">
          <div className="inner-header">
            <h1>Preguntas Frecuentes</h1>
            <p>Encuentra toda la información <br /> que buscas.</p>
          </div>
        </div>
        <img src={portadaFaq} alt="Portada" className="img-faqs" />
      </div>
      <div className="faq-list">
        {FAQS.map((faq) => <Pregunta faq={faq} key={faq.id} />)}
      </div>
      <div className="espacio"></div>
    </div>
  );
}

export default PreguntasFrecuentes;

function Pregunta({ faq }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="faq-item">
      <div className="faq-item-superior">
        <div className="faq-item-icon">
          <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
        </div>
        <h2>{faq.pregunta}</h2>
        <div className="faq-item-icon2">
          <img src={open ? iconMinusFaqs : iconPlusFaqs} alt={open ? "Cerrar" : "Abrir"} onClick={handleClick} />
        </div>
      </div>

      {open && (
        <div className="faq-answer open">
          <hr />
          <p>{faq.respuesta}</p>
        </div>
      )}
    </div>
  )
}