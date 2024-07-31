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




const Banner = () => {
    return (
        <div className="lg:pt-40 lg:pb-10 pt-32">
            <section className="flex xl:mx-16 md:flex-row flex-col" >


                <div className="bg-[#0B2A63] text-white flex lg:flex-row flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl lg:w-[70%] md:w-[60%] pl-2 ">
                    <div className="lg:pl-10 pt-10  z-10">
                        <p className="pb-3 font-semibold text-[#95CAEB] text-xl">আইওনিক কর্পোরেশন</p>
                        <h1 className="lg:text-4xl text-2xl font-semibold pb-3 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
                        <h1 className="lg:text-[26px] text-xl font-semibold pb-8 ">ডিজিটাল আইটি সলিউশন প্রতিষ্ঠান</h1>
                       

                       
                            <p className="text-[17px] py-5 text-justify pr-3 md:w-[350px]">

                        {/* Starting at $4/month */}
                        বাংলাদেশে প্রথমবার সবচেয়ে সহজ ও নির্ভূল, ব্যবসা প্রতিষ্ঠান পরিচালনার পূর্নাঙ্গ সমাধান নিয়ে, "আইওনিক কর্পোরেশন" প্রোগ্রামিং ভাষা পাইথন দিয়ে তৈরি, টোটাল সলুয়েশন ইআরপি সফ্টওয়ার উপস্খাপন করলো আপনার জন্য।
যে কোন ব্যবসা ও প্রতিষ্ঠান পরিচালনার জন্য প্রতিষ্ঠান ব্যবস্থাপনা ও একাউন্টিং সিস্টেম সহ ১০০+ এর অধিক সমাধানের মডিউল নিয়ে আসলো "আইওনিক কর্পোরেশন"।
                            </p>


                      {/* <button className="bg-[#7FE4F6] text-
                       rounded-full p-2 text-xl font-semibold my-10 px-5 text-[#0B3384]">
                       ডেমোর জন্য অনুরোধ করুন
                      </button> */}



                      <button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}>  <p className="bg-white text-black rounded-full p-2 text-[16px] font-bold my-10 px-5">
                            অনুরোধ করুন
                      </p>
                     </button>


                    <dialog id="my_modal_5" className="">
                    <div className=" lg:w-[1000px]  bg-[#808285] relative">
                        <ModalBody/>

                        

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" absolute top-2 right-2"><RxCross2 className='text-white text-2xl' /></button>
                        </form>
                        </div>
                    </div>
                    </dialog>



                    </div>
                    <div className="relative z-10 lg:w-[500px]">
                        <img className="lg:pt-[225px] lg:ml-5 md:ml-[50px]  lg:absolute lg:bottom-0 lg:right-0  " src={bannerImg} alt="" />
                    </div>
                </div>




                <div className="lg:w-[30%] md:w-[40%] bg-[#001B41] text-white p-5 lg:pl-10 px-5 lg:rounded-tr-xl">
                <p className=" font-semibold text-[#95CAEB] pb-3 text-lg">আমাদের সেবা সমূহ</p>
                        <h1 className="xl:text-[25px] text-2xl font-semibold pb-2 ">যে কোন বিজনেস </h1>
                        <h1 className="xl:text-[20px] text-2xl font-semibold pb-5 ">সলিউশন সফটওয়্যার</h1>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className=" ">ইআরপি সফটওয়্যার</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">ওয়েবসাইট ডেভেলপমেন্ট</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">সফটওয়্যার ডেভেলপমেন্ট</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">মোবাইল অ্যাপস</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">ক্লাউড স্টোরেজ</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">ডোমেন ও হোস্টিং</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">এসএমএস সার্ভিস </p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-xl " /> 
                            <p className="">ইকমার্স সলিউশন </p>
                        </div>



                        <div>
                            <p className="text-[18px] text-[#95CAEB] text-center">
                            আপনার প্রয়োজন কোনটি?
                            </p>
                        </div>

                       
                            {/* <p className="text-lg py-5">

                        Starting at $4/month
                            </p> */}


                     

                                {/* ---------------------modal start---------------------------- */}


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <div className="text-center">
                <button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}>  <p className="bg-white text-black rounded-full p-2 text-[16px]  font-bold my-3 px-5">
 অনুরোধ করুন
                      </p>
</button>
                </div>
                



<dialog id="my_modal_5" className="">
  <div className=" lg:w-[1000px]  bg-[#808285] relative">
    <ModalBody/>

      

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




                {/* ----------card part1 start----------- */}




                <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 ">
                <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105">

            <img className="w-32 pb-5" src={ionicLOgo}/>
            <h4 className="font-bold text-">আইওনিক ইআরপি</h4>
            <p className="text-[#718095] text-center   text-[13px]"> শিল্প ও উৎপাদন সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  py-5 px-3 hover:scale-105">

            <img className="w-32 pb-5" src={kormochary}/>
            <h4 className="font-bold text-">কর্মচারী</h4>
            <p className="text-[#718095] text-center   text-[13px]"> কর্মচারী ব্যবস্থাপনা সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://karmochary.com/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  py-5 px-3 hover:scale-105">

            <img className="w-32 pb-5" src={shikkha}/>
            <h4 className="font-bold text-">
            শিক্ষা চ্যাট</h4>
            <p className="text-[#718095] text-center   text-[13px]"> শিক্ষা মূলক সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ioniccorporation.com/ionic-education/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  py-5 px-3 hover:scale-105">

            <img className="w-32 pb-5" src={ionicHealth}/>
            <h4 className="font-bold text-">আইওনিক হেলথ</h4>
            <p className="text-[#718095] text-center   text-[13px]"> চিকিৎসা সেবা সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ioniccorporation.com/ionic-hospital/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  py-5 px-3 hover:scale-105">

            <img className="w-32 pb-5" src={go}/>
            <h4 className="font-bold text-">গো একাউন্ট</h4>
            <p className="text-[#718095] text-center   text-[12px]">একাউন্টিং ব্যবস্থাপনা সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://goaccount.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center  lg:rounded-bl-xl  py-5 px-3 hover:scale-105">

            <img className="w-32 pb-5" src={shakti}/>
            <h4 className="font-bold text-">বিক্রয় শক্তি</h4>
            <p className="text-[#718095] text-center   text-[13px]"> বিজনেস সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://www.bikroyshakti.com/">বিস্তারিত</a>
                </div>
          
              
          

            </section>

                 {/* ----------card part1 end----------- */}





                 {/* ----------card part2 start----------- */}


             <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl  ">
                
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white">

                <img className="w-32 pb-5" src={restoraImg}/>
                <h4 className="font-bold text-">মাই রেস্তোরাঁ
               </h4>
                <p className="text-[#718095] text-center   text-[13px]">  রেস্তোরাঁ  সফটওয়্যার</p>
                <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://myrestaura.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white">

                <img className="w-32 pb-5" src={shopImg}/>
                <h4 className="font-bold text-">আইওনিক সপ
                </h4>
                <p className="text-[#718095] text-center   text-[13px]"> সপ ম্যানেজমেন্ট সফটওয়্যার</p>
                <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicshop.xyz/">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white">

                <img className="w-32 pb-5" src={myBhara}/>
                <h4 className="font-bold text-">মাই ভাড়া</h4>
                <p className="text-[#718095] text-center   text-[13px]"> ভাড়া ম্যানেজমেন্ট সফটওয়্যার</p>
                <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://mybhara.com/">বিস্তারিত</a>
                    </div>
                    <div className="md:hidden  lg:flex flex flex-col justify-center items-center    py-5 px-3 hover:scale-105 bg-white  ">

            <img className="w-32 pb-5" src={ionicCorporationLogo}/>
            <h4 className="font-bold text-[14px]">আইওনিক কর্পোরেশন
           </h4>
            <p className="text-[#718095] text-center   text-[13px]"> বিজনেস  সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                    
                    <div className="bg-[#F3F3F3]  h-full xl:h-56 xl:-mt-3  xl:-mb-3  xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>
             </section>
             {/* bg-[#F3F3F3] hidden md:block  h-full -mb-2 xl:-ml-[10px] xl:w-56 */}


                 {/* ----------card part2 end----------- */}





                  {/* ----------card part3 start----------- */}


             <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl  ">
             <div className="flex flex-col justify-center items-center rounded-br-2xl   py-5 px-3 hover:scale-105 bg-white">

<img className="w-32 pb-5" src={ocean}/>
<h4 className="font-bold text-">আইওনিক ওসেন</h4>
<p className="text-[#718095] text-center   text-[13px]"> স্টোরেজ সফটওয়্যার</p>
<a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicocean.com/lander">বিস্তারিত</a>
    </div>
                
                <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white">

            <img className="w-32 pb-5" src={ionic}/>
            <h4 className="font-bold text-">আইওনিক
            </h4>
            <p className="text-[#718095] text-center   text-[13px]"> বিজনেস সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://mydiagnostic.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center    py-5 px-3 hover:scale-105 bg-white">

            <img className="w-32 pb-5" src={tailor}/>
            <h4 className="font-bold text-">আইওনিক টেইলার্স</h4>
            <p className="text-[#718095] text-center   text-[12px]"> টেইলার্স ম্যানেজমেন্ট সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionictailor.com/">বিস্তারিত</a>
                </div>

                <div className=" md:hidden flex flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white">

<img className="w-32 pb-5" src={pharma}/>
<h4 className="font-bold text-[15px]">আইওনিক ফার্মা</h4>
<p className="text-[#718095] text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
<a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
    </div>
              
                <div className="bg-[#F3F3F3] hidden md:block  h-full lg:-mt-1 lg:h-56 -mb-2  xl:w-56"></div>
                <div className="bg-[#F3F3F3] hidden md:block  h-full lg:mt-4 lg:rounded-tl-xl scale-110  xl:w-56"></div>
                <div className="bg-[#F3F3F3] hidden md:block  h-full scale-110 -ml-[10px] xl:w-56"></div>
         </section>


             {/* ----------card part3 end----------- */}






                 {/* ----------card part4 start----------- */}


             <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl  ">
                
                    <div className="flex flex-col justify-center items-center border-r   py-5 px-3 hover:scale-105 bg-white">

                <img className="w-32 pb-5" src={transport}/>
                <h4 className="font-bold text-[15px]">আইওনিক ট্রান্সপোর্ট</h4>
                <p className="text-[#718095] text-center   text-[13px]">ট্রান্সপোর্ট সফটওয়্যার</p>
                <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                    </div>
                    <div className="flex flex-col justify-center items-center md:border-r lg:border-r-0     py-5 px-3 hover:scale-105 bg-white ">

                <img className="w-32 pb-5" src={travel}/>
                <h4 className="font-bold text-">আইওনিক ট্রাভেল
                </h4>
                <p className="text-[#718095] text-center   text-[12px]"> ট্রাভেল ম্যানেজমেন্ট সফটওয়্যার</p>
                <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionictravel.xyz/">বিস্তারিত</a>
                    </div>
                    <div className=" hidden lg:hidden md:flex flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white">

<img className="w-32 pb-5" src={pharma}/>
<h4 className="font-bold text-[15px]">আইওনিক ফার্মা</h4>
<p className="text-[#718095] text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
<a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
    </div>
                   
                    <div className="bg-[#F3F3F3]  h-full  lg:-mt-2 xl:-mt-5 lg:h-56  xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full xl:scale-110 lg:h-56 lg:-mt-2  lg:rounded-tl-xl  xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>
                    <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>





             
             </section>


                 {/* ----------card part4 end----------- */}




                   {/* ----------card part5 start----------- */}


                   <section className="lg:grid-cols-6 lg:grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl hidden ">
                
                <div className="flex flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white">

            <img className="w-32 pb-5" src={pharma}/>
            <h4 className="font-bold text-[15px]">আইওনিক ফার্মা</h4>
            <p className="text-[#718095] text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
                </div>
                
               
                <div className="bg-[#F3F3F3]  h-full  lg:h-56 xl:h-60
                
                lg:-mt-3 xl:-mt-5 xl:w-56"></div>
                <div className="bg-[#F3F3F3]  h-full xl:scale-110 lg:h-56 lg:-mt-3 lg:rounded-tl-xl xl:w-56"></div>
                <div className="bg-[#F3F3F3]  h-full scale-110 lg:h-56 lg:-mt-3 -ml-[10px] xl:w-56"></div>
                <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>
                <div className="bg-[#F3F3F3]  h-full scale-110 -ml-[10px] xl:w-56"></div>
         </section>
                   


             {/* <section className="  lg:grid-cols-6 md:grid md:grid-cols-3 grid-cols-2 items-center  justify-center pt-3 bg-white xl:mx-16 rounded-br-xl relative ">
                
                <div className=" hidden  lg:flex  flex-col justify-center items-center   py-5 px-3 hover:scale-105 bg-white z-10 ">

            <img className="w-32 pb-5" src={pharma}/>
            <h4 className="font-bold text-">আইওনিক ফার্মা</h4>
            <p className="text-[#718095] text-center flex-grow  text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicpharma.xyz//">বিস্তারিত</a>
                </div>
                <div className="lg:hidden flex flex-col justify-center items-center  absolute -top-[435px]  right-0 md:-top-[215px] md:w-72 md:h-52 py-5 px-3 hover:scale-105 bg-white ">

                        <img className="w-32 pb-5" src={pharma}/>
                        <h4 className="font-bold text-lg">আইওনিক ফার্মা</h4>
                        <p className="text-[#718095] text-center flex-grow  text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
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
    );
};

export default Banner;