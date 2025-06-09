import React from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Autonomous Drone Navigation",
    description:
      "Developed a deep learning model for drone path planning in complex environments using reinforcement learning based on Airsim based on Unreal Engine.",
    github: "https://github.com/harshraj2008/drone_navigation_project",
    drive: "https://drive.google.com/drive/folders/13mVUcty2tl90VBDDeFINvF75wmFfbwMI?usp=drive_link"
  },
  {
    title: "IEEE-PELS VIT Vellore Website",
    description:
      "A one-stop destination for all IEEE-PELS VIT Vellore updates, built with React and Firebase.",
    github: "https://github.com/harshraj2008/IEEE-PELS",
    weblink: "https://wastelink-app.web.app/"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and experience using React and CSS animations.",
    github: "https://github.com/harshraj2008/portfolio",
    weblink: "https://autonomous-drone-navigation.web.app/"
  }
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="projects" ref={ref} className={inView ? "visible" : ""}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, github, weblink, drive }, i) => (
          <div key={i} className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {drive && (
                <a href={drive} target="_blank" rel="noopener noreferrer">
                   Video Trail Runs 
                </a>
              )}
              {weblink && !drive && (
                <a href={weblink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
