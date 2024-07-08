import { FaAngleRight } from "react-icons/fa";

const BannerText = () => {
    return (
        <div className="flex justify-end flex-col lg:flex-row  gap-10  pt-44 mr-20">
            <section className=" lg:text-right ">
                <div className="text-[36px] font-semibold text-[#969696]">আইওনিক কর্পোরেশন <br className="hidden lg:block" /> বাংলাদেশের একটি বিশ্বস্ত <br className="hidden lg:block" /> ডিজিটাল আইটি সলিউশন <br className="hidden lg:block" /> কোম্পানি ।</div>
                <div className="md:w-[550px] mt-5 h-1 bg-[#F8001F]"></div>
            </section>
            <section className="lg:text-left md:w-[380px] flex flex-col gap-5">
                <div className="h-1 bg-black "></div>
                <div className="text-[#969696] text-[20px]">যে কোন বিজনেস সলিউশন সফটওয়্যার,<br /> ইআরপি সফটওয়্যার, ক্লাউড স্টোরেজ, <br /> ওয়েবসাইট ডেভেলপমেন্ট, মোবাইল অ্যাপস, <br /> হোস্টিং, ডোমেন, এসএমএস এবং ইকমার্স <br /> সলিউশন।</div>
            </section>
            <section className="flex justify-center items-center">
                <div className="bg-[#555555] text-white flex justify-center items-center gap-2 rounded-full p-2 text-sm">WhatsApp Call 24/7<FaAngleRight  /></div>
                
            </section>
        </div>
    );
};

export default BannerText;