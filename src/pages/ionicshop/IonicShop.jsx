import { RxCross2 } from "react-icons/rx";
import ModalBody from "../../shared/modalBody/ModalBody";
import { FaCheck } from "react-icons/fa";
import bannerImg from '../../assets/backImgBanner.webp'
import Sectors from "./Sectors";
import Shop360 from "./Shop360";
import TechnologyShop from "./TechnologyShop";
import PriceManagementShop from "./PriceManagementShop";
import { Element } from "react-scroll";


const IonicShop = () => {
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
                                    ক্লাউড ভিত্তিক অনলাইন আইওনিক সপ সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক সপ একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।
                                </p>
                                <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">

                                    আইওনিক সপ- স্মার্টফোন, ট্যাব, আইফোন, আইপ্যাড, ম্যাক এবং পিসিতে এমনকি অনলাইন বা অফলাইনেও কাজ করে। আপনার ফাইন্যান্স, অ্যাকাউন্টিং, সেলস, ইনভয়েস, ইনভেন্টরি, ক্লায়েন্ট রিলেশনস, এইচআরএম, অপারেশন এবং আরও অনেক কিছু পরিচালনা করার জন্য অল-ইন-ওয়ান ক্লাউড ইআরপি সলিউশন মানেই আইওনিক সপ
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



            <Sectors/>
            <Shop360 title={'আইওনিক সপ ক্লাউড ভিত্তিক দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর 360 '}/>
            <TechnologyShop/>

        
            <PriceManagementShop title={'আইওনিক সপ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার মূল্য পরিকল্পনা'} subtitle={' আপনার ব্যবসায়িক প্রক্রিয়া সহজ করতে এবং কাজের প্রবাহে দক্ষতা বাড়ানোর জন্য আইওনিক সপ একাউন্টিং ও বিজনেস এর একটি প্যাকেজ দিয়ে আপনার যাত্রা শুরু করুন।'}/>
            
        </div>
    );
};

export default IonicShop;