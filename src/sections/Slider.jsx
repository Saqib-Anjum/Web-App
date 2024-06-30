import React from 'react';
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://en.idei.club/uploads/posts/2023-03/1679202339_en-idei-club-p-modern-luxury-house-design-dizain-25.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://img.goodfon.com/original/2560x1600/4/b9/dom-zdanie-derevya.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/83/95/36/839536804a2c02ecf627d5c922870374.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/00/7f/51/007f51b677230a69f08125c674c4d6ac.jpg" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
