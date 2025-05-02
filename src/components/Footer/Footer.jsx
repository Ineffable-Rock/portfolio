import React from "react";
import "./Footer.css";
import { LuUserRound } from "react-icons/lu";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Krish</h1>
          <p>
          I'm a software developer from India with 3 months of experience. 
          I'm currently in my 2nd year of college and have been actively building projects using technologies like React, 
          Framer Motion, EmailJS, and Bootstrap. I have a solid foundation in DSA, OOP, DBMS, and OS, 
          and I enjoy learning by building and improving real-world applications.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <LuUserRound/>
                <input type="email" placeholder="Enter Your Email"/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        Designed and build by Krish Kumar. 2025 ©️ All rights are reserved 😊
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;