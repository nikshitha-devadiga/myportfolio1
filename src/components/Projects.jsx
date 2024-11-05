import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for project 1.",
      link: "#",
      iconClass: "fas fa-laptop-code"
    },
    {
      title: "Project 2",
      description: "Description for project 2.",
      link: "#",
      iconClass: "fas fa-database"
    },
    {
      title: "Project 3",
      description: "Description for project 3.",
      link: "#",
      iconClass: "fas fa-mobile-alt"
    },
    {
      title: "Project 4",
      description: "Description for project 4.",
      link: "#",
      iconClass: "fas fa-cloud"
    }
  ];

  return (
    <section className="projects">
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

      {/* Projects Content */}
      <div className="projects-content">
        <h2>My Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <i className={`${project.iconClass} project-icon`}></i> {/* Icon */}
              <h3>{project.title}</h3>
              <p></p>
              <a href={project.link} className="btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
