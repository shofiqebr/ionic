import { RiCloseCircleLine } from 'react-icons/ri';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import fixedImg from '../../assets/fixedImg.webp'; 

const Test = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='fixed w-full bg-[#F3F3F3] z-10 pr-10'>
      <div className='relative'>
        {isVisible && (
          <div className='absolute top-72 2xl:right-[430px] xl:right-20 lg:right-0 hidden lg:block'>
            <div className='absolute -top-8 -right-5 cursor-pointer bg-black rounded-full text-[#FFAA00]' onClick={() => setIsVisible(false)}>
              <RiCloseCircleLine className='text-2xl' />
            </div>
            <div className='relative'>
              <section className='bg-gradient-to-b from-[#1574C4] to-[#001B42] w-44 rounded-2xl h-96'>
                <div className='text-white'>
                  <div className='relative'>
                    <img className='-mt-3 absolute -top-10' src={fixedImg} alt="" />
                  </div>
                  <h1 className='bg-[#FFAA00] text-black absolute top-[135px] -left-[20px] rounded-lg p-1 font-bold w-44 text-center'>
                    Only at IONIC
                  </h1>
                  <div className='pl-3'>

                  <p className='pt-44 font-bold text-xl pb-4'>Personal <br /> consultant</p>
                  <p className='pb-4 text-sm font-bold'>Your own direct line to <br />tailored support.</p>
                  <a className='flex gap-3 text-xl font-bold items-center' href="#">Learn more <FaArrowRightLong /></a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
