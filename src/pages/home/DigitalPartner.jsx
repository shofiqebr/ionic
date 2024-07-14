import { FaCheck } from "react-icons/fa";
import global from '../../assets/global.webp'
import domainCount from '../../assets/domain count.svg'


const DigitalPartner = () => {
    return (
        <div>
            <section className="flex px-5">
                <div className="lg:w-[20%]">
                    <h1 className="text-4xl font-bold pb-10">Your digital <br /> partner</h1>
                    <ul>
                         <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#ADD5EF] text-[#255DA3] p-1 text-2xl " /> 
                            <p className="text-xl">Sustainable data centers</p>
                        </div>
                         <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#ADD5EF] text-[#255DA3] p-1 text-2xl " /> 
                            <p className="text-xl">ISO-certified security</p>
                        </div>
                         <div className="flex items-center gap-4 pb-5">
                            <FaCheck className=" rounded-full bg-[#ADD5EF] text-[#255DA3] p-1 text-2xl " /> 
                            <p className="text-xl">Expert support</p>
                        </div>
                    </ul>
                </div>
                <div className="w-[80%] px-5">
                    <img className="rounded-xl hidden lg:block" src={global} alt="" />
                </div>
            </section>






            <section className="flex justify-center gap-5 
             items-center pt-10">
                <div className="bg-[#d8dadb] rounded-xl w-72 p-5 pr-10">
                    <img src={domainCount} alt="" />
                    <p className="text-4xl font-semibold py-10">22,000,000</p>
                    <p className="text-2xl font-medium">domains</p>
                   
                </div>
                <div className="bg-[#d8dadb] rounded-xl w-72 p-5 pr-10">
                    <img src={domainCount} alt="" />
                    <p className="text-4xl font-semibold py-10">22,000,000</p>
                    <p className="text-2xl font-medium">domains</p>
                   
                </div>
                <div className="bg-[#d8dadb] rounded-xl w-72 p-5 pr-10">
                    <img src={domainCount} alt="" />
                    <p className="text-4xl font-semibold py-10">22,000,000</p>
                    <p className="text-2xl font-medium">domains</p>
                   
                </div>
                <div className="bg-[#d8dadb] rounded-xl w-72 p-5 pr-10">
                    <img src={domainCount} alt="" />
                    <p className="text-4xl font-semibold py-10">22,000,000</p>
                    <p className="text-2xl font-medium">domains</p>
                   
                </div>
              
              
            </section>
        </div>
    );
};

export default DigitalPartner;