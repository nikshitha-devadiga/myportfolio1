import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
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

      {/* Contact Form */}
      <div className="contact-content">
        <h2>Contact</h2>
        <p>Send me a message</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="btn">Let's Collaborate</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
