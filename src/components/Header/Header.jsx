import './Header.css';
import logoImg from '../../images/logo.png'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img className='logo-image' src={logoImg} alt="Francis Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;