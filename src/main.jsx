import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Certificates from './components/Certificates';
import Graduation from './components/Graduation';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import App from './App';

const router = createBrowserRouter([
  { path: '/', 
    element:  <App/>,
    children: [
      { path: '/', 
        element: <AboutMe/> },
      { path: 'aboutme', 
          element: <AboutMe/> },
      { path: 'certificates', 
        element: <Certificates/> },
      { path: 'graduation', 
        element: <Graduation/> },
      { path: 'projects', 
        element: <Projects/> },
      { path: 'contacts',
        element: <Contacts/> },
      ]
   }
  ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)


