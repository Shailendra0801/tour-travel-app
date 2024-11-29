import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Styles/ImageSlider.css';

const ImageSlider = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // Prevents setting an interval if there are no images

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Clean up on unmount
  }, [images.length, interval]);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return <div>No images available</div>; // Handle empty images
  }

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1} of ${images.length}`}
        style={{ width: '97%', height: '97vh', borderRadius: '10px', margin: '0 auto', objectFit: 'cover' }}  
      />
      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default ImageSlider;