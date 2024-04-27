/** @format */

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const MIS: React.FC<PropType> = (props) => {
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
    "MIS west side.",
    "First floor of the MIS.",
    "Office of the MIS managers.",
    "Principal's office.",
    "It is elementary school.",
  ];
  return (
    <div className='cc'>
      <div className='cc__viewport' ref={emblaRef}>
        <div className='cc__container'>
          {slides.map((MIS, index) => (
            <div className='cc__slide cc__class-names' key={index}>
              <div className='cc__content'>
                <p className='description'>{descriptions[index]}</p>
              </div>
              <img
                className='cc__slide__img'
                src={`/aboutPage/campus/MIS/MIS${index + 1}.jpg`}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MIS;
