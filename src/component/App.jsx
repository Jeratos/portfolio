import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import Head from "./header";
import Home from "./home";
import Form from "./form";
import Foot from "./footer";
import About from "./About";
import Project from "./project"
function App() {
  return (
  <>
       <Router basename="/portfolio">
       <Head />

       <Routes>
          <Route path="/About"
           element= {<About />}
          />
         <Route path="/portfolio"
           element= {<Home />}
          />
         <Route path="/project"
           element= {<Project />}
          />
        </Routes>
       <Form />
       <Foot/>
       </Router>

  </>

  )      
}

export default App;
