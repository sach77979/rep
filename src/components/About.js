import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <img src={profile} alt="Profile" className="profile-img" />
        <div>
          <h2>About Me</h2>
          <p>
          Heyy respected, Sir/Ma'am.

I am Sachin Dubey from Bihar, i completed my 10th Grade from HLHSBS Patna with 64%, and 12th Grade from also HLHSBS Patna with 68%.and I have complete the Bachelor of Computer Applications (BCA) at IES University, Bhopal. I have a strong passion for full-stack development and constantly strive to expand my technical expertise.
Technical Skills:
Frontend: HTML5, CSS, JavaScript, React.js

Backend: Node.js, MongoDB

Internship Experience:
To gain real-world exposure, I have completed two internships:

Mobzway Technology (3 months) – Gained hands-on experience in full-stack development.

2. Eduversity Technology (2 months) – Worked on real-time projects and enhanced my problem-solving skills.

Strengths & Weaknesses:
Strengths: Leadership, positive mindset, adaptability, and a strong desire to help others.

Weakness: Sensitivity, but I am working on managing it to improve my professional interactions.

Career Goals:
Short-term: Work with emerging technologies and build innovative projects.

Long-term: Establish my own tech company in my city to drive innovation and create job opportunities.

Hobbies & Interests:
Apart from coding, I enjoy playing video games, which helps me enhance my strategic thinking and problem-solving skills.

Thank you for the opportunity! I look forward to discussing how my skills and passion align with this role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
