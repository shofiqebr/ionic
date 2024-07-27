// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import slider1 from '../../assets/slider1.webp'
import slider2 from '../../assets/slider2.webp'
import slider3 from '../../assets/slider3.webp'
import slider4 from '../../assets/slider4.webp'
import cloud from '../../assets/cloud.svg'
import wordpress from '../../assets/wordpress.svg'
import dedicated from '../../assets/dedicated.svg'
import cloudBAckup from '../../assets/cloudBAckup.svg'
import { FaArrowRightLong } from 'react-icons/fa6';
// import ModalBody from '../../shared/modalBody/ModalBody';
// import { RxCross2 } from 'react-icons/rx';


const RealSolution = () => {
    return (
            <div>
                    {/* <h1 className='text-4xl font-semibold py-5 pt-20 px-14'>Real solutions for real web pros</h1>
                    <p className='text-xl pb-5 px-14'>That’s code for IONIC.</p> */}



                <div className='lg:px-[50px] lg:py-10  flex flex-col  gap-10 xl:flex-row pt-20'>





{/* ----------carousel section-------------- */}



<section className='xl:w-[50%] px-3'>

<Swiper
slidesPerView={1}
spaceBetween={30}
keyboard={{
enabled: true,
}}
pagination={{
clickable: true,
}}
navigation={false}
modules={[Keyboard, Pagination, Navigation]}
className="mySwiper"
>
<SwiperSlide>
<div className='md:flex '>
<img  className='xl:w-[600px] md:w-1/2  xl:rounded-3xl md:rounded-l-3xl rounded-3xl xl:relative' src={slider1} alt="" />
<div className='xl:absolute absolute md:static z-50 xl:bottom-16 bottom-2


md:pt-60  md:bg-white xl:bg-transparent xl:text-white text-white md:text-black xl:pl-20 pl-10 rounded-r-3xl'>
<p className='md:text-lg md:font-bold'>DEPLOY NOW</p>
<p className='md:text-2xl text-lg font-bold md:py-3'> Deploy your code on fast, reliable hosting without leaving GitHub</p>
<p className='flex items-center gap-5 text-lg'>Try it for free <FaArrowRightLong /></p>
</div>

</div>

</SwiperSlide>
<SwiperSlide>
<div className='md:flex '>
<img  className='xl:w-[600px] md:w-1/2  xl:rounded-3xl md:rounded-l-3xl rounded-3xl xl:relative' src={slider2} alt="" />
<div className='xl:absolute absolute md:static z-50 xl:bottom-16 bottom-2


md:pt-60  md:bg-white xl:bg-transparent xl:text-white text-white md:text-black xl:pl-20 pl-10 rounded-r-3xl'>
<p className='md:text-lg md:font-bold'>DEPLOY NOW</p>
<p className='md:text-2xl text-lg font-bold md:py-3'> Deploy your code on fast, reliable hosting without leaving GitHub</p>
<p className='flex items-center gap-5 text-lg'>Try it for free <FaArrowRightLong /></p>
</div>

</div>

</SwiperSlide>
<SwiperSlide>
<div className='md:flex '>
<img  className='xl:w-[600px] md:w-1/2  xl:rounded-3xl md:rounded-l-3xl rounded-3xl xl:relative' src={slider3} alt="" />
<div className='xl:absolute absolute md:static z-50 xl:bottom-16 bottom-2


md:pt-60  md:bg-white xl:bg-transparent xl:text-white text-white md:text-black xl:pl-20 pl-10 rounded-r-3xl'>
<p className='md:text-lg md:font-bold'>DEPLOY NOW</p>
<p className='md:text-2xl text-lg font-bold md:py-3'> Deploy your code on fast, reliable hosting without leaving GitHub</p>
<p className='flex items-center gap-5 text-lg'>Try it for free <FaArrowRightLong /></p>
</div>

</div>

</SwiperSlide>
<SwiperSlide>
<div className='md:flex '>
<img  className='xl:w-[600px] md:w-1/2  xl:rounded-3xl md:rounded-l-3xl rounded-3xl xl:relative' src={slider4} alt="" />
<div className='xl:absolute absolute md:static z-50 xl:bottom-16 bottom-2


md:pt-60  md:bg-white xl:bg-transparent xl:text-white text-white md:text-black xl:pl-20 pl-10 rounded-r-3xl'>
<p className='md:text-lg md:font-bold'>DEPLOY NOW</p>
<p className='md:text-2xl text-lg font-bold md:py-3'> Deploy your code on fast, reliable hosting without leaving GitHub</p>
<p className='flex items-center gap-5 text-lg'>Try it for free <FaArrowRightLong /></p>
</div>

</div>

</SwiperSlide>



</Swiper>
</section>

{/* ---------------------card part------------------------ */}

<section className='xl:w-[50%] grid-cols-1 grid md:grid-cols-2 px-3 pt-5 md:pt-0 gap-5 '>
    <div className='bg-white rounded-xl p-5'>
        <img className='w-20' src={cloud} alt="" />
        <p className='text-[#2E4360] font-semibold'>ক্লাউড স্টোরেজ</p>
        <h1 className='font-bold text-xl'>Easily scale resources to meet any demand</h1>

    
        
    </div>
    <div className='bg-white rounded-xl p-5'>
        <img className='w-20' src={wordpress} alt="" />
        <p className='text-[#2E4360] font-semibold'>ওয়েবসাইট ডেভেলপমেন্ট</p>
        <h1 className='font-bold text-xl'>Take control with customizable updates</h1>

       
       


    </div>
    <div className='bg-white rounded-xl p-5'>
        <img className='w-20' src={dedicated} alt="" />
        <p className='text-[#2E4360] font-semibold'>সফটওয়্যার ডেভেলপমেন্ট</p>
        <h1 className='font-bold text-xl'>Get optimal performance on enterprise hardware</h1>

      
            


    </div>
    <div className='bg-white rounded-xl p-5'>
        <img className='w-20' src={cloudBAckup} alt="" />
        <p className='text-[#2E4360] font-semibold'>হোস্টিং ও ডোমেন</p>
        <h1 className='font-bold text-xl'>Protect your work and your server</h1>

       
          

    </div>
   
</section>
</div>
            </div>


        
    );
};

export default RealSolution;