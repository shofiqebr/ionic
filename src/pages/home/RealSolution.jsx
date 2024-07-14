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
import { FaArrowRightLong } from 'react-icons/fa6';


const RealSolution = () => {
    return (
        <div className='lg:p-[50px]  flex flex-col md:flex-row pt-20'>




            {/* ----------carousel section-------------- */}



            <section className='md:w-[50%] px-3'>
          
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
           <img  className='lg:w-[600px] w-full rounded-3xl relative' src={slider1} alt="" />
           <div className='absolute z-50 md:bottom-16 bottom-10 text-white pl-20'>
            <p className='md:text-lg font-bold'>DEPLOY NOW</p>
            <p className='md:text-2xl text-lg font-bold py-3'> Deploy your code on fast, reliable <br /> hosting without leaving GitHub</p>
            <p className='flex items-center gap-5 text-lg'>Try it for free <FaArrowRightLong /></p>
           </div>
       </SwiperSlide>
        <SwiperSlide>
            <img  className='lg:w-[600px] w-full rounded-3xl' src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='lg:w-[600px] w-full rounded-3xl' src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  className='lg:w-[600px] w-full rounded-3xl' src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
            </section>

   {/* ---------------------card part------------------------ */}

            <section className='md:w-[50%] grid grid-cols-2 px-3 pt-5 md:pt-0 gap-5 '>
                <div className='bg-white rounded-xl p-5'>
                    <img className='md:w-20' src={cloud} alt="" />
                    <p className='text-[#2E4360] font-semibold'>CLOUD SERVERS</p>
                    <h1 className='font-bold text-xl'>Easily scale resources to meet any demand</h1>

                    <p className='flex items-center gap-2 pt-12 text-lg font-semibold'>Learn more <FaArrowRightLong /> </p>

                </div>
                <div className='bg-white rounded-xl p-5'>
                    <img className='md:w-20' src={cloud} alt="" />
                    <p className='text-[#2E4360] font-semibold'>CLOUD SERVERS</p>
                    <h1 className='font-bold text-xl'>Easily scale resources to meet any demand</h1>

                    <p className='flex items-center gap-2 pt-12 text-lg font-semibold'>Learn more <FaArrowRightLong /> </p>

                </div>
                <div className='bg-white rounded-xl p-5'>
                    <img className='md:w-20' src={cloud} alt="" />
                    <p className='text-[#2E4360] font-semibold'>CLOUD SERVERS</p>
                    <h1 className='font-bold text-xl'>Easily scale resources to meet any demand</h1>

                    <p className='flex items-center gap-2 pt-12 text-lg font-semibold'>Learn more <FaArrowRightLong /> </p>

                </div>
                <div className='bg-white rounded-xl p-5'>
                    <img className='md:w-20' src={cloud} alt="" />
                    <p className='text-[#2E4360] font-semibold'>CLOUD SERVERS</p>
                    <h1 className='font-bold text-xl'>Easily scale resources to meet any demand</h1>

                    <p className='flex items-center gap-2 pt-12 text-lg font-semibold'>Learn more <FaArrowRightLong /> </p>

                </div>
               
            </section>
        </div>
    );
};

export default RealSolution;