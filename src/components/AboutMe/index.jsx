import { useState } from 'react';
import styles from './AboutMe.module.css';
import Castle from './assets/castle.png';
import Top from  '../Top';



function AboutMe() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const age = 36;

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
              Hello, my name is Wellington Luis, I am Brazilian and I'm {age} years old.
              I'm Freelance Frontend Developer with 2 years of experience, and have knowledge in <em style={{ fontSize: '16px', color: '#4d54e7' }}>HTML, CSS, Javascript, Bootstrap,
              Git, Github, Node.js, React JS.</em><br></br> I have experience with document control, typing, production, teamwork, attention to deadlines for 
              delivery of products and communication.<br></br> Some of the developed projects can be seen on my <a href="https://www.github.com/Wellington2708" target="_blank" rel="noopener noreferrer">
              Github </a> to better demonstrate my work. 
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
