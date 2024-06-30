import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Welcome to our company! We specialize in delivering top-notch services in web and mobile development, UI/UX design, and SEO optimization. Our team of experts is dedicated to creating solutions that meet your needs and exceed your expectations.
          </p>
          <p className="about-description">
            Our mission is to provide exceptional service and to follow through on our promises. We will strive to deliver individualized solutions to all our client's digital needs and add value to our client's businesses. Our team is focused on delivering high-quality results and building long-term relationships with our clients.
          </p>
          <p className="about-description">
            We believe in continuous improvement and innovation. We stay updated with the latest trends and technologies to ensure we are delivering the best possible solutions to our clients.
          </p>
        </div>
        <div className="about-image-container">
          <img src="https://insiderpaper.com/wp-content/uploads/2023/08/new-home-1530833_1280.jpg" alt="About Us" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
