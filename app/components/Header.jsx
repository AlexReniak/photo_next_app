const Header = () => {
  return (
    <header className='h-screen bg-hero-image bg-center bg-cover relative'>
      <div className='h-screen bg-opacity-50 bg-black'></div>
      <div className='w-2/5 h-1/5 backdrop-blur-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
        <h1 className='text-5xl text-white '>JR Photography</h1>
      </div>
    </header>
  );
};

export default Header;
