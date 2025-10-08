import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImg from "../../images/logo.png";

function Header() {
  const [hidden, setHidden] = useState(false);
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

  return (
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo-image" src={logoImg} alt="Francis Logo" />
          </Link>
        </div>
        <ul className="header__nav-links">
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <div className="heacder__contact-container">
              <Link to="/contact">Contact</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
