import React, { useState, useEffect } from "react";
import cover1 from '../assets/cover4.jpg';
import cover2 from '../assets/cover2.jpg';
import cover3 from  '../assets/cover2.jpg'
import '../index.css';
const slides = [
  cover1,
  cover2,
  cover3
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length; //= 4

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full mt-24 relative"  style={{
            backgroundColor: "var(--nav-bg)",
            color: "var(--nav-text)",
          }}> 
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === current ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          {index === current && (
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-100 md:h-96 object-cover"
            />
          )}
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
