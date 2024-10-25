'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const Gallery = () => {
  const width = window.innerWidth * 0.8;
  const height = window.innerHeight * 0.8;

  return (
    <section className='container my-12 mx-auto'>
      <h2 className='text-3xl my-8 text-center'>Gallery</h2>
      <div className='flex flex-col justify-content'>
        <div className='mx-auto'>
          <Image
            src={'/images/mountain-image.jpg'}
            width={width}
            height={height}
            alt={'mountain overlooking lake in forest'}
          />
        </div>
        <div className='mt-4 ml-24'>
          <p className='text-xl inline'>Browse the entire catalog</p>
          <Link
            href='/archive'
            className='w-40 mt-4 ml-6 py-2 text-center bg-emerald-500 rounded-md hover:bg-emerald-600 duration-300 text-lg inline-block'
          >
            Browse All
            <FaArrowRight className='inline ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
