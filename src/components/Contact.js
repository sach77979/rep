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
  
    emailjs.sendForm(
      "service_5p9txcg",
      "template_vxeo9g8",
      e.target,  // Directly reference the form
      "8bQv5P9qOR3yCClNn"
    ).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });  // Clear form
      },
      () => {
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
    </section>
  );
};

export default Contact;
