import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import {useEffect, useState} from 'react'

AOS.init()



function App() {

  return (
    <div className='app-container'>
      
      <Header />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
     
      
    </div>
  );
}

export default App;
