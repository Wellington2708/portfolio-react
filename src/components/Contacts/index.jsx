import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaRegEnvelope } from "react-icons/fa6";
import './styles.css'

export default function Contacts() {
  return (
    <section id="contacts" className='contacts'>
      <h2 className="title__contacts">Contacts:</h2>
      <div className="contacts">
        <div className="list__contacts">
          <a
            className="item__contacts link-tooltip  link__email"
            href="mailto:wellingtondevelopercontact@gmail.com"
            target="_blank"
          
          >
         <FaRegEnvelope /> Email
          </a>
          <a
            className="item__contacts link-tooltip  link__linkedin"
            href="https://www.linkedin.com/in/wellington-junior-41513874/"
            target="_blank"
            
          >
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>
          <a
            className="item__contacts link-tooltip  link__github"
            href="https://github.com/Wellington2708"
            target="_blank"
            
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a
            className="item__contacts link-tooltip link__facebook"
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
