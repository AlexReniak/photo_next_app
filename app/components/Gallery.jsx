import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Carousel from './Carousel';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  return (
    <section className='container my-12 mx-auto'>
      <h2 className='text-3xl my-8 text-center'>Gallery</h2>
      <div className='flex flex-col justify-content'>
        <div className='mx-auto relative'>
          <Carousel />
        </div>
        <div className='mt-4 ml-24 mr-4'>
          <p className='text-xl inline'>Browse the entire catalog</p>
          <Link href='/archive'>
            <Button variant='green' size='lg' className='ml-4'>
              <FaArrowRight className='inline' />
              View Archive
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
