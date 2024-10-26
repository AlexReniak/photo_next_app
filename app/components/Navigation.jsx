'use client';

import { useEffect } from 'react';

const Navigation = () => {
  let height = 0;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    height = window.innerHeight;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > height - 103) {
      document.querySelector('nav').classList.add('border-emerald-500');
      document.querySelector('nav').classList.remove('border-transparent');
    } else {
      document.querySelector('nav').classList.remove('border-emerald-500');
      document.querySelector('nav').classList.add('border-transparent');
    }
  };

  return (
    <nav className='bg-zinc-950 fixed top-0 z-10 inset-x-0 border-b-2 border-transparent transition-all duration-500'>
      <div className='container mx-auto flex justify-between content-center py-4'>
        <div className='justify-items-start content-center'>
          <a
            className='text-4xl transition duration-500 hover:text-emerald-500'
            href='/'
          >
            JR
          </a>
        </div>
        <div className='p-4 hidden md:flex flex-row justify-between'>
          <a
            href='#home'
            className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
          >
            Home
          </a>
          <a
            href='#about'
            className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
          >
            About
          </a>
          <a
            href='#contact'
            className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
