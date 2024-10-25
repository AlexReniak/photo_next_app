import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

const Archive = () => {
  return (
    <section>
      <h2>Archive</h2>
      <Link
        href='/'
        className='w-40 py-2 text-center bg-emerald-500 rounded-md hover:bg-emerald-600 duration-300 text-lg inline-block'
      >
        <FaArrowLeft className='inline mr-2' />
        Go Home
      </Link>
    </section>
  );
};

export default Archive;
