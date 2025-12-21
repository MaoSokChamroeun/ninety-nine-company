import React from 'react'

const ImageSliderSource = ({src , alt}) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{ height: "830px", objectFit: "cover" }}
    />
  )
}

export default ImageSliderSource