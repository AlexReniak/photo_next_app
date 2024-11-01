'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  let height = 0;

  useEffect(() => {
    height = window.innerHeight;
    const handleResize = () => {
      if (window.innerWidth > 868) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousedown', handleClickOutside, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
    <nav ref={navRef} className='sticky top-0 z-10 bg-darkTwo shadow-md'>
      <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link
              className='text-4xl transition duration-500 hover:text-emerald-500'
              href='/'
            >
              JR
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                href='/'
                className='mx-4 text-xl text-white border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
              >
                Home
              </Link>
              <Link
                href='/archive'
                className='mx-4 text-xl text-white border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
              >
                Archive
              </Link>
              <Link
                href='/contact'
                className='mx-4 text-xl text-white border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500'
              aria-expanded={isOpen}
            >
              <span className='sr-only'>
                {isOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {isOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            href='/'
            className='text-white hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            href='/archive'
            className='text-white hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => setIsOpen(!isOpen)}
          >
            Archive
          </Link>
          <Link
            href='/contact'
            className='text-white hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium'
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
