import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import React from "react";
import Navbar from "./component/layout/Navbar.js";
import About from "./component/pages/About.js";
import Contact from "./component/pages/Contact.js";
import Home from './component/pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import NotFound from "./component/pages/NotFound";
function App() {
  return (
   <Router>
      <div className="App">
 <Navbar/>
 <Routes>
   <Route exact path="/" element= {<Home />}/>
   <Route exact path ="/about" element ={<About/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
   <Route path="*"  element = {<NotFound/>}/>
 </Routes>
 
    </div>
   </Router>
  );
}

export default App;
