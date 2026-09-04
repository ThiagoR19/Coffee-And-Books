import "./TerminosYCondiciones.css";
import hr1 from "../../assets/hrs/hr-decoracion1.webp";
import hr2 from "../../assets/hrs/hr-decoracionxs.webp";
import hr3 from "../../assets/hrs/hr-decoracion-blanco.svg";
import iconRules from "../../assets/icons-our-rules.svg";
import hr4 from "../../assets/hrs/hr-punteado.webp";
import hr5 from "../../assets/hrs/hr-punteado-negro.webp";
import hr7 from "../../assets/hrs/hr-decoracion2.webp";



function TerminosYCondiciones() {
  return (
    <div className="container-main">
      <div className="header1">
        <h1>Términos y condiciones</h1>
        <p className="h-p">Las reglas de nuestro refugio literario, última actualización: Junio, 2026</p>
      </div>
      <div className="content">
        <img className="hr1" src={hr1} alt="Separador decorativo" />
        <div className="about-our-prodts">
          <h2>Sobre nuestros productos</h2>
          <img className="hr5" src={hr5} alt="Línea separadora decorativa" />
          <ul>
            <li><p>Café importado</p></li>
            <li><p>Libros</p></li>
            <li><p>Coffee and Books</p></li>
            <li><p>Ediciones especiales</p></li>
            <li><p>Calidez en el detalle</p></li>
          </ul>
        </div>
        <div className="our-rules">
          <h2>Nuestras reglas</h2>
          <img className="hr2" src={hr2} alt="Línea separadora decorativa" />
          <p>En esta sección nos enfocaremos en aclarar nuestras condiciones para evitar confusiones y mantener una buena relación con nuestros clientes.</p>
          <img className="icon-rules" src={iconRules} alt="iconos"/>
        </div>
        <div className="cont-grande">
          <h2>Condiciones Generales</h2>
          <img className="hr3" src={hr3} alt="Línea separadora decorativa" />
          <p><b>1.1 Aceptación de términos: </b>Al navegar y utilizar el sitio web de Coffee and Books, el usuario acepta cumplir con las presentes condiciones. Si no está de acuerdo, le sugerimos abandonar el sitio.</p>
          <img className="hr4" src={hr4} alt="Línea separadora decorativa" />
          <p><b>1.2 Modificaciones: </b> Nos reservamos el derecho de actualizar o cambiar estos términos en cualquier momento sin previo aviso para adaptarlos a nuevas normativas comerciales.</p>
          <img className="hr4" src={hr4} alt="Línea separadora decorativa" />
          <p><b>1.3 Uso del sitio: </b> El usuario se compromete a realizar un uso legítimo de la plataforma, quedando prohibida cualquier acción que pueda dañar, inutilizar o sobrecargar los servidores del sitio web.</p>
          <img className="hr4" src={hr4} alt="Línea separadora decorativa" />
          <p><b>1.4 Responsabilidad limitada: </b> Coffee and Books no será responsable por retrasos o inconvenientes causados por causas ajenas a la empresa (incluyendo problemas de transporte, fuerza mayor o interrupciones temporales del servicio).</p>
        </div>
        <div className="separator-row">
          <img className="hr7" src={hr7} alt="Separador decorativo secundario" />
        </div>
        <div className="terms-conditns">
          <h2>Términos y condiciones</h2>
          <img className="hr5" src={hr5} alt="Línea separadora decorativa" />
            <ol>
              <li>Disposiciones Generales</li>
              <li>Envíos y Entregas</li>
              <li>Propiedad Intelectual</li>
              <li>Devoluciones y <br/> Reembolsos</li>
              <li>Privacidad y Protección <br/> de datos</li>
              <li>Métodos de Pago</li>
              <li>Disponibilidad de <br/> productos</li>
              <li>Atención al cliente</li>
            </ol>
        </div>
        <div className="cont2">
          <h2>Envíos y Entregas</h2>
          <img className="hr2" src={hr2} alt="Línea separadora decorativa" />
          <p><b>2.1 Áreas de Cobertura: </b> Realizamos envíos de libros y café en grano/molido a todo el país a través de empresas de correo certificadas.</p>
          <p><b>2.2 Plazos de Entrega: </b> Los pedidos se procesan en un plazo de 24 a 48 horas hábiles. El tiempo estimado de entrega final dependerá de la región del destino seleccionado.</p>
          <p><b>2.3 Seguimiento del Pedido: </b> Una vez despachado el paquete, recibirás información necesaria para realizar el seguimiento y conocer el estado de tu compra.</p>
        </div>
      </div>
    </div>
  )
}

export default TerminosYCondiciones