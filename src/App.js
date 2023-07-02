import Header from './Components/Header/Header.js';
import AboutMe from './Components/SectionAboutMe/AboutMe.js';
import Skills from './Components/SectionSkills/Skills.js';
import Graduation from './Components/SectionGraduation/Graduation.js';
import Projects from './Components/SectionProjects/Projects.js';
import Contacts from './Components/SectionContacts/Contacts.js';
import TextAboutMe from './Components/SectionAboutMe/TextAboutMe.js';

function App() {
  return (
    <body>
        <Header/>
        <AboutMe/>
        <TextAboutMe/>
        <Skills/>
        <Graduation/>
        <Projects/>
        <Contacts/>
    </body>
  );
}

export default App;

