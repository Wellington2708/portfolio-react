// App.jsx
import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import FasamCourse from "./components/Fasam";
import CertificatesCarousel from './components/Certificates/index';
import ProjectsCarousel from "./components/Projects";
import Contacts from "./components/Contacts";
import Top from "./components/Top";

function App() {

  return (
    <div>
      <Header />
      <AboutMe />
      <CertificatesCarousel/>
      <FasamCourse />
      <ProjectsCarousel/>
      <Contacts/>
      <Top />
    </div>
  );
  
}

export default App;
