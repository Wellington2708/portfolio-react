import styles from './Header.module.css';
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function Header() {

   return (
    <header className={styles.container__header}>
      <img src={Logo} alt="Logo Wellington Junior Frontend" className={styles.container__logo}/>
      <div className={styles.date}>
         <span></span>
      </div>
      <nav className={styles.container__navegation}>
        <ul className={styles.container__list}>
          <li><Link to="/" className={styles.container__list__item}>Home</Link></li>
          <li><Link to="/aboutme" className={styles.container__list__item}>About Me</Link></li>
          <li><Link to="/certificates" className={styles.container__list__item}>Certificates</Link></li>
          <li><Link to="/graduation" className={styles.container__list__item}>Graduation</Link></li>
          <li><Link to="/contacts" className={styles.container__list__item}>Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
