import { FaCheck } from "react-icons/fa";
import ModalBody from "../../../shared/modalBody/ModalBody";
import ManufactureTab from "../manufacturing/tabs/ManufactureTab";
import bannerImg from '../../../assets/backImgBanner.webp'
import { RxCross2 } from "react-icons/rx";
import TradingCharacter from "./TradingCharacter";


const TradingErp = () => {
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
                    ট্রেডিং ব্যবসা জন্য আইওনিক কর্পোরেশন বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল ব্যবসা পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে এলো পাইথন দিয়ে তৈরি "আইওনিক ইআরপি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার
                    </p>
                    <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">
                    আপনি যদি ট্রেডিং ব্যবসা জন্য ট্রেডিং এবং সংশ্লিষ্ট পণ্য ট্রেডিং ব্যবসায় থাকেন তবে সমস্ত জটিল ক্রিয়াকলাপ পরিচালনার জন্য আপনার ওয়ান স্টপ সমাধান হতে পারে "আইওনিক ইআরপি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার। বিতরণ থেকে রপ্তানি পর্যন্ত ট্রেডিং ব্যবসা সাথে কাজ করার আমাদের অভিজ্ঞতা আপনাকে অপারেশনগুলিকে স্ট্রিমলাইন করতে, দক্ষতা উন্নত করতে এবং সামগ্রিক উত্পাদনশীলতা বাড়াতে সহায়তা করতে পারে।
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


        <TradingCharacter/>
        


        <ManufactureTab heading={'ট্রেডিং ব্যবসা জন্য ``আইওনিক ইআরপি`` টোটাল সলুয়েশন ইআরপি সফ্টওয়ার এর অন্যান্য মডিউল'} subHeading={'প্রতিটি ট্রেডিং ব্যবসার মূল লক্ষ্য হল খরচ কমানো এবং আপনার ব্যবসার প্রক্রিয়াগুলিকে স্বয়ংক্রিয় করার সাহায্যে উত্পাদনশীলতা এবং দক্ষতা বৃদ্ধি করা। কিন্তু প্রথমে, আপনাকে বুঝতে হবে যে ট্রেডিং ব্যবসা জন্য ইআরপি নির্দিষ্ট বিভিন্ন দিক প্রয়োজন।'}/>
    
    
    </div>
    );
};

export default TradingErp;