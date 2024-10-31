'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronDown } from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = [
  {
    name: 'Nature',
    images: [
      '/images/mountain-image.jpg',
      '/images/snow-valley.jpg',
      '/images/hills-image.jpg',
    ],
  },
  {
    name: 'Architecture',
    images: [
      '/images/forest-image.jpg',
      '/images/fog-on-lake.jpg',
      '/images/beach-sunset.jpg',
    ],
  },
];

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel();
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
    return () => embla.off('select', onSelect);
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <>
      <div className='flex flex-col mt-[93px]'>
        <div className='flex xl:hidden relative text-left'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='dropdown'
                className='w-full justify-between border-b-2 border-emerald-500 rounded-none'
                size='lg'
              >
                <span className='flex items-center'>
                  {selectedCategory.name}
                </span>
                <ChevronDown className='h-4 w-4 opacity-50' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-full bg-zinc-950 border border-emerald-500'>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.name}
                  className='w-full bg-zinc-950 text-white hover:bg-emerald-500 justify-center'
                  onSelect={() => setSelectedCategory(category)}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='flex flex-1 overflow-hidden'>
          <aside className='hidden xl:block w-64 bg-darkTwo'>
            <ScrollArea className='h-full'>
              <nav className='p-4 space-y-2'>
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={
                      selectedCategory.name === category.name ? 'dark' : 'ghost'
                    }
                    size='lg'
                    className='w-full justify-start text-lg'
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.name}
                  </Button>
                ))}
              </nav>
            </ScrollArea>
          </aside>
          <main className='flex-1 p-6 overflow-auto bg-darkOne max-w-[1600px] mx-auto'>
            <div className='flex justify-between'>
              <h1 className='text-3xl font-bold mb-4'>Archive</h1>
              <Link href='/'>
                <Button variant='green' size='lg'>
                  <FaArrowLeft className='inline' /> Go Home
                </Button>
              </Link>
            </div>
            <h3 className='text-2xl font-bold mb-4'>
              {selectedCategory.name} Collection
            </h3>
            <div className='relative mb-4'>
              <div className='overflow-hidden' ref={mainViewportRef}>
                <div className='flex'>
                  {selectedCategory.images.map((src, index) => (
                    <div
                      className='flex-[0_0_100%] min-w-0 relative'
                      key={index}
                    >
                      <Image
                        src={src}
                        alt={`${selectedCategory.name} image ${index + 1}`}
                        width={1920}
                        height={1280}
                        className='w-full object-cover aspect-[3/2]'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant='light'
                size='icon'
                className='absolute top-1/2 left-4 -translate-y-1/2'
                onClick={scrollPrev}
                aria-label='Previous image'
              >
                <FaArrowLeft className='h-8 w-8' />
              </Button>
              <Button
                variant='light'
                size='icon'
                className='absolute top-1/2 right-4 -translate-y-1/2'
                onClick={scrollNext}
                aria-label='Next image'
              >
                <FaArrowRight className='h-8 w-8' />
              </Button>
            </div>
            <div className='mt-4'>
              <div className='overflow-hidden' ref={thumbViewportRef}>
                <div className='flex gap-2'>
                  {selectedCategory.images.map((src, index) => (
                    <button
                      key={index}
                      className={`relative flex-[0_0_20%] cursor-pointer ${
                        index === selectedIndex
                          ? 'border-2 border-emerald-500'
                          : ''
                      }`}
                      onClick={() => onThumbClick(index)}
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        width={160}
                        height={90}
                        className='w-full object-cover aspect-[16/9]'
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
