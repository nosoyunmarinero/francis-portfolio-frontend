import './Header.css';
import logoImg from '../../images/logo.png'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="#hero">
          <img className='logo-image' src={logoImg} alt="Francis Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li>
            <div className='contact-container'>
            <a href="#contact">Contacto</a>
            </div>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;