import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import "./Header.css";

import WhatsappIcon from "../../assets/icon-whatsapp.png";
import InstagramIcon from "../../assets/icon-instagram.png";
import LogoHeader from "../../assets/logo-header.png";
import SearchIcon from "../../assets/icon-search.png";
import CartIcon from "../../assets/carrito-icon.png";
import CartIconActive from "../../assets/carrito-icon-seleccionado.png";
 
const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "CATÁLOGO", path: "/catalogo" },
  { label: "CAFÉ IMPORTADO", path: null },
  { label: "LIBROS", path: null },
];
 
function Header({ cartCount = 0 }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [location] = useLocation();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log("Buscar:", searchValue);
  }
 
  return (
    <header className="header">
      <div className="header__topbar">
        <a
          href="https://wa.me/5400000000"
          className="header__topbar-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={WhatsappIcon} alt="WhatsApp"/>
          Atención por WhatsApp
        </a>
        <a
          href="https://instagram.com/coffeeandboks"
          className="header__topbar-link ig"
          target="_blank"
          rel="noreferrer"
        >
          <img src={InstagramIcon} alt="Instagram"/>
          Seguinos en ig
        </a>
      </div>
 
      <div className="header__main">
        <Link href="/" className="header__logo">
          <img src={LogoHeader} alt="Coffee and Books" className="header__logo-img" />
        </Link>
 
        <nav className="header__nav">
          {NAV_LINKS.map((link) =>
            link.path ? (
              <Link
                key={link.label}
                href={link.path}
                className={`header__nav-link ${location === link.path ? "header__nav-link--active" : ""}`}
              >
                {link.label}
              </Link>
            ) : (
              <span key={link.label} className="header__nav-link header__nav-link--disabled">
                {link.label}
              </span>
            )
          )}
        </nav>
 
        <div className="header__actions">
          {isMobile ? (
            /* Mobile: buscador siempre visible como input expandido */
            <form className="header__search-always" onSubmit={handleSearchSubmit}>
              <img src={SearchIcon} alt="Buscar" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
          ) : searchOpen ? (
            /* Desktop: buscador expandible al hacer click */
            <form className="header__search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="header__search-input"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className="header__search-close"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchValue("");
                }}
              >
                ✕
              </button>
            </form>
          ) : (
            <button
              className="header__icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Abrir buscador"
            >
              <img src={SearchIcon} alt="Buscar" />
            </button>
          )}
 
          <Link href="/carrito" className="header__icon-btn header__cart" aria-current={location === "/carrito" ? "page" : undefined}>
            <img src={location === "/carrito" ? CartIconActive : CartIcon} alt="Carrito"/>
            {cartCount > 0 && (
              <span className="header__cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>


      {/* Nav mobile (abajo del main) */}
      <nav className="header__nav-mobile">
        {NAV_LINKS.map((link) => (
          link.path ? (
            <Link
              key={link.label}
              href={link.path}
              className={`header__nav-link ${location === link.path ? "header__nav-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ) : (
            <span key={link.label} className="header__nav-link header__nav-link--disabled">
              {link.label}
            </span>
          )
        ))}
      </nav>
    </header>
  );
}

export default Header;