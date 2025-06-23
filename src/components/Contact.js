import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_5p9txcg",        // Your Service ID
        "template_vxeo9g8",       // Your Template ID
        templateParams,
        "8bQv5P9qOR3yCClNn"       // Your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/sachin-dubey-308550257" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://t.me/Bhavandar_Sachin" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </li>
          <li>
            <a href="https://wa.me/919508173281" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1Uf8SsHvTX5E9RHGqWgZlUtjwG9UtzYI7/view?usp=drive_link" download>
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
