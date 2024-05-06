// ImageCarousel component

import React from "react";

interface ImageCarouselProps {
  image: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ image }) => {
  return (
    <div className="h-1/2 relative">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Image 0"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 h-full bg-black opacity-70"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
