import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageSliderSource  from '../components/ImageSliderSource'
import CoverImage1 from "../assets/cover4.jpg";
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
        <ImageSliderSource  src = {CoverImage1} />
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