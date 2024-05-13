/** @format */

import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};

const MBuilding: React.FC<PropType> = (props) => {
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
    "M Building center which has 4 floors including basement.",
    "First floor we have almost whole office here thats academic affairs, general affairs, financial, planning affairs and marketing etc...",
    "Second floor is the section of Language Education Institute.",
    "In the basement wqe have music education department.",
    "Music studio and the free usable room for students.",
  ];
  if (!slides) {
    return <div>No slides found</div>;
  }

  return (
    <div className="cc">
      <div className="cc__viewport" ref={emblaRef}>
        <div className="cc__container">
          {slides.map((MBuilding, index) => (
            <div className="cc__slide cc__class-names" key={index}>
              <div className="cc__content">
                <p className="description">{descriptions[index]}</p>
              </div>
              <img
                className="cc__slide__img"
                src={`/aboutPage/campus/MBuilding/MBuilding${index + 1}.jpg`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MBuilding;
