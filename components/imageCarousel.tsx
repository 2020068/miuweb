// ImageCarousel component

import React from "react";

interface ImageCarouselProps {
  image: string;
  textContent: string;
  textdesc: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  image,
  textContent,
  textdesc,
}) => {
  return (
    <div className="h-1/2 absolute inset-0">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Image 0"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className=" flex justify-start pl-11 items-center align-center absolute inset-0 z-20 text-6xl left-8 text-white">
          {" "}
          {textContent}
        </div>
        <div className="mt-32 flex justify-start pl-11 items-center align-center absolute inset-0 z-20 text-2xl left-8 text-white">
          {" "}
          {textdesc}
        </div>
        <div className="absolute inset-0 h-full bg-black opacity-70"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
