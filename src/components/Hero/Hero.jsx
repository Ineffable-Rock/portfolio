import "./Hero.css";
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {

  return (
    <div id="home" className="hero">
      <img
        src="images/ChatGPT.png"
        alt=""
      />
      <h1><span>Hi, I'm Krish Kumar, </span>Software developer based in India.</h1>
      <p>
        
      </p>
      
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50}ś href="#contact">Connect With Me</AnchorLink>
        </div>
 
        <div className="hero-button hero-resume">
          <a href="https://docs.google.com/document/d/1QbnBsXeMTiPiSnn78NSpPK9FAak7a5W-mZ2TGcx0ltI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
             My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
