import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "HTML", level: "98%", color: "#f05454", iconClass: "fab fa-html5" },
    { name: "CSS", level: "98%", color: "#3a86ff", iconClass: "fab fa-css3-alt" },
    { name: "JavaScript", level: "68%", color: "#ffbe0b", iconClass: "fab fa-js" },
    { name: "Node.js", level: "78%", color: "#32d74b", iconClass: "fab fa-node-js" },
    { name: "React", level: "65%", color: "#61dbfb", iconClass: "fab fa-react" },
  ];

  return (
    <section className="skills">
      {/* Sidebar with Social Icons */}
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

      {/* Skills Content */}
      <div className="skills-content">
        <h2 className="skills-heading">Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="progress-circle" style={{ borderColor: skill.color }}>
                <div className="skill-icon-background">
                  <i className={`${skill.iconClass} skill-icon`}></i>
                </div>
                <div className="progress" style={{ color: skill.color }}>{skill.level}</div>
              </div>
              <h3>{skill.name}</h3>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
