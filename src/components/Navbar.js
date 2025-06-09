import React, { useEffect, useState } from "react";

const sections = [ "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + 100;
      let current = "hero";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          Harsh Raj
        </a>
        <div className="navbar-links">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={active === section ? "active" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
