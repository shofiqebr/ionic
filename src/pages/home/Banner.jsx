import { FaCheck } from "react-icons/fa";
import bannerImg from '../../assets/backImgBanner.webp'
import ModalBody from "../../shared/modalBody/ModalBody";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";



const Banner = () => {
    return (
        <div className="lg:pt-44 pt-32">
            <section className="flex lg:mx-16 md:flex-row flex-col" >


                <div className="bg-[#0B2A63] text-white flex lg:flex-row flex-col lg:justify-between md:rounded-tl-xl md:rounded-tr-none rounded-t-xl md:w-[70%] px-5 ">
                    <div className="lg:pl-10 lg:py-10 ">
                        <p className="text-lg font-semibold text-[#95CAEB]">WordPress Hosting</p>
                        <h1 className="lg:text-4xl text-2xl font-semibold pb-8">Faster & more reliable</h1>
                        <div className="flex items-center gap-4 pb-5">
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
                        </div>

                       
                            <p className="text-lg py-5">

                        Starting at $4/month
                            </p>


                      <button className="bg-[#7FE4F6] text-[#0C2A63] rounded-full p-2 text-xl font-semibold my-10 px-5">
                        See plans 
                      </button>


                    </div>
                    <div>
                        <img className="lg:pt-28 ml-5 " src={bannerImg} alt="" />
                    </div>
                </div>




                <div className="lg:w-[30%] bg-[#001B41] text-white p-5 lg:pl-10 px-5 lg:rounded-tr-xl">
                <p className="text-lg font-semibold text-[#95CAEB]">IONOS Cloud</p>
                        <h1 className="xl:text-4xl text-2xl font-semibold pb-5">Cloud IT without  <br />compromises</h1>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">Highly scalable</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">Maximum performance</p>
                        </div>
                        <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#2F4A7A] text-[2f4a7a] p-1 text-2xl " /> 
                            <p className="text-lg">Full data sovereignty</p>
                        </div>

                       
                            <p className="text-lg py-5">

                        Starting at $4/month
                            </p>


                     

                                {/* ---------------------modal start---------------------------- */}


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                
<button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}>  <p className="bg-[#7FE4F6] text-[#0C2A63] rounded-full p-2 text-xl font-semibold my-10 px-5">
                        Learn More
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




            <section className="xl:flex grid md:grid-cols-3 grid-cols-2 items-center  justify-center gap-5 py-3 bg-white lg:mx-16 rounded-b-xl">
                <div className="flex flex-col justify-center items-center border-r lg:rounded-bl-xl  px-4 hover:scale-105">

            <img className="w-20" src="https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-email.svg"/>
            <h4 className="font-bold">Bussiness email</h4>
            <p className="text-[#718095]">Starting at $1/month</p>
            <a href="">Learn more</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r py-3 px-3 hover:scale-105">

            <img className="w-20" src="	https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-mywebsite.svg"/>
            <h4 className="font-bold">Website Builder</h4>
            <p className="text-[#718095]">Starting at $1/month</p>
            <a href="">Learn more</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r py-3 px-3 hover:scale-105">

            <img className="w-20" src="	https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-webhosting.svg"/>
            <h4 className="font-bold">Web hosting</h4>
            <p className="text-[#718095]">Starting at $4/month</p>
            <a href="">Learn more</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r py-3 px-3 hover:scale-105">

            <img className="w-20" src="https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-deploy-now.svg"/>
            <h4 className="font-bold">Deploy Now</h4>
            <p className="text-[#718095]">Try it for free</p>
            <a href="">Learn more</a>
                </div>
                <div className="flex flex-col justify-center items-center border-r py-3 px-3 hover:scale-105">

            <img className="w-20" src="https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-server-virtual-pro.svg"/>
            <h4 className="font-bold">VPS</h4>
            <p className="text-[#718095]">Starting at $2/month</p>
            <a href="">Learn more</a>
                </div>
                <div className="flex flex-col justify-center items-center lg:rounded-br-xl py-3 px-3 hover:scale-105">

            <img className="w-20" src="	https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-cloud-compute-engine.svg"/>
            <h4 className="font-bold">Computer Engine</h4>
            <p className="text-[#718095]">Try it for free</p>
            <a href="">Learn more</a>
                </div>
              
          

            </section>
        </div>
    );
};

export default Banner;