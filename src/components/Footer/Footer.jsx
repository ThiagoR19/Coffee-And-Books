import { Link, useLocation } from "wouter";
import "./Footer.css";
import InstagramIcon from "../../assets/icon-instagram.png";
import WhatsAppIcon from "../../assets/icon-whatsapp.png";
import LogoFooter from "../../assets/logo-footer.png";

const INFO_LINKS = [
  { label: "Sobre nosotros", path: "/sobrenosotros" },
  { label: "Preguntas frecuentes", path: "/faqs" },
  { label: "Términos y condiciones", path: "/terminos" },
];

const CATEGORY_LINKS = [
  { label: "Libros", path: "/productoLibro" },
  { label: "Cafés", path: "/productoCafe" },
  { label: "Novedades", path: "/catalogo" },
  { label: "Ofertas", path: "/home" },
];

function Footer() {
  const [location] = useLocation();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__inner">
          <div className="footer__brand">
            <h2 className="footer__brand-name">COFFEE AND BOOKS</h2>
            <p className="footer__brand-tagline">
              Libros que inspiran,<br />café que acompaña
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com/coffeeandboks"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={InstagramIcon} alt="Instagram" className="footer__social-icon" />
              </a>
              <a
                href="https://wa.me/5400000000"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="footer__social-icon" />
              </a>
            </div>
          </div>

          <div className="footer__col info">
            <h3 className="footer__col-title">INFORMACIÓN</h3>
            <ul className="footer__link-list">
              {INFO_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`footer__link${location === link.path ? " footer__link--active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col cats">
            <h3 className="footer__col-title">CATEGORÍAS</h3>
            <ul className="footer__link-list">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="footer__link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col footer__logo-col">
            <img src={LogoFooter} alt="Coffee and Books" className="footer__logo-img" />
          </div>
        </div>
        <span className="footer__divider" />
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <p>© 2026 Grupo Charlie.<br />Todos los derechos reservados.</p>
        </div>
        <div className="footer__bottom-right">
          <img src={LogoFooter} alt="Coffee and Books" className="footer__logo-img" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;