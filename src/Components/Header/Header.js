import styles from './Header.module.css';
import logo from './logo.png';

function Header() {

    const alt = "logo Wellington Junior Developer Front-End"

    return (
        <header className={styles.header}>
            <h1><img src={logo} alt={alt} className={styles.header__logo} /></h1>
            <nav className={styles.header__list}>
                <li><a href="#aboutMe" className={styles.header__list__item}>About me</a></li>
                <li><a href="#skills" className={styles.header__list__item}>Skills</a></li>
                <li><a href="#graduation" className={styles.header__list__item}>Graduation</a></li>
                <li><a href="#projects" className={styles.header__list__item}>Projects</a></li>
                <li><a href="#contacts" className={styles.header__list__item}>Contacts</a></li>

            </nav>

        </header>
    );
}

export default Header