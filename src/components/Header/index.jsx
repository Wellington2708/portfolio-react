import './Header.css';

import Logo from "./assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="container__header">
        <img src={Logo} alt="Logo Wellington Junior Frontend" className='container__logo'/>
        <div className="date">
          <span>Date: 21/02/1988</span>
        </div>
        <div className='container__navegation'>
        <ul className='container__list'>
          <li>
            <a href="#aboutMe" className='container__list__item'>About Me</a>
          </li>
          <li>
            <a href="#container__certificates"  className='container__list__item'>Certificates</a>
          </li>
          <li>
            <a href="#graduation"  className='container__list__item'>Graduation</a>
          </li>
          <li>
            <a href="#projects"  className='container__list__item'>Projects</a>
          </li>
          <li>
            <a href="#contacts"  className='container__list__item'>Contacts</a>
          </li>
        </ul>
        </div>
      </header>
    </>
  );
}
