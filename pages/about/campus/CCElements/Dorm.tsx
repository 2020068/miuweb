/** @format */

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};

const Dormitory: React.FC<PropType> = (props) => {
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
    "Dormitory which has 8 floor including basement, person who study at MIU or work in here can live.",
    "Basement has kitchen , washing machine and car parking for MIU students.",
    "Girls floors are 1st, 3th to 5th.",
    "Boys floor is 1st to 2nd.",
    "6th and 7th floors are for employees.",
  ];
  if (!slides) {
    return <div>No slides found</div>;
  }

  return (
    <div className="cc">
      <div className="cc__viewport" ref={emblaRef}>
        <div className="cc__container">
          {slides.map((Dorm, index) => (
            <div className="cc__slide cc__class-names" key={index}>
              <div className="cc__content">
                <p className="description">{descriptions[index]}</p>
              </div>
              <img
                className="cc__slide__img"
                src={`/aboutPage/campus/Dorm/Dorm${index + 1}.jpg`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dormitory;
