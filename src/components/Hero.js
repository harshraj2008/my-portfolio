import React from 'react';
import TypedWrapper from './TypedWrapper'; // Adjust path as needed

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlighted-name">Harsh Raj </span>
          </h1>
          <TypedWrapper />
          <p className="hero-subtitle">
            I build scalable and performant software solutions to real-world problems.
          </p>
          <a href="#contact" className="hero-cta">
            Contact Me
          </a>
        </div>
        <img src="profile1.png" alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
