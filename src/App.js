import Logo from './Components/Header/Logo.js';
import Menu from './Components/Header/Menu.js';
import AboutMe from './Components/SectionAboutMe/AboutMe.js';
import Skills from './Components/SectionSkills/Skills.js';
import Graduation from './Components/SectionGraduation/Graduation.js';
import Projects from './Components/SectionProjects/Projects.js';
import Contacts from './Components/SectionContacts/Contacts.js';

function App() {
  return (
    <body>
      <header className="App-header">
        <Logo/>
        <Menu/>
      </header>
        <AboutMe/>
        <Skills/>
        <Graduation/>
        <Projects/>
        <Contacts/>
    </body>
  );
}

export default App;

