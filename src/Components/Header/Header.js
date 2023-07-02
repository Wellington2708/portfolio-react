import styles from './Header.module.css' ;

function Header(){
    const logoWellington = require('./logo2.png');

    return (
    <header className={styles.cabecalho}>
            <h1><img src={logoWellington} alt="logo Wellington Junior Developer Front-End" className={styles.cabecalho__logo}/></h1>
            <nav className={styles.cabecalho__navegacao}>
                <ul className={styles.cabecalho__lista}>
                    <li><a href="#sobreMim" className={styles.cabecalho__lista__item}>About me</a></li>
                    <li><a href="#habilidades" className={styles.cabecalho__lista__item}>Skills</a></li>
                    <li><a href="#graduacao" className={styles.cabecalho__lista__item}>Graduation</a></li>
                    <li><a href="#projetos" className={styles.cabecalho__lista__item}>Projects</a></li>
                    <li><a href="#contatos" className={styles.cabecalho__lista__item}>Contacts</a></li>

                </ul>
            </nav>
    </header>
    );
}

export default Header