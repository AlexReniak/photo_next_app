const Header = () => {
  return (
    <header className='h-screen bg-hero-image bg-center bg-cover relative'>
      <div className='h-screen bg-opacity-50 bg-black'></div>
      <div className='w-[240px] h-[120px] sm:w-[360px] sm:h-[160px] md:w-[400px] md:h-[180px] backdrop-blur-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-white'>
          JR Photography
        </h1>
      </div>
    </header>
  );
};

export default Header;
