import Header from './Components/Header/Header.js';
import AboutMe from './Components/SectionAboutMe/Image.js';
import Skills from './Components/SectionSkills/Skills.js';
import Graduation from './Components/SectionGraduation/Graduation.js';
import Projects from './Components/SectionProjects/Projects.js';
import Contacts from './Components/SectionContacts/Contacts.js';
import DescricionAboutMe from './Components/SectionAboutMe/TextAboutMe.js';
import ButtonAboutMe from './Components/ButtonAboutMe/ButtonAboutMe.js';



function App() {
  return (
    <body className='body'>
        <Header/>
        <AboutMe/>
        <DescricionAboutMe/>
        <Skills/>
        <Graduation/>
        <Projects/>
        <Contacts/>
    </body>
  );
}

export default App;

