import React, { useState, useEffect } from 'react';
import './slider.css';

import slide1 from '../assets/img1.jpg';
import slide2 from '../assets/img6.jpg';
import slide3 from '../assets/img3.jpg';
import slide4 from '../assets/img4.jpg';
import slide5 from '../assets/img5.jpg';

const Slider = () => {
  const images = [
    { id: 1, url: slide1 },
    { id: 2, url: slide2 },
    { id: 3, url: slide3 },
    { id: 4, url: slide4 },
    { id: 5, url: slide5 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex].url}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
};

export default Slider;
