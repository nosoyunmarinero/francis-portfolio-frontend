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
    <header className={`header ${hidden ? "hidden" : ""}`}>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img className="logo-image" src={logoImg} alt="Francis Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <div className="contact-container">
              <Link to="/contact">Contact</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
