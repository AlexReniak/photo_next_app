import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import Carousel from '../components/Carousel';

const Archive = () => {
  return (
    <main className='container mx-auto'>
      <header className='text-center'>
        <h1 className='text-3xl'>Archive</h1>
        <p className='text-xl mt-4'>
          Browse through the entire archive of photographs
        </p>
      </header>
      <section className='grid grid-cols-8 mx-auto justify-center my-8'>
        <div className='w-full col-span-6'>
          <Carousel />
        </div>
        <div className='col-span-2 justify-self-start'>
          <h3 className='text-2xl'>August 2022 Collection</h3>
        </div>
      </section>
      <Link
        href='/'
        className='w-40 py-2 text-center bg-emerald-500 rounded-md hover:bg-emerald-600 duration-300 text-lg inline-block'
      >
        <FaArrowLeft className='inline mr-2' />
        Go Home
      </Link>
    </main>
  );
};

export default Archive;
