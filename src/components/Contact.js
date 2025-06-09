import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" ref={ref} className={`contact-section ${inView ? "visible" : ""}`}>
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="contact-textarea"
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>

      <div className="social-links">
        <h3>Connect with me</h3>
        <div className="icons">
          <a href="https://linkedin.com/in/harsh-raj-8b9685267" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/harshraj2008" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:hk200804@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+917600078025">
            <FaPhone />
          </a>
        </div>
      </div>
    </section>
  );
}
