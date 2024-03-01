import { useState } from 'react';
import './styles.css'
import Castelo from './assets/castelo.png'


function AboutMe() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const age = 35;
  const myName = "Wellington Junior";

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <section id="aboutMe" className='presentation'>
      <div className="presentation__image">
        <img src={Castelo} alt="Wellington taking a photo in front of the castle" className="image__castle" />
      </div>
      <div className="presentation__whoIAm">
        <button type="button" className="btn btn-outline-warning button__whoIAm" onClick={toggleAboutMe}>About Me</button>
      </div>
      {showAboutMe && (
        <div className="close__button">
          <p className="text__whoIam">
            Hello, my name is {myName}, I am Brazilian and I'm {age} years old. I have a degree in People Management and today I am in a career transition to the technology area. I am a Frontend Developer, and have knowledge in <span style={{ fontSize: '20px', color: '#4d54e7' }}>HTML, CSS, Javascript, Bootstrap, Git, Github, Node.js, React JS.</span> I have experience with document control, typing, production, teamwork, attention to deadlines for delivery of products and communication. I leave my <a href="https://www.github.com/Wellington2708" target="_blank" rel="noopener noreferrer">Github Here</a> to better demonstrate my work. Welcome to my portfolio.
          </p>
        </div>
      )}
    </section>
  );
}

export default AboutMe;
