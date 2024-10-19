const Navigation = () => {
  return (
    <nav className='container mx-auto flex justify-between content-center py-4 bg-transparent fixed top-0 z-10 inset-x-0'>
      <div className='justify-items-start'>
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
          href='#contactus'
          className='mx-4 text-xl border-b-2 border-transparent hover:border-b-2 hover:border-emerald-500 transition duration-500'
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
