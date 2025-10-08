import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImg from "../../images/logo.png";

function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 80);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/" onClick={handleLinkClick}>
            <img className="header__logo-image" src={logoImg} alt="Francis Logo" />
          </Link>
        </div>

        <button
          className={`header__hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>

        <ul className={`header__nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About me
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <div className="header__contact-container">
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;