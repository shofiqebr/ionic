import { FaCheck } from "react-icons/fa";
import bannerImg from '../../assets/backImgBanner.webp'
import ModalBody from "../../shared/modalBody/ModalBody";
import { RxCross2 } from "react-icons/rx";
// import { FaArrowRightLong } from "react-icons/fa6";
import ionicLOgo from '../../assets/new logo/ionic-erp-logo.png'
import kormochary from '../../assets/new logo/karmochary-logo.png'
import shikkha from '../../assets/new logo/Shikkha-chart-logo.png'
import ionicHealth from '../../assets/new logo/ionic-health-logo.png'
import go from '../../assets/new logo/go-account-logo.png'
import shakti from '../../assets/new logo/bikroy-shakti-logo.png'


import restoraImg from '../../assets/new logo/my-restura-logo.png'
import shopImg from '../../assets/new logo/ionic-shop-logo.png'
import myBhara from '../../assets/new logo/my-bhara-logo.png'
import pharma from '../../assets/new logo/ionic-pharma-logo.png'
import transport from '../../assets/new logo/ionic-transport-logo.png'
import travel from '../../assets/new logo/ionic-travel-logo.png'
import ocean from '../../assets/new logo/ionic-ocean-logo.png'



import ionic from '../../assets/new logo/ionic-logo.png'
import ionicCorporationLogo from '../../assets/new logo/ionic-corporation-logo.png'
import tailor from '../../assets/new logo/my-tailor-logo.png'
import { Link } from "react-router-dom";




const Banner = () => {
    return (
        <div className="lg:pt-40 lg:pb-10 pt-32 banner ">
            <section className="flex xl:mx-16 md:flex-row flex-col  mx-3  " >


                <div className="tempWidth bg-[#0B2A63] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl  bannerWidth  md:w-[60%] pl-2 z-10  ">


             
                    <div className="lg:pl-10 pt-10  z-10 bannerTExt">
                       
                        
                    <div className="bannerHeading pl-5 lg:pl-5 ">

<p className="pb-3 font-bold text-[#FFAA00] text-lg lg:mt-[135px]  ">আইওনিক কর্পোরেশন</p>
<h1 className="lg:text-[26px] text-2xl font-semibold pb-3 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
<h1 className="lg:text-[19px] text-xl font-semibold lg:pb-8 ">ডিজিটাল আইটি সলিউশন প্রতিষ্ঠান</h1>

</div>


                        <p className="lg:text-[15px] xl:text-[16px] lg:py-5 text-justify pr-3 md:w-[350px] lg:w-auto p-5  ">

                            {/* Starting at $4/month */}
                                বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল
                                ক্যাটাগরির টোটাল সলুয়েশন সফটওয়্যার
                                যেমন- স্কুল , হাসপাতাল, ফার্মা, রেস্তোরাঁ,
                                সেলুন, ট্রাভেল এজেন্সি, মেরামতের দোকান,
                                দর্জির দোকান, ভাড়া ব্যবসা, ইন্ডাস্টিয়াল
                                ইআরপি ও একাউন্ট ব্যবস্থাপনা  সহ
                                যে কোন ব্যবসা পরিচালনার অটোমেশন
                                সফটওয়্যার তৈরি ও সেবাদানকারী প্রতিষ্ঠান
                                -“আইওনিক কর্পোরেশন”।
                        </p>


                        {/* <button className="bg-[#7FE4F6] text-
                       rounded-full p-2 text-xl font-semibold my-10 px-5 text-[#0B3384]">
                       ডেমোর জন্য অনুরোধ করুন
                      </button> */}



                        <button className="pl-5 xl:pt-9 lg:pt-[260px]" onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 px-5">
                            অনুরোধ করুন
                        </p>
                        </button>


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



                    </div>
                    <div className="relative z-10 lg:w-[500px]  ">
                        <img className="lg:pt-[10px] lg:ml-5 md:ml-[50px] xl:ml-0  lg:absolute lg:bottom-0 lg:right-0 bannerImg " src={bannerImg} alt="" />
                    </div>
                </div>







       {/* ------------banner right--------------- */}





                <div className="lg:w-[40%] md:w-[40%] bg-[#001B41] text-white p-5 lg:pl-10 px-5 md:rounded-tr-xl z-20">
                    <p className=" font-semibold text-[#FFAA00] pb-3 text-lg">আমাদের সেবা সমূহ</p>

                            <p className="text-[15px]  text-justify  pr-[18px]">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য। যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।</p>

                    {/* <h1 className="xl:text-[25px] text-2xl font-semibold pb-2 "> </h1> */}
                    <h1 className="xl:text-[20px] text-2xl font-semibold pb-5 pt-5 text-[#FFAA00]">আমাদের বিজনেস সলিউশন সেবা সমূহ</h1>


                    <div className="grid grid-cols-2 gap-2 ">

                        <section>
                        <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px] ">ইআরপি সফটওয়্যার</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">ওয়েব ডেভেলপ</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">সফটওয়্যার ডেভেলপ</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">মোবাইল অ্যাপস</p>
                    </div>
                        </section>


                        <section>
                        <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">ক্লাউড স্টোরেজ</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">ডোমেন ও হোস্টিং</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">এসএমএস সার্ভিস </p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-[18px] " />
                        <p className="text-[12px]">ইকমার্স সলিউশন </p>
                    </div>

                        </section>
                   
                    
                    </div>
                  



                    <div>
                        <p className="text-[20px] font-medium text-[#FFAA00] text-center">
                            আপনার প্রয়োজন কোনটি?
                        </p>
                    </div>


                    {/* <p className="text-lg py-5">

                        Starting at $4/month
                            </p> */}




                    {/* ---------------------modal start---------------------------- */}


                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className="text-center">
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





            <div className=" cardWidth md:mx-3 "> 
                {/* ----------card part1 start----------- */}

                {/* <section className="lg:grid-cols-6  grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 "> */}
                    <section className="lg:flex grid grid-cols-2 md:grid-cols-3  items-center ">
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 text-center bg-white lg:w-44 cards xl">

                        <img className="w-32 pb-5" src={ionicLOgo} />
                        <h4 className="font-bold cardHeading text-">আইওনিক ইআরপি</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> শিল্প ও উৎপাদন সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 text-center bg-white lg:w-44 cards ">

                        <img className="w-32 pb-5" src={kormochary} />
                        <h4 className="font-bold cardHeading text-">কর্মচারী</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> কর্মচারী ব্যবস্থাপনা সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://karmochary.com/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r  py-5 px-3 hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={shikkha} />
                        <h4 className="font-bold cardHeading text-">
                            শিক্ষা চ্যাট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> শিক্ষা মূলক সফটওয়্যার</p>
                        <Link to='/shikkha'>
                            <div className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r  py-5 px-3 hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={ionicHealth} />
                        <h4 className="font-bold cardHeading text-">আইওনিক হেলথ</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> চিকিৎসা সেবা সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ioniccorporation.com/ionic-hospital/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r  py-5 px-3 hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={go} />
                        <h4 className="font-bold cardHeading text-">গো একাউন্ট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">একাউন্টিং ব্যবস্থাপনা সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://goaccount.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={shakti} />
                        <h4 className="font-bold cardHeading text-">বিক্রয় শক্তি</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> বিজনেস সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://www.bikroyshakti.com/">বিস্তারিত</a>
                    </div>




                </section>

                {/* ----------card part1 end----------- */}





                {/* ----------card part2 start----------- */}


                {/* <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl  "> */}
                    <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[242px]">

                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={restoraImg} />
                        <h4 className="font-bold cardHeading text-">মাই রেস্তোরাঁ
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">  রেস্তোরাঁ  সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://myrestaura.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={shopImg} />
                        <h4 className="font-bold cardHeading text-">আইওনিক সপ
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> সপ ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicshop.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={myBhara} />
                        <h4 className="font-bold cardHeading text-">মাই ভাড়া</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> ভাড়া ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://mybhara.com/">বিস্তারিত</a>
                    </div>
                    <div className="md:hidden  lg:flex flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white text-center z-10 lg:w-44 cards">

                        <img className="w-32 pb-5" src={ionicCorporationLogo} />
                        <h4 className="font-bold  text-[10px] pt-1">আইওনিক কর্পোরেশন
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[14px]"> বিজনেস  সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                    </div>

                    {/* <div className="bg-[#F3F3F3]  h-full xl:scale-100 lg:scale-110 xl:h-56 xl:-mt-3 lg:ml-3  xl:-ml-0 xl:-mb-3  xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div> */}
                </section>
                {/* bg-[#F3F3F3] hidden md:block  h-full -mb-2 xl:-ml-[10px] xl:w-56 */}


                {/* ----------card part2 end----------- */}




                {/* ----------card part3 start----------- */}


                {/* <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl  "> */}
                <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[363px]">
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={ocean} />
                        <h4 className="font-bold cardHeading text-">আইওনিক ওসেন</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> স্টোরেজ সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicocean.com/lander">বিস্তারিত</a>
                    </div>

                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={ionic} />
                        <h4 className="font-bold cardHeading text-">আইওনিক
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> বিজনেস সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://mydiagnostic.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center  border-r  py-5 px-3 hover:scale-105 bg-white text-center z-10 lg:w-44 cards">

                        <img className="w-32 pb-5" src={tailor} />
                        <h4 className="font-bold cardHeading text-">আইওনিক টেইলার্স</h4>
                        <p className="text-[#718095] cardType text-center   text-[12px]"> টেইলার্স ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionictailor.com/">বিস্তারিত</a>
                    </div>

                    <div className=" md:hidden flex flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={pharma} />
                        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>

                    {/* <div className="bg-[#F3F3F3] hidden md:block  h-full lg:-mt-1 lg:h-56 -mb-3  xl:w-56"></div>
                    <div className="bg-[#F3F3F3] hidden md:block  h-full lg:mt-4 lg:rounded-tl-xl scale-110  xl:w-56"></div>
                    <div className="bg-[#F3F3F3] hidden md:block  h-full scale-110 -ml-[10px] xl:w-56"></div> */}
                </section>


                {/* ----------card part3 end----------- */}






                {/* ----------card part4 start----------- */}


                {/* <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl  ">
                 */}
                 <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[484px]">

                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white text-center lg:w-44 cards">

                        <img className="w-32 pb-5 pt-[1px]" src={transport} />
                        <h4 className="font-bold  text-[12px]">আইওনিক ট্রান্সপোর্ট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ট্রান্সপোর্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center    border-r  py-5 px-3 hover:scale-105 bg-white text-center lg:w-44 cards">

                        <img className="w-32 pb-5" src={travel} />
                        <h4 className="font-bold cardHeading text-">আইওনিক ট্রাভেল
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[12px]"> ট্রাভেল ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionictravel.xyz/">বিস্তারিত</a>
                    </div>
                    <div className=" hidden lg:hidden md:flex flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={pharma} />
                        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>

                    {/* <div className="bg-[#F3F3F3]  h-full  lg:-mt-2 xl:-mt-5 lg:h-56 -mb-2   xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full  lg:h-56 lg:-mt-2  lg:rounded-tl-xl  xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div> */}






                </section>


                {/* ----------card part4 end----------- */}




                {/* ----------card part5 start----------- */}


                {/* <section className="lg:grid-cols-6 lg:grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl hidden "> */}
                <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start  items-center mr-[603px]">
                    <div className="lg:flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white lg:w-44 cards hidden">

                        <img className="w-32 pb-5" src={pharma} />
                        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>

{/* 
                    <div className="bg-[#F3F3F3]  h-full  lg:h-56 xl:h-60
                
                lg:-mt-3 xl:-mt-5 xl:w-56"></div>
                    <div className="bg-[#F3F3F3]    lg:h-[239px] lg:-mt-5  lg:rounded-tl-xl xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 lg:h-56 lg:-mt-3 -ml-[10px] xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div> */}
                </section>



                {/* <section className="  lg:grid-cols-6 md:grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl relative ">
                
                <div className=" hidden  lg:flex  flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white z-10 ">

            <img className="w-32 pb-5" src={pharma}/>
            <h4 className="font-bold cardHeading text-">আইওনিক ফার্মা</h4>
            <p className="text-[#718095] cardType text-center flex-grow  text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicpharma.xyz//">বিস্তারিত</a>
                </div>
                <div className="lg:hidden flex flex-col justify-center items-center  absolute -top-[435px]  right-0 md:-top-[215px] md:w-72 md:h-52 py-5 px-3 hover:scale-105 bg-white ">

                        <img className="w-32 pb-5" src={pharma}/>
                        <h4 className="font-bold cardHeading text-lg">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center flex-grow  text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicpharma.xyz//">বিস্তারিত</a>
                </div>
                
               
                <div className="bg-[#F3F3F3] hidden lg:block  h-full xl:scale-110 xl:-ml-[10px] xl:w-56"></div>
                <div className="bg-[#F3F3F3] hidden lg:block  h-full scale-110 -ml-[10px] xl:w-56"></div>
                <div className="bg-[#F3F3F3] hidden lg:block  h-full scale-110 -ml-[10px] xl:w-56"></div>
                <div className="bg-[#F3F3F3] hidden lg:block  h-full scale-110 -ml-[10px] xl:w-56"></div>
                <div className="bg-[#F3F3F3] hidden lg:block  h-full scale-110 -ml-[10px] xl:w-56"></div>
         </section> */}


                {/* ----------card part5 end----------- */}
            </div>




        </div>
    );
};

export default Banner;