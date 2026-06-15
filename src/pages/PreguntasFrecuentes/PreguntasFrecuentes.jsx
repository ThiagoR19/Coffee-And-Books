import { useState } from 'react';
import './PreguntasFrecuentes.css';
import portadaFaq from '../../assets/img-portada.png';
import iconFaqItem from '../../assets/icon-faq-item.png';
import iconMinusFaqs from '../../assets/icon-minus-faqs.png';
import iconPlusFaqs from '../../assets/icon-plus-faqs.png';

const FAQS = [
    {
        id: 1,
        pregunta: "1. ¿Cómo realizo un pedido?",
        respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
    },
    {
        id: 2,
        pregunta: "2. ¿Puedo pagar desde la página web?",
        respuesta: "No, no se puede. Actualmente la página no procesa pagos. El pedido se envía por WhatsApp y allí coordinaremos el método de pago.",
    },
    {
        id: 3,
        pregunta: "3. ¿Necesito tener WhatsApp para hacer un pedido?",
        respuesta: "Sí, por supuesto que sí. Los pedidos se gestionan exclusivamente a través de WhatsApp.",
    },
    {
        id: 4,
        pregunta: "4. ¿Qué información se envía por WhatsApp?",
        respuesta: "Se envían automáticamente los productos seleccionados, sus cantidades y el detalle de tu pedido.",
    },
    {
        id: 5,
        pregunta: "5. ¿Puedo modificar mi pedido después de enviarlo?",
        respuesta: "Sí. Podés solicitar cambios por WhatsApp antes de que el pedido sea preparado.",
    },
];

function PreguntasFrecuentes() {
    const [abierto, setAbierto] = useState(null);

    function toggleFaq(id) {
        setAbierto(abierto === id ? null : id);
    }

    return (
        <div className="container-faqs">
            <div className="header-faqs">
                <div className="header-faqs-text">
                    <h1>Preguntas Frecuentes</h1>
                    <p>Encuentra toda la información <br/> que buscas.</p>
                </div>
                <img src={portadaFaq} alt="Portada" className="img-faqs" />
            </div>

            <div className="faq-list">
                {FAQS.map((faq) => (
                    <div className="faq-item" key={faq.id}>
                        <div className="faq-item-superior">
                            <div className="faq-item-icon">
                                <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                            </div>
                            <h2>{faq.pregunta}</h2>
                            <div className="faq-item-icon2" onClick={() => toggleFaq(faq.id)}>
                                <img
                                    src={abierto === faq.id ? iconMinusFaqs : iconPlusFaqs}
                                    alt={abierto === faq.id ? "Cerrar" : "Abrir"}
                                />
                            </div>
                        </div>

                        <div className={`faq-answer ${abierto === faq.id ? 'open' : ''}`}>
                            <hr />
                            <p>{faq.respuesta}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="espacio"></div>
        </div>
    );
}

export default PreguntasFrecuentes;