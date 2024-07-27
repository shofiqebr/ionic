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




const Banner = () => {
    return (
        <div className="lg:pt-40 pt-32">
            <section className="flex lg:mx-16 md:flex-row flex-col" >


                <div className="bg-[#0B2A63] text-white flex lg:flex-row flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl md:w-[70%] px-5">
                    <div className="lg:pl-10 lg:py-10 ">
                        <p className="pb-3 font-semibold text-[#95CAEB] text-2xl">আইওনিক কর্পোরেশন</p>
                        <h1 className="lg:text-4xl text-2xl font-semibold pb-3 ">বাংলাদেশের একটি বিশ্বস্ত   </h1>
                        <h1 className="lg:text-4xl text-2xl font-semibold pb-8 ">ডিজিটাল আইটি সলিউশন </h1>
                        {/* <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">3x faster with SSD & caching</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">Customizable auto updates</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">Daily backups and easy recovery</p>
                        </div> */}

                       
                            <p className="text-xl py-5 md:w-[350px]">

                        {/* Starting at $4/month */}
                        যে কোন বিজনেস সলিউশন সফটওয়্যার, ইআরপি সফটওয়্যার, ক্লাউড স্টোরেজ, ওয়েবসাইট ডেভেলপমেন্ট, মোবাইল অ্যাপস, হোস্টিং, ডোমেন, এসএমএস এবং ইকমার্স  সলিউশন।
                            </p>


                      {/* <button className="bg-[#7FE4F6] text-
                       rounded-full p-2 text-xl font-semibold my-10 px-5 text-[#0B3384]">
                       ডেমোর জন্য অনুরোধ করুন
                      </button> */}



                      <button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}>  <p className="bg-white text-black rounded-full p-2 text-[16px] font-bold my-10 px-5">
ডেমোর জন্য অনুরোধ করুন
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
                    <div className="">
                        <img className="lg:pt-28 ml-5  " src={bannerImg} alt="" />
                    </div>
                </div>




                <div className="lg:w-[30%] bg-[#001B41] text-white p-5 lg:pl-10 px-5 lg:rounded-tr-xl">
                <p className="text-lg font-semibold text-[#95CAEB] ">IONOS Cloud</p>
                        <h1 className="xl:text-4xl text-2xl font-semibold pb-5">Cloud IT without  <br />compromises</h1>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg ">ক্লাউড স্টোরেজ</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">ওয়েবসাইট ডেভেলপমেন্ট</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">সফটওয়্যার ডেভেলপমেন্ট</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">হোস্টিং ও ডোমেন</p>
                        </div>

                       
                            {/* <p className="text-lg py-5">

                        Starting at $4/month
                            </p> */}


                     

                                {/* ---------------------modal start---------------------------- */}


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                
<button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}>  <p className="bg-white text-black rounded-full p-2 text-[16px] font-bold my-10 px-5">
ডেমোর জন্য অনুরোধ করুন
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







                {/* ---------------------modal end---------------------------- */}



                </div>
            </section>




                {/* ----------card part----------- */}




            <section className="xl:flex grid md:grid-cols-3 grid-cols-2 items-center  justify-center gap-5 pt-3 bg-white lg:mx-16 rounded-b-xl">
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  p-4 hover:scale-105">

            <img className="w-32 pb-5" src={ionicLOgo}/>
            <h4 className="font-bold text-lg">আইওনিক ইআরপি</h4>
            <p className="text-[#718095]  text-[13px]"> শিল্প ও উৎপাদন সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  p-4 hover:scale-105">

            <img className="w-32 pb-5" src={kormochary}/>
            <h4 className="font-bold text-lg">কর্মচারী</h4>
            <p className="text-[#718095]  text-[13px]"> কর্মচারী ব্যবস্থাপনা সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  p-4 hover:scale-105">

            <img className="w-32 pb-5" src={shikkha}/>
            <h4 className="font-bold text-lg">
            শিক্ষা চ্যাট</h4>
            <p className="text-[#718095]  text-[13px]"> শিক্ষা মূলক সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  p-4 hover:scale-105">

            <img className="w-32 pb-5" src={ionicHealth}/>
            <h4 className="font-bold text-lg">আইওনিক হেলথ</h4>
            <p className="text-[#718095]  text-[13px]"> চিকিৎসা সেবা সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  p-4 hover:scale-105">

            <img className="w-32 pb-5" src={go}/>
            <h4 className="font-bold text-lg">গো একাউন্ট</h4>
            <p className="text-[#718095]  text-[13px]">একাউন্টিং ব্যবস্থাপনা সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
                <div className="flex flex-col justify-center items-center  lg:rounded-bl-xl  p-4 hover:scale-105">

            <img className="w-32 pb-5" src={shakti}/>
            <h4 className="font-bold text-lg">বিক্রয় শক্তি</h4>
            <p className="text-[#718095]  text-[13px]"> বিজনেস সফটওয়্যার</p>
            <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                </div>
          
              
          

            </section>
        </div>
    );
};

export default Banner;