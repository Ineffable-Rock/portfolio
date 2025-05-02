import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const skills = [
    { name: "HTML & CSS", level: "50%" },
    { name: "React JS", level: "80%" },
    { name: "JavaScript", level: "60%" },
    { name: "React JS", level: "70%" },
    { name: "Flask", level: "55%" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="images/character-img.jpg"
            alt="Profile"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">
            About <span>me</span>
          </h2>
          <p>
          I'm a frontend and backend developer from India. I'm currently in my 2nd year of college and have been actively building projects using technologies like React, Framer Motion, EmailJS, and Bootstrap. 
          I have a solid foundation in DSA, OOP, DBMS, and OS, and I enjoy learning by building and improving real-world applications.
          </p>
          <p>
            My passion for development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>
          <div className="skills">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="skill-bar">
                  <label>{skill.name}</label>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <h3>
            <span className="gradient-text">1</span>
          </h3>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div>
          <h3>
            <span className="gradient-text">3+</span>
          </h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/*<hr />
        <div>
          <h3>
            <span className="gradient-text"></span>
          </h3>
          {/* <p>HAPPY CLIENTS</p> }
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
