import React from 'react';
import '../App.css';

const services = [
  {
    title: 'Web Development',
    description: 'Build responsive and modern websites.',
    icon: '🌐'
  },
  {
    title: 'Mobile Development',
    description: 'Create mobile applications for iOS and Android.',
    icon: '📱'
  },
  {
    title: 'UI/UX Design',
    description: 'Design user-friendly and beautiful interfaces.',
    icon: '🎨'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website ranking on search engines.',
    icon: '🔍'
  }
];

const ServicesCard = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
