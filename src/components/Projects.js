import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="project-card">
        <ul>
          <li>
            <h4>
              <a href="https://your-library-management-link.com" target="_blank" rel="noopener noreferrer">
                1. Library Management System
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="https://tic-tak-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">
                2. Tic-Tac-Toe Game
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="https://rockpp-s.vercel.app/" target="_blank" rel="noopener noreferrer">
                3. Rock-Paper-Scissors Game
              </a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="https://tdl-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                4. Task Management System
              </a>
            </h4>
          </li>
        </ul>
        <p><strong>Technologies Used:</strong> React, Bootstrap, CSS, JavaScript, HTML5, node.js, Firebase, MongoDB</p>
      </div>
    </section>
  );
};

export default Projects;
