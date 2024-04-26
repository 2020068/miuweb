/** @format */

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const DBuiling: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  useEffect(() => {
    if (emblaApi) {
      const autoplayInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(autoplayInterval);
    }
  }, [emblaApi]);

  const descriptions = [
    "D Building which is usually university students study.",
    "Gilgal study cafe.",
    "Gilgal coffee shop in first floor of the D Building, and costs cheapest. ",
    "Main hall of the D Building, we can.",
    "Library's first floor in the D Building, also we have another library in the basement.",
  ];
  return (
    <div className='cc'>
      <div className='cc__viewport' ref={emblaRef}>
        <div className='cc__container'>
          {slides.map((DBuilding, index) => (
            <div className='cc__slide cc__class-names' key={index}>
              <div className='cc__content'>
                <p className='description'>{descriptions[index]}</p>
              </div>
              <img
                className='cc__slide__img'
                src={`/aboutPage/campus/DBuilding/DBuilding${index + 1}.jpg`}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DBuiling;
