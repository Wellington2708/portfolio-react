import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaRegEnvelope } from "react-icons/fa6";
import styles from  './Contacts.module.css'

function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.title__contacts}>Contacts:</h2>
      <div className={styles.contacts}>
        <div className={styles.list__contacts}>
          <a
            className={`link-tooltip  ${styles.item__contacts} ${styles.link__email}`}
            href="mailto:wellingtondevelopercontact@gmail.com"
            target="_blank"
          
          >
         <FaRegEnvelope /> Email
          </a>
          <a
            className={`link-tooltip  ${styles.item__contacts} ${styles.link__linkedin}`}
            href="https://www.linkedin.com/in/wellington-luis-41513874/"
            target="_blank"
            
          >
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>
          <a
            className={`${styles.item__contacts} link-tooltip  ${styles.link__github}`}
            href="https://github.com/Wellington2708"
            target="_blank"
            
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a
            className={`${styles.item__contacts} link-tooltip ${styles.link__facebook}`}
            href="https://www.facebook.com/WellingtonJunior2708"
            target="_blank"
            
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
