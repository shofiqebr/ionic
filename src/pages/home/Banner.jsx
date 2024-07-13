import { FaCheck } from "react-icons/fa";
import bannerImg from '../../assets/backImgBanner.webp'



const Banner = () => {
    return (
        <div className="pt-44">
            <section className="flex mx-16 md:flex-row flex-col" >


                <div className="bg-[#0B2A63] text-white flex justify-between rounded-tl-xl md:w-[70%]">
                    <div className="pl-10 py-10 ">
                        <p className="text-lg font-semibold text-[#95CAEB]">WordPress Hosting</p>
                        <h1 className="text-4xl font-semibold pb-8">Faster & more reliable</h1>
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
                        <img className="pt-28 " src={bannerImg} alt="" />
                    </div>
                </div>




                {/* <div className="w-[30%] bg-[#001B41] text-white p-5 pl-10 rounded-tr-xl">
                <p className="text-lg font-semibold text-[#95CAEB]">IONOS Cloud</p>
                        <h1 className="text-4xl font-semibold pb-5">Cloud IT without  <br />compromises</h1>
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


                      <button className="bg-[#7FE4F6] text-[#0C2A63] rounded-full p-2 text-xl font-semibold my-10 px-5">
                        Learn More
                      </button>



                </div> */}
            </section>


{/* 
            <section className="md:flex grid grid-cols-2 items-center  justify-center gap-5 py-3 bg-white mx-16 rounded-b-xl">
                <div className="flex flex-col justify-center items-center border-r rounded-bl-xl  px-4 hover:scale-105">

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
                <div className="flex flex-col justify-center items-center rounded-br-xl py-3 px-3 hover:scale-105">

            <img className="w-20" src="	https://cs.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-cloud-compute-engine.svg"/>
            <h4 className="font-bold">Computer Engine</h4>
            <p className="text-[#718095]">Try it for free</p>
            <a href="">Learn more</a>
                </div>
              
          

            </section> */}
        </div>
    );
};

export default Banner;