import { RxCross2 } from 'react-icons/rx';
import bgImg from '../../../assets/erp/healthManagement/Healthcare-ERP-system.jpg'
import ModalBody from '../../../shared/modalBody/ModalBody';
import { FaCheck } from 'react-icons/fa';
import bannerImg from '../../../assets/backImgBanner.webp'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { useState } from 'react';

const HealthManagement = () => {
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);
    const [isVisible4, setIsVisible4] = useState(true);
    const [isVisible5, setIsVisible5] = useState(true);

    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible);
    // };
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

                                    স্বাস্থ্যসেবা পরিচালনায় ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সিস্টেম
                                </p>
                                <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">
                                    বিশ্বের সেরা ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়্যারের সাথে আরও ভাল অপারেশন এবং ফলাফলের জন্য বিশেষায়িত স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার।
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
                <section className="h-[560px] pt-44 flex bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className='w-1/2 h-full'></div>
                    <div className='text-white pt-0 w-1/2'>
                        <h1 className='text-3xl pb-5'>স্বাস্থ্যসেবা পরিচালনায় ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সিস্টেম
                        </h1>
                        <p className='text-xl'>বিশ্বের সেরা ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়্যারের সাথে আরও ভাল অপারেশন এবং ফলাফলের জন্য বিশেষায়িত স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার।</p>
                    </div>

                </section>

            </div>

            <section className='grid grid-cols-2 gap-10 py-5 text-[#777777] text-xl px-[405px]'>
                <div>
                    <h1 className='text-4xl font-bold'>"আইওনিক ইআরপি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার এর সাথে দক্ষতার সাথে আপনার স্বাস্থ্যসেবা ব্যবসা উন্নত করুন</h1>
                    <p >প্রায় সমস্ত স্বাস্থ্যসেবা ব্যবসা একটি সাধারণ চ্যালেঞ্জের মুখোমুখি হয় এবং তা হল রোগী এবং কর্মচারী ব্যবস্থাপনা খুঁজে পাওয়া। এর জন্য, স্বাস্থ্যসেবা ব্যবসার এমন একটি হাতিয়ার প্রয়োজন যা মানসম্পন্ন পরিষেবা প্রদানের জন্য তাদের ক্ষমতা বাড়াতে পারে।</p>
                    <p className='py-3'> এটি স্বাস্থ্যসেবা শিল্পের জন্য বিশ্বের সেরা ইআরপি সফ্টওয়্যারের সাথে ঘটতে পারে।</p>
                    <p>হেলথকেয়ার ইআরপি সলিউশন বিভিন্ন বৈশিষ্ট্যের সাথে সজ্জিত যেমন অ্যাপয়েন্টমেন্টের সময় নির্ধারণ, ভাইটাল ক্যাপচার করা, ওষুধ পরিচালনা এবং আরও অনেক কিছু।</p>
                    <p className='py-3'>আপনার উত্পাদনশীলতা সর্বাধিক করার সুযোগটি ব্যবহার করুন, আপনার প্রচেষ্টাকে ছোট করুন এবং সবকিছু আপনার নিয়ন্ত্রণে রাখুন।</p>
                    <p>“আইওনিক ইআরপি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার আপনাকে স্বাস্থ্যসেবা শিল্পের জন্য বিশ্বের শীর্ষস্থানীয় ERP সফ্টওয়্যার দিয়ে আপনার স্বাস্থ্যসেবা ব্যবসায় রূপান্তর করতে সহায়তা করবে।
                    </p>
                    <p className='py-3'>এটি ব্যবসায়িক প্রক্রিয়াগুলিকে স্বয়ংক্রিয় করবে, সময় এবং সেইসাথে সংস্থানগুলি সাশ্রয় করবে এবং আপনার ব্যবসায়িক কর্মক্ষমতা উন্নত করবে৷</p>
                </div>






                    {/* ----------toggle effect--------- */}

                    <div>
            {/* First Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible1(!isVisible1)}
                        className="mr-2 flex justify-center items-center gap-2"
                    >
                        {isVisible1 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">দ্রুত কেস ব্যবস্থাপনা</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible1 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                        প্রতিদিন স্বাস্থ্যসেবার লোড দ্রুতগতিতে বাড়ছে। এই সমস্যা সমাধানের
                        প্রয়াসে, স্বাস্থ্যসেবা অনুশীলনকারীদের দ্রুত রোগীর নিবন্ধন রেকর্ড
                        করতে সক্ষম হওয়া উচিত। স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার আপনাকে
                        রোগীদের যোগ করতে, ডাক্তারের সময়সূচী পরিচালনা করতে,
                        অ্যাপয়েন্টমেন্ট বুক করতে এবং আরও অনেক কিছু করতে দেয়।
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible2(!isVisible2)}
                        className="mr-2 flex justify-center items-center gap-2"
                    >
                        {isVisible2 ? <FaCircleMinus /> : <FaCirclePlus />}
                        <h1 className="text-xl font-bold">প্রেসক্রিপশন এবং অনুস্মারক</h1>
                    </button>
                </div>
                {/* Paragraph with transition */}
                <div
                    className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ${
                        isVisible2 ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <p className="py-2">
                        প্রতিদিন স্বাস্থ্যসেবার লোড দ্রুতগতিতে বাড়ছে। এই সমস্যা সমাধানের
                        প্রয়াসে, স্বাস্থ্যসেবা অনুশীলনকারীদের দ্রুত রোগীর নিবন্ধন রেকর্ড
                        করতে সক্ষম হওয়া উচিত। স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার আপনাকে
                        রোগীদের যোগ করতে, ডাক্তারের সময়সূচী পরিচালনা করতে,
                        অ্যাপয়েন্টমেন্ট বুক করতে এবং আরও অনেক কিছু করতে দেয়।
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible3(!isVisible3)}
                        className="mr-2 flex justify-center items-center gap-2"
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
                        প্রতিদিন স্বাস্থ্যসেবার লোড দ্রুতগতিতে বাড়ছে। এই সমস্যা সমাধানের
                        প্রয়াসে, স্বাস্থ্যসেবা অনুশীলনকারীদের দ্রুত রোগীর নিবন্ধন রেকর্ড
                        করতে সক্ষম হওয়া উচিত। স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার আপনাকে
                        রোগীদের যোগ করতে, ডাক্তারের সময়সূচী পরিচালনা করতে,
                        অ্যাপয়েন্টমেন্ট বুক করতে এবং আরও অনেক কিছু করতে দেয়।
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible3(!isVisible3)}
                        className="mr-2 flex justify-center items-center gap-2"
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
                        প্রতিদিন স্বাস্থ্যসেবার লোড দ্রুতগতিতে বাড়ছে। এই সমস্যা সমাধানের
                        প্রয়াসে, স্বাস্থ্যসেবা অনুশীলনকারীদের দ্রুত রোগীর নিবন্ধন রেকর্ড
                        করতে সক্ষম হওয়া উচিত। স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার আপনাকে
                        রোগীদের যোগ করতে, ডাক্তারের সময়সূচী পরিচালনা করতে,
                        অ্যাপয়েন্টমেন্ট বুক করতে এবং আরও অনেক কিছু করতে দেয়।
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center">
                    <button
                        onClick={() => setIsVisible3(!isVisible3)}
                        className="mr-2 flex justify-center items-center gap-2"
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
                        প্রতিদিন স্বাস্থ্যসেবার লোড দ্রুতগতিতে বাড়ছে। এই সমস্যা সমাধানের
                        প্রয়াসে, স্বাস্থ্যসেবা অনুশীলনকারীদের দ্রুত রোগীর নিবন্ধন রেকর্ড
                        করতে সক্ষম হওয়া উচিত। স্বাস্থ্যসেবা ইআরপি সফ্টওয়্যার আপনাকে
                        রোগীদের যোগ করতে, ডাক্তারের সময়সূচী পরিচালনা করতে,
                        অ্যাপয়েন্টমেন্ট বুক করতে এবং আরও অনেক কিছু করতে দেয়।
                    </p>
                </div>
            </div>
        </div>
            </section>





        </div>
    );
};

export default HealthManagement;