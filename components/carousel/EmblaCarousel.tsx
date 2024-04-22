/** @format */

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const names = ["John", "Steven", "Kevin", "Emily", "Haewook"];
  const descriptions = [
    "Sed vestibulum, arcu vitae consequat molestie, ligula ipsum viverra mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc vitae arcu ultricies sollicitud.",
    "Sed vestibulum, arcu vitae consequat molestie, ligula ipsum viverra mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc vitae arcu ultricies sollicitud.",
    "Sed vestibulum, arcu vitae consequat molestie, ligula ipsum viverra mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc vitae arcu ultricies sollicitud.",
    "Sed vestibulum, arcu vitae consequat molestie, ligula ipsum viverra mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc vitae arcu ultricies sollicitud.",
    "Sed vestibulum, arcu vitae consequat molestie, ligula ipsum viverra mi, sit amet suscipit odio quam sit amet sapien. Donec vel nunc vitae arcu ultricies sollicitud.",
  ];
  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide embla__class-names' key={index}>
              <div className='embla__card'>
                <img
                  className='embla__slide__img'
                  src={`/images/slideimg/profile${index + 1}.jpg`}
                  alt={`Slide ${index + 1}`}
                />
                <div className='embla__card__content'>
                  <p className='embla__slide__index'> {names[index]}</p>
                  <p className='embla__slide__description'>
                    {descriptions[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
