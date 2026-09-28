import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    
    title: "Fullstack Development",
    text: "Build complete web apps from the interface to the database using modern tools like React and Node.",
    points: ["HTML, CSS & JavaScript", "React & APIs", "Deployment"],
  },
  {
    
    title: "Cyber Security",
    text: "Learn how to protect systems, networks and data from real-world threats.",
    points: ["Network security basics", "Ethical hacking", "Threat prevention"],
  },
  {
    
    title: "Backend Development",
    text: "Create fast and secure servers, databases and APIs that power great applications.",
    points: ["Node.js & Express", "Databases", "Authentication"],
  },
 
];

const Services = () => {
  return (
    <div>
      {/* Top banner */}
      <section className="services-hero">
        <h4>Our services</h4>
        <h1>
          Skills that build <br /> your future
        </h1>
        <p>Practical, hands-on courses taught by expert instructors.</p>
      </section>

      {/* Cards */}
      <section className="services">
        <div className="services-grid">
          {services.map((item) => (
            <div className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>&#10004; {point}</li>
                ))}
              </ul>
              <Link to="/ContactUs" className="service-btn">
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="services-cta">
        <h2>Ready to start learning?</h2>
        <p>Flexible learning schedule. Practical hands-on training.</p>
        <Link to="/ContactUs" className="cta-btn">
          Contact us today
        </Link>
      </section>
    </div>
  );
};

export default Services;