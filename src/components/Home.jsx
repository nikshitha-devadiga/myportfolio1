import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
      {/* Social Icons */}
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

      {/* Main Content */}
      <div className="home-content">
        <h1>I'm Nikshitha Full Stack Web Developer</h1>
        <p>I am a recent graduate with a passion for web development. I am eager to learn and contribute to web applications using technologies such as React, Tailwind, Next.js, and MongoDB</p>
        <a href="/about" className="btn">About Me</a>
      </div>

      {/* Neon Circular Image */}
      <div className="home-image">
        <img src="portfolio.jpg" alt="Neon Image" />
      </div>
    </section>
  );
}

export default Home; 