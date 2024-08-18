import { RxCross2 } from 'react-icons/rx';
import bgImg2 from '../../../assets/erp/agriculture/Agriculture-ERP-Systems.jpg'
import ModalBody from '../../../shared/modalBody/ModalBody';
import { FaCheck, FaLaptop, FaWhatsapp } from 'react-icons/fa';
import bannerImg from '../../../assets/backImgBanner.webp'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { useState } from 'react';
import ionicerp from '../../../assets/erp/agriculture/ionicerp.png'
import AgricultureCard from './AgricultureCard';



const Agriculture = () => {
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

                                এগ্রিকালচার ব্যবস্থাপনায় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ইআরপি সিস্টেম
                                </p>
                                <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">
                                সেরা ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সলিউশনের সাথে ডিজিটাল রূপান্তরের মাধ্যমে কৃষির চেহারা পরিবর্তন করা।
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
                <section className="h-[560px] pt-44 flex bg-cover" style={{ backgroundImage: `url(${bgImg2})` }}>
                    <div className='w-1/2 h-full flex justify-end items-center pb-40'>
                    <img className='w-60' src={ionicerp} alt="" />
                    </div>
                    <div className='text-black pt-0 w-1/2'>
                        <h1 className='text-3xl pb-5'>ঋণ এগ্রিকালচার ব্যবস্থাপনায় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার ইআরপি সিস্টেম
                        </h1>
                        <p className='text-xl'>সেরা ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সলিউশনের সাথে ডিজিটাল রূপান্তরের মাধ্যমে কৃষির চেহারা পরিবর্তন করা।</p>
                    </div>

                </section>

            </div>

            <section className='grid grid-cols-2 gap-10 py-5 text-[#777777] text-xl px-[405px]'>
                <div>
                    <h1 className='text-4xl font-bold text-black pb-5'>স্বয়ংক্রিয় ব্যবসায়িক প্রক্রিয়া, সময় বাঁচান এবং কর্মক্ষমতা উন্নত করুন</h1>
                    <p >“আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার দিয়ে আপনার কৃষি ব্যবসা পরিচালনা করুন যাতে শস্য চক্র, রোগ, সার এবং আরও অনেক কিছু রেকর্ডিং এবং ট্র্যাক করার মতো বৈশিষ্ট্য রয়েছে।</p>
                    <p className='py-5'>কল্পনা করুন, আপনার কৃষি ব্যবসা ঝামেলামুক্ত চলছে। এটি বিশ্বের সেরা ইআরপি সফ্টওয়্যারের সাথে ঘটতে পারে। একবিংশ শতাব্দীতে কৃষি ব্যবসা বিভিন্ন অপারেশনাল চ্যালেঞ্জের সম্মুখীন হয় যেমন ইনভেন্টরির ট্র্যাক রাখা, মৌসুমি ফসলের পরিকল্পনা করা এবং অ্যাকাউন্টিং।</p>
                    <p>অপারেশনাল চ্যালেঞ্জ অপ্টিমাইজ করার জন্য, অনেক কৃষি নির্মাতারা এখন কৃষি “আইওনিক ইআরপি” বিজনেস ম্যানেজমেন্ট সফটওয়্যার ব্যবহার করে।</p>
                   
                    <p className='py-5'>আপনার উত্পাদনশীলতা সর্বাধিক করার সুযোগটি ব্যবহার করুন, আপনার অপচয় হ্রাস করুন এবং সবকিছু আপনার নিয়ন্ত্রণে রাখুন।</p>

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
                        <h1 className="text-xl font-bold">ফসল ব্যবস্থাপনা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible1 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    একটি সফল শস্যচক্র অর্জনের জন্য বেশিরভাগ ফসলকে অবশ্যই আদর্শ প্রক্রিয়া অনুসরণ করতে হবে। অতএব, কৃষি ইআরপি সফ্টওয়্যার ব্যবহার করে প্রতিটি ফসলের সাথে সংযুক্ত মানক প্রক্রিয়া অনুসারে আপনার ফসলের চক্রের পরিকল্পনা করতে পারে এবং সমস্ত সম্পর্কিত কাজের ট্র্যাক রাখতে পারে।
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
                        <h1 className="text-xl font-bold">যন্ত্রপাতি ব্যবস্থাপনা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible2 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    ট্রাক্টর, হার্ভেস্টার, স্প্রিংকলারের মতো কৃষি সরঞ্জামগুলি কৃষিকাজকে সহজ করতে কার্যকর এবং কায়িক বা পশু শ্রম প্রতিস্থাপন করেছে। এই মেশিনগুলো কাজের গতি ও দক্ষতা বাড়াতে উপযোগী। কৃষি ইআরপি সফ্টওয়্যার মূল্যবান অন্তর্দৃষ্টি সহ সহজেই এই যন্ত্রপাতি পরিচালনা করতে পারে।
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
                        <h1 className="text-xl font-bold">ট্রেসেবিলিটি</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible3 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    কৃষি ইআরপি সফ্টওয়্যার ট্রেসেবিলিটি প্রদান করতে সাহায্য করে, যাতে আপনি আপনার কৃষি ব্যবসার ছোটখাটো বিবরণ যেমন আবহাওয়ার বিবরণ, ক্ষেত্রের বিবরণ ইত্যাদি ট্রেস করতে পারেন।
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
                        <h1 className="text-xl font-bold">ব্যবসার অন্তর্দৃষ্টি উন্নত করুন</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible4 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    কৃষি ইআরপি সফ্টওয়্যারটি বিস্তারিত ব্যবসার অন্তর্দৃষ্টি দেখতে একাধিক ড্যাশবোর্ড ফর্ম্যাট প্রদর্শন করে সুসংগঠিত নির্দিষ্ট প্রয়োজনের উপর নির্ভর করে দ্রুত প্রাসঙ্গিক প্রতিবেদন তৈরি করতে দেয়।
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
                        <h1 className="text-xl font-bold">অনন্য কার্যকারিতা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible5 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                    এগ্রিকালচার ইআরপি সফটওয়্যারের অপরিবর্তনীয় বৈশিষ্ট্য হল এটি কার্যকারিতার ক্ষেত্রে একটি অনন্য অভিজ্ঞতা প্রদান করে। অনন্য কার্যকারিতা যেমন ফাইন্যান্স এবং অ্যাকাউন্টিং, এইচআর এবং বেতন, লজিস্টিকস, বাজেট, ইত্যাদি সবই একটি আশ্চর্যজনক সফ্টওয়্যারে আসবে।
                    </p>
                </div>
            </div>
        </div>
            </section>


          <AgricultureCard/>


        </div>
    );
};

export default Agriculture;