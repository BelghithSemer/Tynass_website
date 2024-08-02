import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, overview, vision, buttonText, imageUrl, link }) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h2>{title}</h2>
        <h3>Project overview</h3>
        <p className="project-overview">{overview}</p>
        <h3>Project Vision</h3>
        <p className="project-vision">{vision}</p>
        <a href={link} className="project-button">{buttonText}</a>
      </div>
      <div className="project-card-image">
        <img src="/assets/farhet_hached.png" alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
