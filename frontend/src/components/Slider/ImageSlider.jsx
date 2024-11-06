// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const ImageSlider = ({ images, interval = 6000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (images.length === 0) return; // Prevents setting an interval if there are no images

//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, interval);

//     return () => clearInterval(timer); // Clean up on unmount
//   }, [images.length, interval]);

//   const goToPrevious = () => {
//     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
//   };

//   const goToNext = () => {
//     setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
//   };

//   if (images.length === 0) {
//     return <div>No images available</div>; // Handle empty images
//   }

//   return (
//     <div className="slider-container" style={{ position: 'relative', width: '100%', margin: '0' }}>
//       {/* <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1} of ${images.length}`}
//         style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
//       /> */}
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1} of ${images.length}`}
//         style={{ width: '95%', height: 'auto', borderRadius: '10px' }}
//       />
//       <button
//         onClick={goToPrevious}
//         aria-label="Previous slide"
//         style={{
//           position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)',
//           background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', borderRadius: '50%',
//           cursor: 'pointer', fontSize: '1.5rem', padding: '10px'
//         }}
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={goToNext}
//         aria-label="Next slide"
//         style={{
//           position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
//           background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', borderRadius: '50%',
//           cursor: 'pointer', fontSize: '1.5rem', padding: '10px'
//         }}
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// ImageSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   interval: PropTypes.number,
// };

// export default ImageSlider;


import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Styles/ImageSlider.css';

const ImageSlider = ({ images, interval = 6000 }) => {
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
    <div className="slider-container" style={{ position: 'relative', width: '100%', margin: '0' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1} of ${images.length}`}
        style={{ width: '97%', height: 'auto', borderRadius: '10px' }}
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