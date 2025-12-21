import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CoverImage1 from "../assets/cover4.jpg";
import CoverImage2 from "../assets/cover2.jpg";
import CoverImage3 from '../assets/cover3.jpg';
function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark" className="mt-24">
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={CoverImage3}
          alt="First slide"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CoverImage1}
          alt="Second slide"
        />
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={CoverImage2}
          alt="Second slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ImageSlider;