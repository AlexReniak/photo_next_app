'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import imageArray from '../../image-carousel.js';

const ArchiveCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <div className='w-4/5 mx-auto px-4 py-8'>
      <div className='relative'>
        <div className='overflow-hidden' ref={mainViewportRef}>
          <div className='flex'>
            {imageArray.map((image, index) => (
              <div className='relative flex-[0_0_100%]' key={index}>
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  width={600}
                  height={400}
                  className='w-full object-cover aspect-[3/2]'
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className='absolute top-1/2 left-4 -translate-y-1/2'
          onClick={() => embla?.scrollPrev()}
        >
          <FaArrowLeft className='h-8 w-8' />
        </button>
        <button
          className='absolute top-1/2 right-4 -translate-y-1/2'
          onClick={() => embla?.scrollNext()}
        >
          <FaArrowRight className='h-8 w-8' />
        </button>
      </div>
      <div className='mt-4'>
        <div className='overflow-hidden' ref={thumbViewportRef}>
          <div className='flex gap-2'>
            {imageArray.map((image, index) => (
              <button
                key={index}
                className={`relative flex-[0_0_20%] cursor-pointer ${
                  index === selectedIndex ? 'border-2 border-emerald-500' : ''
                }`}
                onClick={() => onThumbClick(index)}
              >
                <Image
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  width={120}
                  height={80}
                  className='w-full object-cover aspect-[3/2]'
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCarousel;
