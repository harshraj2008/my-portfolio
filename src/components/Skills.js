import React from "react";
import { useInView } from "react-intersection-observer";

const skills = {
  Programming: ["C++", "Python", "Java", "MATLAB", "SQL"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  "Tools & Platforms": [
    "MATLAB",
    "Simulink",
    "OrCAD",
    "OrCAD Capture CIS",
    "Git",
    "Docker",
    "Jupyter Notebook"
  ],
  Cloud: ["AWS", "GitHub", "Microsoft Azure", "Google Cloud Platform"],
  "Machine Learning & AI": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Reinforcement Learning",
    "Computer Vision"
  ],
  Domains: [
    "Robotics & Automation",
    "Energy Management",
    "Embedded Systems",
    "Control Systems",
    "Creative Media",
    "IoT (Internet of Things)"
  ]
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className={`skills-section ${inView ? "visible" : ""}`}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="skills-card">
            <h3 className="skills-category">{category}</h3>
            <ul className="skills-list">
              {items.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
