import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from '../../components/AboutMe';
import Certificates from "../Certificates";
import Contacts from '../../components/Contacts';
import Home from '../../components/Home';


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;
