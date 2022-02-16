const Nav = () => {
  return (
    <nav className=' py-8 flex justify-center sm:pt-20 lg:pt-24 '>
      <div className=' flex items-center justify-between basis-full lg:basis-5/6 '>
        <a href='#' className='h-8 w-8 bg-rs-red block'></a>
        <a href='#' className=' text-rs-white text-lg font-body font-semibold '>
          Work <span className=' text-rs-grey ml-3'>&gt;</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
