import './App.css';
import MainNav from './Modules/Global/MainNav/Header.jsx';
import Footer from '../src/Modules/Global/Footer.jsx';
import Home from '../src/Pages/Home/Home.jsx';
import About from '../src/Pages/About/About.jsx';
import Services from '../src/Pages/Services/Services.jsx';
import Contact from '../src/Pages/Contact/Contact.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App fullPage">

      <Router basename="/mv3">
      <MainNav />        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>                    
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
