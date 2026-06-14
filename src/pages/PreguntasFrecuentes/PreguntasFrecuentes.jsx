import './PreguntasFrecuentes.css';
import portadaFaq from '../../assets/img-portada.png';
import iconFaqItem from '../../assets/icon-faq-item.png';
import iconMinusFaqs from '../../assets/icon-minus-faqs.png';
import iconPlusFaqs from '../../assets/icon-plus-faqs.png';

function PreguntasFrecuentes() {
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
                <div className="faq-item">
                    <div className="faq-item-superior">
                        <div className="faq-item-icon">
                            <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                        </div>
                        <h2>1. ¿Cómo realizo un pedido?</h2>
                        <div className="faq-item-icon2">
                            <img src={iconMinusFaqs} alt="Icono FAQ" className="faq-icon2" />
                        </div>
                    </div>
                    <hr/>
                    <p>Explorá nuestro catálogo, agregá los productos que quieras al carrito y hacé clic en "Realizar pedido". Se abrirá WhatsApp con tu pedido listo para enviar.</p>
                </div>
                <div className="faq-item">
                    <div className="faq-item-superior">
                        <div className="faq-item-icon">
                            <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                        </div>
                        <h2>2. ¿Puedo pagar desde la página web?</h2>
                        <div className="faq-item-icon2">
                            <img src={iconPlusFaqs} alt="Icono FAQ" className="faq-icon2" />
                        </div>
                    </div>
                    {/* <p>Aceptamos diversas formas de pago, incluyendo tarjetas de crédito, débito y PayPal. También ofrecemos opciones de pago en efectivo para pedidos locales.</p> */}
                </div>
                <div className="faq-item">
                    <div className="faq-item-superior">
                        <div className="faq-item-icon">
                            <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                        </div>
                        <h2>3. ¿Necesito tener WhatsApp para hacer un pedido?</h2>
                        <div className="faq-item-icon2">
                            <img src={iconPlusFaqs} alt="Icono FAQ" className="faq-icon" />
                        </div>
                    </div>
                    {/* <p>El tiempo de entrega varía según tu ubicación. Por lo general, los pedidos se entregan dentro de 3 a 5 días hábiles. Recibirás una notificación con el estado de tu pedido y el número de seguimiento una vez que haya sido enviado.</p> */}
                </div>
                <div className="faq-item">
                    <div className="faq-item-superior">
                        <div className="faq-item-icon">
                            <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                        </div>
                        <h2>4. ¿Qué información se envía por WhatsApp?</h2>
                        <div className="faq-item-icon2">
                            <img src={iconPlusFaqs} alt="Icono FAQ" className="faq-icon" />
                        </div>
                    </div>
                    {/* <p>Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar en su estado original y sin usar. Para iniciar una devolución, por favor contáctanos a través de nuestro servicio de atención al cliente.</p> */}
                </div>
                <div className="faq-item">
                    <div className="faq-item-superior">
                        <div className="faq-item-icon">
                            <img src={iconFaqItem} alt="Icono FAQ" className="faq-icon" />
                        </div>
                        <h2>5. ¿Puedo modificar mi pedido después de enviarlo?</h2>
                        <div className="faq-item-icon2">
                            <img src={iconPlusFaqs} alt="Icono FAQ" className="faq-icon" />
                        </div>
                    </div>
                    {/* <p>Si necesitas modificar o cancelar tu pedido, por favor contáctanos lo antes posible a través de nuestro servicio de atención al cliente. Haremos todo lo posible para ayudarte, pero ten en cuenta que una vez que el pedido ha sido procesado, no podremos realizar cambios.</p> */}
                </div>
            </div>
            <div className="espacio"></div>
        </div>
    );
}

export default PreguntasFrecuentes;