import styles from './Header.module.css';
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from '../Header/assets/menu.svg'
import { useState } from "react";

function Header() {
  const date = new Date().toLocaleDateString('pt-BR');

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


return (
  <header className={styles.container__header}>
    <Link to="/">
      <img src={Logo} alt="Logo Wellington Junior Frontend" className={styles.container__logo} />
    </Link>
    <div className={styles.date}>
      <span>{date}</span>
    </div>
    <img
      src={MenuIcon}
      alt="Menu"
      className={styles.menu__icon}
      onClick={toggleMenu}
    />
    <nav className={`${styles.container__navegation} ${menuOpen ? styles.open : ''}`}>
      <ul className={styles.container__list}>
        <li><Link to="/aboutme" className={styles.container__list__item}>About Me</Link></li>
        <li><Link to="/projects" className={styles.container__list__item}>Projects</Link></li>
        <li><Link to="/certificates" className={styles.container__list__item}>Certificates</Link></li>
        <li><Link to="/graduation" className={styles.container__list__item}>Graduation</Link></li>
        <li><Link to="/contacts" className={styles.container__list__item}>Contacts</Link></li>
      </ul>
    </nav>
  </header>
);
};

export default Header;