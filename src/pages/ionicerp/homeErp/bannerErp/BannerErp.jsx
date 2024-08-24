import { RxCross2 } from "react-icons/rx";
import ModalBody from "../../../../shared/modalBody/ModalBody";
import { FaCheck } from "react-icons/fa";
import bannerImg from '../../../../assets/backImgBanner.webp'
import automobile from '../../../../assets/erp/automobile.png'
import dish from '../../../../assets/erp/dish.png'
import chemical from '../../../../assets/erp/chemical.png'
import concrete from '../../../../assets/erp/concrete.png'
import electrical from '../../../../assets/erp/electrical.png'
import food from '../../../../assets/erp/food.png'
import footwear from '../../../../assets/erp/footwear.png'
import garments from '../../../../assets/erp/garments.png'
import leather from '../../../../assets/erp/leather.png'
import mining from '../../../../assets/erp/mining.png'
import pharmacuticals from '../../../../assets/erp/pharmacuticals.png'
import plastic from '../../../../assets/erp/plastic.png'
import printing from '../../../../assets/erp/printing.png'
import rubber from '../../../../assets/erp/rubber.png'
import steel from '../../../../assets/erp/steel.png'
import wood from '../../../../assets/erp/wood.png'



import { Link } from "react-router-dom";


const BannerErp = () => {
    return (
        <div className="lg:pt-36 lg:pb-10 pt-32 banner  ">
            {/* <Link to='/home2'>erp</Link>  */}
            <section className="flex  md:flex-row flex-col   childBanner md:mx-3 " >


                {/* ------------banner left--------------- */}

                <div className="tempWidth bg-[#2c2a2a] text-white flex   flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl  bannerWidth  md:w-[60%] pl-2 z-20  ">

                <div className="bannerHeading pl-5 lg:pl-5 ">

<p className="pb-3 font-bold text-[#FFAA00] text-lg  lg:mt-[135px] xl:mt-[70px] 2xl:mt-[10px]  ">আইওনিক ইআরপি</p>
<h1 className="lg:text-[40px] xl:text-[32px] 2xl:!text-[30px]  text-3xl md:text-[34px] font-semibold pb-3 heading1 ">টোটাল সলুয়েশন বিজনেস ম্যানেজমেন্ট ইআরপি সফটওয়্যার  </h1>
<h1 className="lg:text-[29px] xl:text-[23px] 2xl:!text-[18px] text-[22px] md:text-[25px] text-justify  font-semibold lg:pb-8 mr-14 heading2">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল ব্যবসা পরিচালনার জন্য বিলিং ও একাউন্টিং সিস্টেম কে পেপারলেস ও অটোমেশন করতে, ১০০০+ এর অধিক ব্যবসা পরিচালনার মডিউল বিদ্যমান আছে <span className="text-[#FFAA00]">“আইওনিক ইআরপি”</span>-র মধ্যে। </h1>


                    </div>
             
                    <div className="lg:pl-10 pt-10  z-10 bannerTExt">
                       
                        
                    <div className="bannerHeading pl-5 lg:pl-5 ">


<h1 className="lg:text-[40px] xl:text-[32px]  text-3xl md:text-[34px] font-semibold pb-3 heading1 ">  </h1>
{/* <h1 className="lg:text-[29px] xl:text-[22px] text-[22px] md:text-[25px] font-semibold lg:pb-  text-justify">আইওনিক কর্পোরেশন বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল ব্যবসা পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে এলো পাইথন দিয়ে তৈরি "আইওনিক ইআরপি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার। যে কোন ব্যবসা পরিচালনার জন্য বিলিং ও একাউন্টিং সিস্টেম সহ ৭০+ এর অধিক ব্যবসা পরিচালনার মডিউল বিদ্যমান আছে।</h1> */}

                    </div>


                        <p className="lg:text-[18px] xl:text-[16px] 2xl:text-[18px] lg:pb-5 text-justify md:w-[350px] lg:w-auto pl-5 xl:pt-14  md:pt-20 lg:pt-5 ">

                        পাইথন প্রোগ্রামিং ভাষা হল শক্তিশালী এবং দ্রুত অন্যদের সাথে ভাল মিশতে পারে, সর্বত্র চলে বন্ধুত্বপূর্ণ এবং শেখা সহজ, ওপেন সোর্স।<span className="text-[#FFAA00]">"আইওনিক ইআরপি"</span>  বিজনেস ম্যানেজমেন্ট সফটওয়্যার- তৈরিতে ব্যবহার করা হয়েছে <span className="text-[#FFAA00]">"পাইথন প্রোগ্রামিং ভাষা"</span> । পাইথন সফটওয়্যার ফাউন্ডেশন হল পাইথন প্রোগ্রামিং ভাষার সাথে সম্পর্কিত ওপেন সোর্স প্রযুক্তির অগ্রগতির জন্য নিবেদিত একটি সংস্থা।
                        </p>


                      


                        <button className="pl-5 xl:pt-[px] 2xl:pt-[52px] lg:pt-[px]  md:pt-[px] " onClick={() => document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#FFAA00] text-[#001B41] rounded-full p-2 text-[16px] font-extrabold my-10 xl:my-3 px-5">
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





                <div className="lg:w-[40%] md:w-[40%] bg-black text-white p-5 lg:pl-10 px-5 md:rounded-tr-xl z-20 bannerRight">
                    <p className=" font-semibold text-[#FFAA00] pb-3 text-lg">আমাদের সেবা সমূহ</p>

                            <p className="text-[15px]  text-justify ">বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য। যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।</p>

                    <h1 className="xl:text-[19px] lg:text-[18px] text-xl font-semibold pb-5 pt-5 text-[#FFAA00] bannerRightH2">আমাদের বিজনেস সলিউশন সেবা সমূহ</h1>


                    <div className="grid grid-cols-2 gap-1 ">

                        <section>
                        <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px] ">ইআরপি সফটওয়্যার</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px]">ওয়েব ডেভেলপ</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px]">সফটওয়্যার ডেভেলপ</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px]">মোবাইল অ্যাপস</p>
                    </div>
                        </section>


                        <section>
                        <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px]">ক্লাউড স্টোরেজ</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px]">ডোমেন ও হোস্টিং</p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
                        <p className="text-[12px] 2xl:text-[13.8px]">এসএমএস সার্ভিস </p>
                    </div>
                    <div className="flex items-center gap-4 pb-5">
                        <FaCheck className=" rounded-full bg-[#FFAA00] text-black p-1 text-[18px] " />
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
                    <div className="text-center 2xl:mt-[20px]">
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
                     

                        <img className="w-14 pb-5 grayImg" src={automobile} alt="Automobile" />

                       
                        <h4 className="font-bold cardHeading text-">মোটরগাড়ি শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">টোটাল সলুয়েশন</p>
                        <Link to='trading-ionic-erp'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" >বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards ">

                        <img className="w-14 pb-5 grayImg" src={dish} />
                        <h4 className="font-bold cardHeading text-">ডিশ এবং ইন্টারনেট</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">টোটাল সলুয়েশন</p>
                        <Link to='trading-ionic-erp'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" >বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b  py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={chemical} />
                        <h4 className="font-bold cardHeading text-">
                        রাসায়নিক</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='chemical-industry-ionic-erp'>
                            <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b  py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={concrete} />
                        <h4 className="font-bold cardHeading text-">কংক্রিট প্রস্তুত মিশ্রণ</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b  py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={electrical} />
                        <h4 className="font-bold cardHeading text-">বৈদ্যুতিক যন্ত্র</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='trading-ionic-erp'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" >বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards ">

                        <img className="w-14  pb-5 grayImg" src={food} />
                        <h4 className="font-bold cardHeading text-">খাদ্য ও পানীয়</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>




                </section>

                {/* ----------card part1 end----------- */}





                {/* ----------card part2 start----------- */}


                    <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[240px] xl:mr-[306px] cardSection2">

                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={footwear} />
                        <h4 className="font-bold cardHeading text-">ফুটওয়্যার
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards lg:pr-[px]">

                        <img className="w-14 pb-5 grayImg" src={garments} />
                        <h4 className="font-bold cardHeading text-">গার্মেন্টস/পোশাক
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={leather} />
                        <h4 className="font-bold cardHeading text-">চামড়া</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="md:hidden  lg:flex flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white text-center z-10 lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg py-[2px] lg:py-[7px]" src={mining} />
                        <h4 className="font-bold cardHeading  text-[10px] pt-1">খনি শিল্প
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[14px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>

                </section>
              


                {/* ----------card part2 end----------- */}




                {/* ----------card part3 start----------- */}


                <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[360px] xl:mr-[415px]  cardSection3">
                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg lg:py-[10.5px]" src={pharmacuticals} />
                        <h4 className="font-bold cardHeading text-">ফার্মাসিউটিক্যালস শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards lg:py-[20.5px]">

                        <img className="w-14 pb-5 grayImg" src={plastic} />
                        <h4 className="font-bold cardHeading text-">প্লাস্টিক শিল্প
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center  border-r border-b   px-3 lg:hover:scale-105 bg-white text-center z-10 lg:w-44 cards md:py-[20.6px] py-5">

                        <img className="w-14 pb-5 grayImg" src={printing} />
                        <h4 className="font-bold cardHeading text-">মুদ্রণ শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[12px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>

                    <div className=" md:hidden flex flex-col justify-center items-center   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={wood} />
                        <h4 className="font-bold cardHeading text-[15px]">আসবাবপত্র শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>

                    
                </section>


                {/* ----------card part3 end----------- */}






                {/* ----------card part4 start----------- */}


               
                 <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start items-center lg:mr-[479px] xl:mr-[587px]  cardSection4">

                    <div className="flex flex-col justify-center items-center border-r border-b   py-[22px] px-3 lg:hover:scale-105 bg-white text-center lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg pt-[1px]" src={steel} />
                        <h4 className="font-bold cardHeading  text-[12px]">ইস্পাত শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center    border-r border-b  py-5 px-3 lg:hover:scale-105 bg-white text-center lg:w-44 cards lg:py-[21.5px] xl:py-[21.75px]">

                        <img className="w-14 pb-5 grayImg" src={rubber} />
                        <h4 className="font-bold cardHeading text-">রাবার শিল্প
                        </h4>
                        <p className="text-[#718095] cardType text-center   text-[12px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>
                    <div className=" hidden lg:hidden md:flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards">

                        <img className="w-14 pb-5 grayImg" src={rubber} />
                        <h4 className="font-bold cardHeading text-[15px]">রাবার শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>

                
                </section>


                {/* ----------card part4 end----------- */}




                {/* ----------card part5 start----------- */}


                <section className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-start  items-center mr-[598px] xl:mr-[757px]  cardSection5">
                    <div className="lg:flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white lg:w-44 cards hidden ">

                        <img className="w-14 pb-5 grayImg" src={wood} />
                        <h4 className="font-bold cardHeading text-[15px]">আসবাবপত্র শিল্প</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> টোটাল সলুয়েশন</p>
                        <Link to='manufacturing-industry-ionic-erp-software'>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2">বিস্তারিত</div>
                        </Link>
                    </div>


                </section>

                 {/* ----------card part5 end----------- */}
            </div>




        </div>
    );
};

export default BannerErp;