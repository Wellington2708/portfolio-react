import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutMe from '../../components/AboutMe';
// import Certificates from '../../components/Certificates';
// import Contacts from '../../components/Contacts';
// import Projects from '../../components/Projects';
// import Graduation from '../../components/Graduation';


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/graduation" element={<Graduation />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;
