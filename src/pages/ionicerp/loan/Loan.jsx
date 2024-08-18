import { RxCross2 } from 'react-icons/rx';
import bgImg1 from '../../../assets/erp/loan/Loan-Management.png'
import ModalBody from '../../../shared/modalBody/ModalBody';
import { FaCheck, FaLaptop, FaWhatsapp } from 'react-icons/fa';
import bannerImg from '../../../assets/backImgBanner.webp'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { useState } from 'react';
import LoanCard from './LoanCard';


const Loan = () => {
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);
    const [isVisible4, setIsVisible4] = useState(true);
    const [isVisible5, setIsVisible5] = useState(true);

 
    return (
        <div className=' bg-[#F3F3F3] px-[405]'>

            <div className=' max-w-[1920px] mx-auto'>



                <div className="lg:pt-36 lg:pb-10 pb-5 pt-32 banner ">
                    <section className="flex  md:flex-row flex-col   childBanner md:mx-3 " >


                        {/* ------------banner left--------------- */}

                        <div className="tempWidth bg-[#0B2A63] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-l-xl  bannerWidth  md:w-[60%] pl-2 z-20  ">



                            <div className="lg:pl-10 pt-10  z-10 bannerTExt">


                                <div className="bannerHeading pl-5 lg:pl-5 ">

                                    <p className="pb-3 font-bold text-[#FFAA00] text-lg  lg:mt-[135px] xl:mt-[70px]  ">আইওনিক কর্পোরেশন</p>
                                    <h1 className="lg:text-[40px] xl:text-[32px]  text-3xl md:text-[34px] font-semibold pb-3 heading1 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
                                    <h1 className="lg:text-[29px] xl:text-[23px] text-[22px] md:text-[25px] font-semibold lg:pb-8 heading2">ডিজিটাল আইটি সলিউশন প্রতিষ্ঠান</h1>

                                </div>


                                <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">

                                ঋণ ব্যবস্থাপনায় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ইআরপি সিস্টেম
                                </p>
                                <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">
                                এই ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ঋণের ধরন, ঋণ নিরাপত্তা ব্যবস্থাপনা, ঋণের আবেদন, বিতরণ এবং পরিশোধ ব্যবস্থাপনা, ঋণের সুদ এবং জরিমানা গণনা, সাধারণ লেজার পোস্টিং, চালান ছাড় ব্যবস্থাপনা বৈশিষ্ট্যগুলি কভার করে।
                                </p>





                                <button className="pl-5 xl:pt-[125px] 2xl:pt-[100px] lg:pt-[260px]  md:pt-[120px] leftOnurodh" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 xl:my-3 px-5">
                                    অনুরোধ করুন
                                </p>
                                </button>


                                <dialog id="my_modal_5" className="rounded-xl">
                                    <div className=" lg:w-[400px]  bg-[#808285] rounded-xl relative">
                                        <ModalBody />



                                        <div className="modal-action ">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className=" absolute top-2 right-2"><RxCross2 className='text-white text-2xl' /></button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>



                            </div>
                            <div className="relative z-10 lg:w-[500px] md:hidden lg:block  ">
                                <img className="lg:pt-[10px] lg:ml-5 md:ml-[50px] lg:absolute lg:bottom-0 lg:right-0 bannerImg " src={bannerImg} alt="" />
                            </div>
                        </div>







                        {/* ------------banner right--------------- */}





                        <div className="lg:w-[40%] md:w-[40%] bg-[#001B41] text-white p-5 lg:pl-10 px-5 md:rounded-r-xl z-20 bannerRight">
                            <p className=" font-semibold text-[#FFAA00] pb-3 text-lg">আমাদের সেবা সমূহ</p>

                            <p className="text-[15px]  text-justify ">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য। যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।</p>

                            <h1 className="xl:text-[19px] lg:text-[18px] text-xl font-semibold pb-5 pt-5 text-[#FFAA00] bannerRightH2">আমাদের বিজনেস সলিউশন সেবা সমূহ</h1>


                            <div className="grid grid-cols-2 gap-1 ">

                                <section>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px] ">ইআরপি সফটওয়্যার</p>
                                    </div>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">ওয়েব ডেভেলপ</p>
                                    </div>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">সফটওয়্যার ডেভেলপ</p>
                                    </div>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">মোবাইল অ্যাপস</p>
                                    </div>
                                </section>


                                <section>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">ক্লাউড স্টোরেজ</p>
                                    </div>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">ডোমেন ও হোস্টিং</p>
                                    </div>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">এসএমএস সার্ভিস </p>
                                    </div>
                                    <div className="flex items-center gap-4 pb-5">
                                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                                        <p className="text-[12px] 2xl:text-[13.8px]">ইকমার্স সলিউশন </p>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <p className="text-[20px] font-medium text-[#FFAA00] text-center">
                                    আপনার প্রয়োজন কোনটি?
                                </p>
                            </div>






                            {/* ---------------------modal start---------------------------- */}


                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <div className="text-center 2xl:mt-5">
                                <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px]  font-extrabold my-3 px-5 ">
                                    অনুরোধ করুন
                                </p>
                                </button>
                            </div>




                            <dialog id="my_modal_5" className="">
                                <div className=" lg:w-[1000px]  bg-[#808285] relative">
                                    <ModalBody />



                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className=" absolute top-2 right-2"><RxCross2 className='text-white text-2xl' /></button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>







                            {/* ---------------------modal end---------------------------- */}



                        </div>
                    </section>
                </div>
            </div>










            <div className='px-[405px] pt-32'>
                <section className="h-[560px] pt-44 flex bg-cover" style={{ backgroundImage: `url(${bgImg1})` }}>
                    <div className='w-1/2 h-full'></div>
                    <div className='text-white pt-0 w-1/2'>
                        <h1 className='text-3xl pb-5'>ঋণ ব্যবস্থাপনায় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ইআরপি সিস্টেম
                        </h1>
                        <p className='text-xl'>এই ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ঋণের ধরন, ঋণ নিরাপত্তা ব্যবস্থাপনা, ঋণের আবেদন, বিতরণ এবং পরিশোধ ব্যবস্থাপনা, ঋণের সুদ এবং জরিমানা গণনা, সাধারণ লেজার পোস্টিং, চালান ছাড় ব্যবস্থাপনা বৈশিষ্ট্যগুলি কভার করে।</p>
                    </div>

                </section>

            </div>

            <section className='grid grid-cols-2 gap-10 py-5 text-[#777777] text-xl px-[405px]'>
                <div>
                    <h1 className='text-4xl font-bold text-black pb-5'>ঋণ ব্যবস্থাপনা স্বয়ংক্রিয় ব্যবসায়িক প্রক্রিয়া, সময় বাঁচান এবং কর্মক্ষমতা উন্নত করুন</h1>
                    <p >এই “আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার ঋণের ধরন, ঋণ নিরাপত্তা ব্যবস্থাপনা, ঋণের আবেদন, বিতরণ এবং পরিশোধ ব্যবস্থাপনা, ঋণের সুদ এবং জরিমানা গণনা, সাধারণ লেজার পোস্টিং, চালান ছাড় ব্যবস্থাপনা বৈশিষ্ট্যগুলি কভার করে।</p>
                    <p className='py-5'> “আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার-এ লোন ম্যানেজমেন্ট মডিউল আপনাকে সরাসরি লোন অ্যাপ্লিকেশান থেকে লোন ক্লোজার পর্যন্ত আপনার লোন পরিচালনা করতে সাহায্য করে। আপনি বিতরণ, পরিশোধ, নিরাপত্তা প্রতিশ্রুতি এবং আনপ্লেজিং, ঋণের সুদ সংগ্রহ এবং আরও অনেক কিছু ট্র্যাক করতে পারেন।</p>
                    <p>ঐতিহ্যগতভাবে, একটি ঋণ পেতে গ্রাহকদের প্রচুর কাগজপত্র করতে হবে এবং একাধিকবার ঋণদাতাদের অফিসে যেতে হবে। ডিজিটাল ঋণ এটি পরিবর্তন করছে। এখন ঋণদাতারা ঋণগ্রহীতাদের অভিজ্ঞতা উন্নত করতে পুরো প্রক্রিয়াটিকে ডিজিটালাইজ করছে।</p>
                    <p className='py-5'>“আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার-এর লোন ম্যানেজমেন্ট মডিউলটি লোন অ্যাপ্লিকেশান, সিকিউরিটি ম্যানেজমেন্ট, অনুমোদন, বিতরণ, সুদ এবং জরিমানা গণনা, পরিশোধ ইত্যাদির বৈশিষ্ট্যগুলি অফার করে।</p>
                   

                    <div className='flex justify-center items-center gap-5'>
                        <button className='flex justify-center items-center gap-5 bg-black text-white p-1 rounded px-5'> <FaWhatsapp />হোয়াটস অ্যাপ চ্যাট</button>
                        <button className='flex justify-center items-center gap-5 bg-[#FF0000] text-white p-1 rounded px-5'><FaLaptop />ডেমোর জন্য অনুরোধ করুন</button>
                    </div>
                </div>






                    {/* ----------toggle effect--------- */}

                    <div>
            {/* First Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible1(!isVisible1)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible1 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">ঋণদাতা এবং ঋণগ্রহীতা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible1 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    ঋণদাতা হলো সেই টাকা যিনি ঋণ হিসেবে পরিশোধ করছেন। উদাহরণস্বরূপ, একটি ব্যাঙ্ক যেটি একজন বাড়ির ক্রেতাকে ঋণ দিচ্ছে। ঋণগ্রহীতা সেই ব্যক্তি যিনি অর্থ গ্রহণ করছেন। উদাহরণস্বরূপ, একজন ব্যক্তি একটি বাড়ি কিনছেন বা ব্যবসা সম্প্রসারণের জন্য অর্থ ধার করছেন।
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible2(!isVisible2)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible2 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">সুরক্ষিত এবং অসুরক্ষিত ঋণ</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible2 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    ঋণগ্রহীতার মালিকানাধীন সম্পদের বিপরীতে প্রদত্ত ঋণ একটি সুরক্ষিত ঋণ। উদাহরণস্বরূপ, সোনার মতো মূল্যবান ধাতু বা বাড়ির মতো একটি স্থাবর সম্পদের বিপরীতে দেওয়া ঋণ একটি সুরক্ষিত ঋণ। এই ধরনের সম্পদকে জামানত বলা হয়। ঋণগ্রহীতা ঋণ পরিশোধে ব্যর্থ হলে, ঋণদাতা সম্পদটি তরল করে দেবে এবং ঋণের পরিমাণ পুনরুদ্ধার করবে। যদি ঋণগ্রহীতার কোনো সম্পদের প্রতিশ্রুতি না রেখে ঋণ মঞ্জুর করা হয় যা একটি অনিরাপদ ঋণ হিসাবে পরিচিত। অনিরাপদ ঋণ নিরাপদ ঋণের তুলনায় সহজাতভাবে ঝুঁকিপূর্ণ।
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible3(!isVisible3)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible3 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">প্রতিশ্রুতি এবং অনিচ্ছাকৃত</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible3 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    যখন জামানতের বিপরীতে একটি ঋণ সুরক্ষিত করা হয়, তখন জামানত বন্ধক রাখা হয়। যখন প্রতিশ্রুতি দেওয়া হয়, সম্পদটি ঋণগ্রহীতার মালিকানাধীন হতে থাকে, কিন্তু ঋণদাতা ঋণ পরিশোধ করতে ব্যর্থ হলে সম্পদটি লিকুইডেট করার এবং ঋণের পরিমাণ পুনরুদ্ধারের আইনি অধিকার থাকবে।
                    </p>
                </div>
            </div>

               {/* 4th Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible4(!isVisible4)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible4 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">চুল কাটার শতাংশ এবং ঋণ থেকে মূল্যের অনুপাত</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible4 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    লোন-টু-ভ্যালু রেশিও প্রতিশ্রুতিবদ্ধ জামানতের মূল্যের সাথে ঋণের পরিমাণের অনুপাত প্রকাশ করে। একটি ঋণ নিরাপত্তা ঘাটতি ট্রিগার করা হবে যদি এটি কোনো ঋণের জন্য নির্দিষ্ট মূল্যের নিচে পড়ে।
                    </p>
                    <p className='py-2'>
                    চুল কাটার শতাংশ হল লোন সিকিউরিটির বাজার মূল্য এবং সেই লোনের জামানত হিসাবে ব্যবহার করার সময় সেই লোন সিকিউরিটির জন্য নির্ধারিত মূল্যের মধ্যে শতাংশের পার্থক্য।
                    </p>
                </div>
            </div>

             {/* 5th Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible5(!isVisible5)}
                        className="mr-2 flex justify-center items-center gap-2 text-black"
                    >
                        {isVisible5 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">মেয়াদী ঋণ এবং চাহিদা ঋণ</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible5 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    একটি মেয়াদী ঋণের সাথে একটি নির্দিষ্ট পরিশোধের সময়সূচী সংযুক্ত থাকে। যেহেতু একটি চাহিদা ঋণের এই ধরনের কোনো পরিশোধের সময়সূচী নেই এবং ঋণদাতা তার প্রয়োজন অনুযায়ী পরিশোধের জন্য জিজ্ঞাসা করতে পারেন।
                    </p>
                </div>
            </div>
        </div>
            </section>


          <LoanCard/>


        </div>
    );
};

export default Loan;