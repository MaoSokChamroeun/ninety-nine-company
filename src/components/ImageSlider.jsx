import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CoverImage1 from "../assets/cover4.jpg";
import CoverImage2 from "../assets/cover2.jpg";

function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark" className="mt-24">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CoverImage1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CoverImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;