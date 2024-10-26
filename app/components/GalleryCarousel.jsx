'use client';

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import { DotButton, useDotButton } from './CarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const GalleryCarousel = ({ slides, options, slideHeight, slideWidth }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  let imageWidth = slideWidth ? slideWidth : window.innerWidth * 0.8;
  let imageHeight = slideHeight ? slideHeight : window.innerHeight * 0.8;

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide, index) => (
            <div className='embla__slide' key={index}>
              <Image
                className={`embla__slide__number mx-auto w-[${imageWidth}px] h-[${imageHeight}px]`}
                src={slide.src}
                alt={slide.alt}
                width={imageWidth}
                height={imageHeight}
              />
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
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
