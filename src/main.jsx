import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Certificates from './components/Certificates';
import FasamCourse from './components/Fasam';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import App from './App';
import Home from './components/Home/index';

const router = createBrowserRouter([
  { path: '/', 
    element:  <>
                <App/>
                {/* <Home/> */}
              </>,
    children: [
      { path: 'aboutme', 
        element: <AboutMe/> },
      { path: 'certificates', 
        element: <Certificates/> },
      { path: 'graduation', 
        element: <FasamCourse/> },
      { path: 'projects', 
        element: <Projects/> },
      { path: 'contacts',
        element: <Contacts/> },
      ]
   }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
