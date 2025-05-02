import React from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Hero from './components/Hero/Hero';

import MyService from './components/MyServices/MyService';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contactform/ContactForm';

import Footer from './components/Footer/Footer';

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