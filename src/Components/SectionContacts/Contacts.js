import ContactMe from './Contacts.module.css'
import {BsFacebook} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'


function Contacts(){
    return (
    <section id="contacts" className={ContactMe.contatos}>
       
        <h2 className={ContactMe.titulo__contatos}>Contatos:</h2>
        <div className={ContactMe.lista__contatos}>
                <ul className={ContactMe.list}>
                    <a className={`${ContactMe.item__contatos} ${ContactMe.link__email}`} href="mailto:wellingtondevelopercontact@gmail.com">
                    <SiGmail className={ContactMe.fa_envelope}/> Email</a>
                    <a className={`${ContactMe.item__contatos} ${ContactMe.link__linkedin}`}
                        href="https://www.linkedin.com/in/wellington-junior-41513874/">
                    <FaLinkedin/> Linkedin</a>
                    <a className={`${ContactMe.item__contatos} ${ContactMe.link__github}`} href="https://github.com/Wellington2708">
                    <SiGithub className={ContactMe.github}/> Github</a>   
                    <a className={`${ContactMe.item__contatos} ${ContactMe.link__facebook}`} href="https://www.facebook.com/jhonnyn010">
                    <BsFacebook/> Facebook</a>

                </ul>
        </div>
     
    </section>
    );
}

export default Contacts