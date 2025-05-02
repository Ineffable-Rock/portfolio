import React from 'react';
import './index.css';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Hero from './components/Hero/Hero.jsx';

import MyService from './components/MyServices/MyService.jsx';
import MyWork from './components/MyWork/MyWork.jsx';
import Contact from './components/Contactform/ContactForm.jsx';

import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <MyService/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App