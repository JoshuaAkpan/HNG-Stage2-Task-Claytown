import React from 'react';
import '../assets/styles/custom.css'
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md"

const Hero = () => {
  return (
    <div className='bg-custom-image h-screen w-full  flex flex-col m-auto items-center justify-center text-center py-20'>

      <h1 className='text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl p-[10px] font-semibold mb-20 '>Stylish, functional pottery for modern living</h1>

      <p className='text-white w-[211px] h-[96px] pb-[109px] mb-16'>Discover handmade clay home decor items crafted by the finest artisans from around the world</p>

      <Link to="/products">
      <button className='bg-white flex justify-center items-center py-[18px] px-[24px] gap-3 rounded-[48px] opacity-[66&] w-[176px]' >
        <p className='text-sm sm:text-sm text-[black]'>Shop now</p>
        

        <div className=' bg-white'>
          <MdOutlineShoppingCart />
        </div>
      </button>
      </Link>

    </div>
  );
};

export default Hero;
