import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-darkTwo z-10 inset-x-0'>
      <div className='container mx-auto flex justify-center content-center py-4'>
        <div className='p-4 hidden md:flex flex-row justify-between w-[800px]'>
          <Link
            href='/'
            className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
          >
            Home
          </Link>
          <Link
            href='/archive'
            className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
          >
            Archive
          </Link>
          <Link
            href='/contact'
            className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
