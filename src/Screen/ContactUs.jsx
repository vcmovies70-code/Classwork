import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send formData to your backend / email service here
    console.log(formData);
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      {/* Top banner */}
      <section className="contact-hero">
        <h4>Contact us</h4>
        <h1>
          Let's talk, <br /> let's build together
        </h1>
        <p>Have a question about our courses? Send us a message.</p>
      </section>

      {/* Info + form */}
      <section className="contact">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Learn fullstack, cyber security and backend development with us.
            We usually reply within 24 hours.
          </p>

          <ul>
            <li>
              <span>&#9993;</span> Chibuihevictor06@gmail.com
            </li>
            <li>
              <span>&#9906;</span> Owerri, Imo State
            </li>
            <li>
              <span>&#9742;</span> 08142581616
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send message
          </button>

          {sent && <p className="success-msg">Thanks! Your message has been sent.</p>}
        </form>
      </section>
    </div>
  );
};

export default ContactUs;