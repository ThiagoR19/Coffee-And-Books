import './PreguntasFrecuentes.css';
import portadaFaq from '../../assets/img-portada.webp';
import iconFaqItem from '../../assets/icon-faq-item.svg';
import iconMinusFaqs from '../../assets/icon-minus-faqs.svg';
import iconPlusFaqs from '../../assets/icon-plus-faqs.svg';

const FAQS = [
    {
        id: 1,
        pregunta: "1. ¿Cómo realizo un pedido?",
        respuesta: 'Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.',
    },
    {
        id: 2,
        pregunta: "2. ¿Puedo pagar desde la página web?",
    },
    {
        id: 3,
        pregunta: "3. ¿Necesito tener WhatsApp para hacer un pedido?",
    },
    {
        id: 4,
        pregunta: "4. ¿Qué información se envía por WhatsApp?",
    },
    {
        id: 5,
        pregunta: "5. ¿Puedo modificar mi pedido después de enviarlo?",
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
                {FAQS.map((faq) => (
                    <div className="faq-item" key={faq.id}>
                        <div className="faq-item-superior">
                            <div className="faq-item-icon">
                                <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                            </div>
                            <h2>{faq.pregunta}</h2>
                            <div className="faq-item-icon2">
                                <img
                                    src={faq.respuesta ? iconMinusFaqs : iconPlusFaqs}
                                    alt={faq.respuesta ? "Cerrar" : "Abrir"}
                                />
                            </div>
                        </div>

                        {faq.respuesta && (
                            <div className="faq-answer open">
                                <hr />
                                <p>{faq.respuesta}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="espacio"></div>
        </div>
    );
}

export default PreguntasFrecuentes;