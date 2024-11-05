import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      {/* Social icons on the left */}
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="icon github">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:youremail@example.com" className="icon email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#contact" className="icon contact">
          <i className="fas fa-address-book"></i>
        </a>
      </div>

      {/* Main content */}
      <div className="about-content">
        <h2>About</h2>
        <div className="about-text">
          <p>
            Hi. I'm Nikshitha, nice to meet you. Please take a look around.
          </p>
          <p>
          I am an aspiring software developer with a keen interest in building responsive and scalable web applications using modern technologies like React.js and MongoDB. I am enthusiastic about learning and applying best practices in web development while simplifying complex technical concepts through writing. My goal is to contribute to innovative projects that enhance user interaction and functionality.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
