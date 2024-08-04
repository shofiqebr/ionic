// import { RiCloseCircleLine } from 'react-icons/ri';
// import { useState } from 'react';
// import { FaArrowRightLong } from 'react-icons/fa6';
import fixedImg from '../../assets/new logo/care-call-2.png'; 
// import ModalBody from '../../shared/modalBody/ModalBody';
// import { RxCross2 } from 'react-icons/rx';

const Test = () => {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='fixed w-full bg-[#F3F3F3] z-50'>
      <div className='relative'>
        
          <div className='absolute top-72 test hidden lg:block'>
            {/* <div className='absolute -top-8 -right-5 cursor-pointer bg-black rounded-full text-[#FFAA00]' onClick={() => setIsVisible(false)}>
              <RiCloseCircleLine className='text-2xl' />
            </div> */}
            <div className='relative  '>
              <section className='bg-gradient-to-b from-[#1574C4] to-[#001B42] testSection w-44 rounded-2xl h- px-1 pb-2'>
                <div className='text-white'>
                  <div className='relative'>
                    <img className='-mt-3 absolute -top-10' src={fixedImg} alt="" />
                  </div>
                  <h1 className= 'orangeSquare bg-[#FFAA00] text-black absolute 2xl:top-[139px] xl:top-[98px] lg:top-[80px] -left-[12px]  pt-[4px] font-bold 2xl:w-44 xl:w-32 text-center '>
                   রিসোর্স প্ল্যানিং করতে
                  </h1>
                  <div className='px-1'>

                  <p className='2xl:pt-44 lg:pt-28  xl:font-semibold text-sm xl:pb-4 lg:pb-2 xl:text-xs text-center'>যখন আপনার ব্যবসার জন্য এন্টারপ্রাইজ রিসোর্স প্ল্যানিং সফ্টওয়্যার বাস্তবায়নের কথা চিন্তায় আসে?</p>
                  <p className='xl:pb-4 text-xs 2xl:font-medium xl:font-semibold text-center xl:text-xs'>আপনার ব্যবসা এন্টারপ্রাইজ রিসোর্স প্ল্যানিং প্রস্তুত করতে।</p>
                 




                
<section className="flex flex-col justify-center items-center" > 
            <div className=' 2xl:text-lg  font-bold '>আমাকে কল করুন
            
          {/* <FaArrowRightLong className='text-5xl' /> */}
            </div>
          <div className='text-[22px] font-extrabold number  text-[#ffbd3a]'>

          01958442200
          </div>
</section>














                  </div>
                </div>
              </section>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Test;
