import React from "react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Prasunet Company ",
    period: "Mar 2025 - Jun 2025",
    description:
      "Worked on autonomous drone navigation using reinforcement learning and computer vision to develop robust path-planning algorithms.",
  },
  
  {
    title: "Energy Management System Intern",
    company: "ABB India, Vadodara",
    period: "June 2024 – July 2024",
    description:
      "Contributed to ISO certification process through efficient energy usage mapping. Gained hands-on knowledge in motor manufacturing and power systems. Assisted in control system operations to boost sustainability efforts.",
  },
  {
    title: "Creative Media Intern",
    company: "ReferralHype",
    period: "July 2023 – August 2023",
    description:
      "Created daily Pinterest pins and YouTube Shorts aligning with brand tone. Drove audience engagement through visual storytelling.",
  },
  {
    title: "Head of Design (Part-Time)",
    company: "IEEE PELS, VIT Vellore",
    period: "Jan 2024 – Present",
    description:
      "Led design initiatives and content creation for Instagram campaigns. Coordinated team-driven projects promoting innovation in power electronics.",
  },
  {
    title: "Senior Core (Part-Time)",
    company: "VIT-STELLAR (Astronomy Club)",
    period: "Dec 2023 – Present",
    description:
      "Collaborated on public outreach and astronomical design-based events. Focused on technology integration in science communication.",
  },
];

const skills = [
  "C++",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "MATLAB",
  "OrCAD",
  "OrCAD Capture CIS",
  "Simulink",
  "AWS",
  "GitHub",
  "Robotics & Automation",
  "Energy Management",
  "Creative Media",
];

const certifications = [
  "HTML, CSS, JavaScript Essential Training – LinkedIn",
  "Git Essential Training – LinkedIn",
  "Digital Marketing Foundations – LinkedIn",
  "Career Essentials in Generative AI – Microsoft & LinkedIn",
  "Career Essentials in Project Management – Microsoft & LinkedIn",
  "MATLAB & Simulink Onramp – MathWorks",
];

const professionalSummary = `Tech-driven Electrical and Electronics Engineering undergraduate with hands-on experience in energy systems, creative media, and technical leadership. Passionate about blending innovation and design with core engineering principles. Proficient in programming, cloud tools, and circuit design. Eager to contribute to dynamic projects that solve real-world problems through sustainable, data-driven solutions.`;

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div>
      {/* Experience Section */}
      <section id="experience" ref={ref} className={inView ? "visible" : ""}>
        <h2 className="section-title">Experience & Internships</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <h3>{exp.title}</h3>
              <small>
                {exp.company} | {exp.period}
              </small>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Summary Section */}
      <section id="summary" style={{ maxWidth: "800px", margin: "3rem auto", padding: "0 20px" }}>
        <h2 className="section-title">Professional Summary</h2>
        <p style={{ color: "#8892b0", fontSize: "1.1rem", lineHeight: 1.6 }}>{professionalSummary}</p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: "800px", margin: "3rem auto 5rem auto", padding: "0 20px" }}>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" style={{ maxWidth: "800px", margin: "3rem auto 5rem auto", padding: "0 20px" }}>
        <h2 className="section-title">Certifications</h2>
        <ul style={{ color: "#8892b0", fontSize: "1.1rem", lineHeight: 1.6 }}>
          {certifications.map((cert, i) => (
            <li key={i} style={{ marginBottom: "0.5rem" }}>
              {cert}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
