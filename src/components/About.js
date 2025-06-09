import React from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" ref={ref} className={inView ? "visible" : ""}>
      <h2 className="section-title">About Me</h2>
      <p>
        I am an enthusiastic Electrical & Electronics Engineering student with a passion for leveraging technology to create innovative solutions. My experience spans autonomous drone navigation using deep learning, energy management systems, and creative media design. I thrive at the intersection of engineering and software development, with strong skills in programming (C++, Python, Java), cloud platforms like AWS, and tools such as MATLAB and OrCAD. I am driven by a desire to apply cutting-edge technologies in robotics, automation, and sustainable energy to solve real-world challenges and contribute meaningfully to impactful projects.
      </p>
    </section>
  );
}
