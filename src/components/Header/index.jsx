import styles from './Header.module.css';
import Logo from "./assets/logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.container__header}>
        <img src={Logo} alt="Logo Wellington Junior Frontend" className={styles.container__logo}/>
        <div className={styles.date}>
          <span>Date: 21/02/1988</span>
        </div>
        <div className={styles.container__navegation}>
        <ul className={styles.container__list}>
          <li>
            <a href="#aboutMe" className={styles.container__list__item}>About Me</a>
          </li>
          <li>
            <a href="#container__certificates"  className={styles.container__list__item}>Certificates</a>
          </li>
          <li>
            <a href="#graduation"  className={styles.container__list__item}>Graduation</a>
          </li>
          <li>
            <a href="#projects"  className={styles.container__list__item}>Projects</a>
          </li>
          <li>
            <a href="#contacts"  className={styles.container__list__item}>Contacts</a>
          </li>
        </ul>
        </div>
      </header>
    </>
  );
}
