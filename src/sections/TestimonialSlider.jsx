import React from 'react';
import Slider from "react-slick";
import '../App.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    {
      text: "This company provided excellent service and support. Highly recommended!",
      name: "John Doe",
      position: "CEO, Company A"
    },
    {
      text: "A wonderful experience from start to finish. Outstanding quality!",
      name: "Jane Smith",
      position: "Marketing Director, Company B"
    },
    {
      text: "Professional, efficient, and great communication. Will use again!",
      name: "Sam Wilson",
      position: "Product Manager, Company C"
    }
  ];

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-position">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
