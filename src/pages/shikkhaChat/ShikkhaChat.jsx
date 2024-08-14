// import shikkhaImg from '../../assets/shihkhachart-250x100.png'
import facilities from '../../assets/facilities.png'
import Features from './Features';
import ShikkhaChat360 from './ShikkhaChat360';
import ModalBody from '../../shared/modalBody/ModalBody';
import { RxCross2 } from 'react-icons/rx';
import { FaCheck } from 'react-icons/fa';
import bannerImg from '../../assets/backImgBanner.webp';
import './shikkha.css'
// import Card from '../home/Card';



const ShikkhaChat = () => {
    return (

        <div className=' bg-[#F3F3F3]'>
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
                        বাংলাদেশে প্রথমবার শিক্ষা চ্যাট সফটওয়্যার দিয়ে আপনার এডুকেশন ব্যবসার টোটাল সলুয়েশন জন্য পাইথন দ্বারা তৈরি একমাত্র শিক্ষা চ্যাট ইআরপি সফ্টওয়ার উপস্থাপন করলো IONIC Corporation.
                        </p>
                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">
                        শিক্ষা চ্যাট ইআরপি- স্মার্টফোন, ট্যাব, আইফোন, আইপ্যাড, ম্যাক এবং পিসিতে এমনকি অনলাইন বা অফলাইনেও কাজ করে।
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




            <section >
                <ul className='flex md:flex-row flex-col gap-5 justify-center items-center  xl:text-base  md:text-xs mx-auto shikkhaButton'>
                    <li className='p-2 px-5  text-center bg-[#FFAA00] font-bold rounded-full text-[#001B41] '>school  website</li>
                    <li className='p-2 px-5   text-center bg-[#FFAA00] font-bold rounded-full text-[#001B41] '>Admin/Teacher  Login</li>
                    <li className='p-2 px-5  text-center bg-[#FFAA00] font-bold rounded-full text-[#001B41] '>Student/Parent  Login</li>
                    <li className='p-2 px-5  text-center bg-[#FFAA00] font-bold rounded-full text-[#001B41] '>Android  Demo </li>
                </ul>
            </section>
            <div className='flex justify-center items-center pt-10'>
                <img className='xl:w-[1200px] xl:-ml-[65px] shikkhaImg' src={facilities} alt="" />
            </div>



            <article className=''>
                <section className='flex flex-col justify-center items-center gap-2 mt-10 pb-5'>
                    <h1 className=' font-semibold text-xl text-center '>শিক্ষা চ্যাট ম্যানেজমেন্ট ডেডিকেটেড সফটওয়্যার কেন ব্যবহার করবেন?</h1>
                    <div className='w-10 h-[3px] bg-[#F8001F]'></div>
                </section>
                <section className=' text-[#828282] xl:text-lg 
                 px-2 text-justify artical'>
                শিক্ষা চ্যাট ব্যবহার শুরু করার আগে ১ থেকে ১২ তম শ্রেণির সাধারণ স্কুলের একটি সাধারণ পরিস্থিতি বিবেচনা করুন, প্রতিটি শ্রেণিতে বিভাগ এ, বিভাগ বি এর মতো বিভাগ রয়েছে। বিভিন্ন শ্রেণীর জন্য বিভিন্ন বিষয় থাকবে যেমন কিছু বিষয় তত্ত্বীয় এবং কিছু ব্যবহারিক। এই বিষয় এবং ক্লাস ব্যবহার করে পরীক্ষা তৈরি করা হয়। শিক্ষার্থীরা নতুন ভর্তির মাধ্যমে ক্লাসে প্রবেশ করে বা পূর্ববর্তী শ্রেণীতে সফলভাবে উত্তীর্ণ হওয়ার পর তাদের পূর্ববর্তী শ্রেণী দ্বারা উন্নীত হয়। ছাত্র থাকাকালীন আমরা ছাত্রদের কাছ থেকে ফি নেব এবং মাসিক বা এককালীন ভিত্তিতে সেগুলি সংগ্রহ করব। আমরা আমাদের শিক্ষার্থীদের উপস্থিতি রেকর্ড করতে চাই। আমাদের স্কুল ছাত্রদের পরিবহন সুবিধা প্রদান করা হতে পারে. আমাদের স্কুলে শিক্ষার্থীদের জন্য লাইব্রেরি আছে বইয়ের তালিকা বজায় রাখতে হবে। আমাদের স্কুলে হোস্টেল আছে এবং আমাদের ছাত্রদের জন্য হোস্টেল সুবিধা প্রদান করছে। স্পষ্টতই আমাদের স্কুলে শিক্ষার্থীদের পড়াতে ও পরিচালনা করার জন্য শিক্ষক রয়েছে। আমরা আমাদের শিক্ষক, ছাত্র এবং অভিভাবকদের সাথে যোগাযোগ করতে চাই। আমরা আমাদের স্কুলে করা সমস্ত খরচ যেমন বিবিধ বিল, বেতন প্রদান ইত্যাদি রেকর্ড করতে চাই। সবকিছুর পরে আমরা আমাদের স্কুলের উপর ভিত্তি করে বিভিন্ন প্রতিবেদন বিশ্লেষণ করতে চাই। আপনি যদি একটি প্রশিক্ষণ কেন্দ্রের জন্য আইওনিক এডুকেশন ব্যবহার করেন তবে আপনি দুটি ক্লাসে শিক্ষার্থীদের ভর্তি করতে চান, এর জন্য আপনাকে বহু শ্রেণির বৈশিষ্ট্য ব্যবহার করা উচিত যেখানে আপনি একই সাথে দুটি ক্লাসে একজন শিক্ষার্থীকে ভর্তি করতে পারেন। উপরে ছাড়াও আমরা শিক্ষক, হিসাবরক্ষক, গ্রন্থাগারিক, ছাত্র এবং তাদের অভিভাবকদের মতো অন্যান্য ব্যবহারকারীদের আমাদের স্মার্ট স্কুলে অ্যাক্সেস দিতে চাই। এই স্মার্ট স্কুলের জন্য 8টি অন্তর্নির্মিত ব্যবহারকারীর ভূমিকা রয়েছে- সুপার অ্যাডমিন, অ্যাডমিন, শিক্ষক, হিসাবরক্ষক, গ্রন্থাগারিক, অভ্যর্থনাকারী, ছাত্র এবং অভিভাবক। কার্যত আপনি কর্মীদের সদস্যদের জন্য সীমাহীন সংখ্যক ব্যবহারকারীর ভূমিকা তৈরি করতে পারেন।
                </section>
            </article>

            <Features/>
            
            <ShikkhaChat360/>

            

            
            {/* <Card/> */}
        </div>
        </div>
    );
};

export default ShikkhaChat;