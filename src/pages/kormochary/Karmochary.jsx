import { RxCross2 } from "react-icons/rx";
import ModalBody from "../../shared/modalBody/ModalBody";
import { FaCheck } from "react-icons/fa";
import bannerImg from '../../assets/backImgBanner.webp'
import ProductDetailsKarmochary from "./ProductDetailsKarmochary";
import Module from "../ionicerp/homeErp/module/Module";
import TechnologyErp from "../ionicerp/technologyErp/TechnologyErp";
import SoftwarePrice from "../ionicerp/softwarePrice/SoftwarePrice";
import Services from "./Services";


const Karmochary = () => {
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
                    বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল কর্মচারি পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে এলো আইওনিক কর্পোরেশন পাইথন দিয়ে তৈরি "কর্মচারি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার। যে কোন ব্যবসার কর্মচারি পরিচালনার জন্য একাউন্টিং সিস্টেম সহ 20+ এর অধিক মডিউল বিদ্যমান আছে।
                    </p>
                    <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">
                    পাইথন প্রোগ্রামিং ভাষা হল শক্তিশালী এবং দ্রুত অন্যদের সাথে ভাল মিশতে পারে, সর্বত্র চলে বন্ধুত্বপূর্ণ এবং শেখা সহজ, ওপেন সোর্স। টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার- তৈরিতে ব্যবহার করা হয়েছে "পাইথন প্রোগ্রামিং ভাষা"। পাইথন সফটওয়্যার ফাউন্ডেশন হল পাইথন প্রোগ্রামিং ভাষার সাথে সম্পর্কিত ওপেন সোর্স প্রযুক্তির অগ্রগতির জন্য নিবেদিত একটি সংস্থা।
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



        <ProductDetailsKarmochary/>
        <Module heading={'টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার এর মডিউল সমূহ'} subheading={'আইওনিক কর্পোরেশন এর পেশাদারদের একটি বিশেষজ্ঞ দল রয়েছে যারা যুগ যুগ ধরে সমাধান তৈরি করছে এবং স্থানীয় এবং বিদেশী উভয় শিল্পের ক্লায়েন্টদের বিশ্বাস এবং নির্ভর যোগ্যতার সাথে উল্লেখ যোগ্য ভাবে বৃদ্ধি পাচ্ছে।'}/>

        <TechnologyErp heading={'আপনার প্রিয় টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার সাথে সংযোগ করুন'} subheading={'টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার এর বিল্ট-ইন ইন্টিগ্রেশনের একটি হোস্ট রয়েছে যা আপনার ব্যবসাকে দ্রুত টেক অফ করতে সাহায্য করে'}/>


        <SoftwarePrice heading={'টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার মূল্য পরিকল্পনা'} subheading={'*** টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।'} cardheading={'আপনার ব্যবসায়িক প্রক্রিয়া সহজ করতে এবং কাজের প্রবাহে দক্ষতা বাড়ানোর জন্য টোটাল সলুয়েশন “কর্মচারি” ম্যানেজমেন্ট সফটওয়্যার এর একটি প্যাকেজ দিয়ে আপনার যাত্রা শুরু করুন।'} />

        <Services/>
    </div>
    );
};

export default Karmochary;