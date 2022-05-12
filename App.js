import React from 'react';
import './App.css';
import Home from './compo/Home';
import { Route, Routes } from 'react-router-dom';

import About from './compo/About';
import Contact from './compo/Contact';
import Appnavbar from './compo/Appnavbar';
import Features from "./compo/Features";
import LOGIN from './compo/LOGIN';
import Service from './compo/Service';
import Footer from './compo/Footer';

import Navbaar from './compo/Navbaar';


function App() {
  return (
    <div className="App">
      
      
      

      <Navbaar/>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/appnavbar" element={<Appnavbar />}></Route>
        <Route exact path="/features" element={<Features />}></Route>

        <Route exact path="/contact" element={<Contact />}></Route>
      
        <Route exact path="/log-in" element={<LOGIN />}></Route>
        <Route exact path="/Service" element={<Service />}></Route>
      </Routes>

       
        
    
      
      

      
     
     
      <Footer/>

      
      
      
    </div>
  );
}

export default App;
