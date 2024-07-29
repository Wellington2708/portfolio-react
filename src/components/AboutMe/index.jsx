import { useState } from 'react';
import styles from './AboutMe.module.css';
import Castle from './assets/castle.png';
import Top from  '../Top';



function AboutMe() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const age = 35;

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <>
    <section id="aboutMe" className={styles.presentation}>
      <div className={styles.presentation__image}>
        <img src={Castle} alt="Wellington taking a photo in front of the castle" className={styles.image__castle} />
      </div>
      <div className={styles.presentation__whoIAm}>
      <button type="button" className={`btn btn-outline-warning ${styles.button__whoIAm}`} onClick={toggleAboutMe}>About Me</button>
      </div>
      {showAboutMe && (
        <div className={styles.close__button}>
          <p className={styles.text__whoIam}>
            Hello, my name is Wellington Luis, I am Brazilian and I'm {age} years old. I have a degree in People Management and today I am in a career transition to the technology area.
             I am a Frontend Developer, and have knowledge in <span style={{ fontSize: '20px', color: '#4d54e7' }}>HTML, CSS, Javascript, Bootstrap,
              Git, Github, Node.js, React JS.</span> I have experience with document control, typing, production, teamwork, attention to deadlines for 
              delivery of products and communication. I leave my <a href="https://www.github.com/Wellington2708" target="_blank" rel="noopener noreferrer">
              Github Here</a> to better demonstrate my work. Welcome to my portfolio.
          </p>
        </div>
      )}
    </section>
    <div className={styles.top}>
    <Top />
    </div>
    </>
  );
}

export default AboutMe;
