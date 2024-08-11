import { FaCheck } from "react-icons/fa";
import bannerImg from '../../assets/backImgBanner.webp'
import ModalBody from "../../shared/modalBody/ModalBody";
import { RxCross2 } from "react-icons/rx";
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
        <div className="lg:pt-36 lg:pb-10 pt-32 banner  ">
            {/* <Link to='/home2'>erp</Link>  */}
            <section className="flex  md:flex-row flex-col   childBanner md:mx-3 " >


                {/* ------------banner left--------------- */}

                <div className="tempWidth bg-[#0B2A63] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl  bannerWidth  md:w-[60%] pl-2 z-20  ">


             
                    <div className="lg:pl-10 pt-10  z-10 bannerTExt">
                       
                        
                    <div className="bannerHeading pl-5 lg:pl-5 ">

<p className="pb-3 font-bold text-[#FFAA00] text-lg  lg:mt-[135px] xl:mt-[70px]  ">আইওনিক কর্পোরেশন</p>
<h1 className="lg:text-[40px] xl:text-[32px]  text-3xl md:text-[34px] font-semibold pb-3 heading1 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
<h1 className="lg:text-[29px] xl:text-[23px] text-[22px] md:text-[25px] font-semibold lg:pb-8 heading2">ডিজিটাল আইটি সলিউশন প্রতিষ্ঠান</h1>

                    </div>


                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:py-5 text-justify md:w-[350px] lg:w-auto p-5  md:pt-20 lg:pt-5 ">

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





                <div className="lg:w-[40%] md:w-[40%] bg-[#001B41] text-white p-5 lg:pl-10 px-5 md:rounded-tr-xl z-20 bannerRight">
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





            <div className=" cardWidth md:mx-3 "> 
                {/* ----------card part1 start----------- */}

              
                    <section className="lg:flex grid grid-cols-2 md:grid-cols-3  items-center cardSection1 ">
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards z-10">

                        <img className="w-32 pb-5" src={ionicLOgo} />
                        <h4 className="font-bold cardHeading text-">আইওনিক ইআরপি</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> শিল্প ও উৎপাদন সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards ">

                        <img className="w-32 pb-5" src={kormochary} />
                        <h4 className="font-bold cardHeading text-">কর্মচারী</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> কর্মচারী ব্যবস্থাপনা সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://karmochary.com/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b  py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={shikkha} />
                        <h4 className="font-bold cardHeading text-">
                            শিক্ষা চ্যাট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> শিক্ষা মূলক সফটওয়্যার</p>
                        <Link to='/shikkha'>
                            <div className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b  py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={ionicHealth} />
                        <h4 className="font-bold cardHeading text-">আইওনিক হেলথ</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> চিকিৎসা সেবা সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ioniccorporation.com/ionic-hospital/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b  py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={go} />
                        <h4 className="font-bold cardHeading text-">গো একাউন্ট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">একাউন্টিং ব্যবস্থাপনা সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://goaccount.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards ">

                        <img className="w-32  pb-5" src={shakti} />
                        <h4 className="font-bold cardHeading text-">বিক্রয় শক্তি</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> বিজনেস সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://www.bikroyshakti.com/">বিস্তারিত</a>
                    </div>




                </section>

                {/* ----------card part1 end----------- */}





                {/* ----------card part2 start----------- */}


                    <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[240px] xl:mr-[306px] cardSection2">

                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={restoraImg} />
                        <h4 className="font-bold cardHeading text-">মাই রেস্তোরাঁ
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">  রেস্তোরাঁ  সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://myrestaura.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards lg:pr-[px]">

                        <img className="w-32 pb-5" src={shopImg} />
                        <h4 className="font-bold cardHeading text-">আইওনিক সপ
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> সপ ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicshop.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={myBhara} />
                        <h4 className="font-bold cardHeading text-">মাই ভাড়া</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> ভাড়া ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://mybhara.com/">বিস্তারিত</a>
                    </div>
                    <div className="md:hidden  lg:flex flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white text-center z-10 lg:w-44 cards">

                        <img className="w-32 pb-5 py-[2px] lg:py-[7px]" src={ionicCorporationLogo} />
                        <h4 className="font-bold cardHeading  text-[10px] pt-1">আইওনিক কর্পোরেশন
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[14px]"> বিজনেস  সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                    </div>

                </section>
              


                {/* ----------card part2 end----------- */}




                {/* ----------card part3 start----------- */}


                <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[360px] xl:mr-[415px]  cardSection3">
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5 lg:py-[10.5px]" src={ocean} />
                        <h4 className="font-bold cardHeading text-">আইওনিক ওসেন</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> স্টোরেজ সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicocean.com/lander">বিস্তারিত</a>
                    </div>

                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards lg:py-[20.5px]">

                        <img className="w-32 pb-5" src={ionic} />
                        <h4 className="font-bold cardHeading text-">আইওনিক
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> বিজনেস সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://mydiagnostic.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center  border-r border-b   px-3 lg:hover:scale-105 bg-white text-center z-10 lg:w-44 cards md:py-[20.6px] py-5">

                        <img className="w-32 pb-5" src={tailor} />
                        <h4 className="font-bold cardHeading text-">আইওনিক টেইলার্স</h4>
                        <p className="text-[#718095] cardType text-center   text-[12px]"> টেইলার্স ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionictailor.com/">বিস্তারিত</a>
                    </div>

                    <div className=" md:hidden flex flex-col justify-center items-center   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={pharma} />
                        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>

                    
                </section>


                {/* ----------card part3 end----------- */}






                {/* ----------card part4 start----------- */}


               
                 <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[479px] xl:mr-[587px]  cardSection4">

                    <div className="flex flex-col justify-center items-center border-r border-b   py-[22px] px-3 lg:hover:scale-105 bg-white text-center lg:w-44 cards">

                        <img className="w-32 pb-5 pt-[1px]" src={transport} />
                        <h4 className="font-bold cardHeading  text-[12px]">আইওনিক ট্রান্সপোর্ট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ট্রান্সপোর্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center    border-r border-b  py-5 px-3 lg:hover:scale-105 bg-white text-center lg:w-44 cards lg:py-[21.5px] xl:py-[21.75px]">

                        <img className="w-32 pb-5" src={travel} />
                        <h4 className="font-bold cardHeading text-">আইওনিক ট্রাভেল
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[12px]"> ট্রাভেল ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionictravel.xyz/">বিস্তারিত</a>
                    </div>
                    <div className=" hidden lg:hidden md:flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-32 pb-5" src={pharma} />
                        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>

                
                </section>


                {/* ----------card part4 end----------- */}




                {/* ----------card part5 start----------- */}


                <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start  items-center mr-[598px] xl:mr-[757px]  cardSection5">
                    <div className="lg:flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards hidden ">

                        <img className="w-32 pb-5" src={pharma} />
                        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>


                </section>

                 {/* ----------card part5 end----------- */}
            </div>




        </div>
    );
};

export default Banner;