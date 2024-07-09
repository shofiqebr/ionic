import { FaAngleRight } from "react-icons/fa";

const BannerText = () => {
    return (
        <div className="flex justify-end flex-col md:flex-row  gap-10  pt-44 xl:mr-20 mx-2 ">
            <section className="text-right ">
                <div className="lg:text-[30px] text-[29px] font-semibold text-[#969696]">আইওনিক কর্পোরেশন <br className="hidden lg:block" /> বাংলাদেশের একটি বিশ্বস্ত <br className="hidden lg:block" /> ডিজিটাল আইটি সলিউশন <br className="hidden lg:block" /> কোম্পানি ।</div>
                <div className="xl:w-[550px] lg:w-[xl0px] mt-5 h-1 bg-[#F8001F]"></div>
            </section>
            <section className="text-left md:w-[380px] flex flex-col gap-5">
                <div className="h-1 lg:w-[350px] md:w-[210px] bg-black "></div>
                <div className="text-[#969696] lg:text-[20px] md:text-[18px] text-[20px]">যে কোন বিজনেস সলিউশন সফটওয়্যার,<br className="hidden xl:block" /> ইআরপি সফটওয়্যার, ক্লাউড স্টোরেজ, <br className="hidden xl:block" /> ওয়েবসাইট ডেভেলপমেন্ট, মোবাইল অ্যাপস, <br className="hidden xl:block" /> হোস্টিং, ডোমেন, এসএমএস এবং ইকমার্স <br className="hidden xl:block" /> সলিউশন।</div>
            </section>
            <section className="flex justify-center items-center">
                <div className="bg-[#555555] text-white flex justify-center items-center xl:gap-2 rounded-full p-2 xl:text-sm text-xs "><pre>WhatsApp Call  24/7</pre><FaAngleRight  /></div>
                
            </section>
        </div>
    );
};

export default BannerText;