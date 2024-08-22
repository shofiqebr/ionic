import basic from '../../assets/shop/basic-60x60.png'
import professionals from '../../assets/shop/professionals-60x60.png'
import ProfessionalPlus from '../../assets/shop/professionals-plus-60x60.png'
import eCommerce from '../../assets/shop/professionals-pro-60x60.png'
import ProfessionalPro from '../../assets/shop/Ultimate-Pro-60x60.png'
import ultimate from '../../assets/shop/human-resoruces-60x60.png'

const PriceManagementShop = ({title,subtitle,titleColor}) => {
    return (
        <div className="mx-[405px] py-5">
            <section className='flex flex-col justify-center items-center gap-2 mt-5 pb-5'>
                <h1 className={` font-semibold text-2xl text-center ${titleColor} `}>{title}

                </h1>
                <p className="text-sm text-[#F9893F]">
                    *** আইওনিক সপ একাউন্টিং ও বিজনেস এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।
                </p>
                <p>{subtitle}
                   
                </p>

            </section>




            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card1 text-center bg-white border mb- pb-10 flex flex-col justify-center items-center pt-5 px-10">
                <div>
                    <img src={basic} alt="" />
                </div>
                <h2 className="text-[#F9893F] 2xl:text-2xl lg:text-[12.9px] py-1 font-bold pt-5">Basic</h2>
                <h2 className="font-bold py-1 lg:text-[16px]">প্রতি মাসে খরচ মাত্র <br /> ৪১৭ টাকা</h2>
                <section className="flex flex-col gap-2 pb-5 text-black flex-grow">
                    <p>১ টি ব্যবসা প্রতিষ্ঠান</p>
                    <p>১ জন ব্যবহারকারী</p>
                    <p>১০০ টি পণ্য</p>
                    <p>১০০০০ বিল</p>
                    <p>মেয়াদকাল ১ বছর</p>
                    <p>মোবাইল (অ্যান্ড্রয়েড) অ্যাপ অনলাইন/অফলাইন সংস্করণ</p>
                </section>
                <p className="text-xs text-gray-500">*** IONIC Shop এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।</p>
                <button className="bg-[#F9893F] text-white font-medium p-2 rounded text-xs xl:text-sm">আবেদন করুন</button>
            </div>

            <div className="card1 text-center bg-white border mb- pb-10 flex flex-col justify-center items-center pt-5 px-10">
            <div>
                    <img src={professionals} alt="" />
                </div>
                <h2 className="text-[#F9893F] 2xl:text-2xl lg:text-[12.9px] py-1 font-bold pt-5">Professional</h2>
                <h2 className="font-bold py-1 lg:text-[16px]">প্রতি মাসে খরচ মাত্র <br /> ৮৩৪ টাকা</h2>
                <section className="flex flex-col gap-2 pb-5 text-black flex-grow">
                    <p>১ টি ব্যবসা প্রতিষ্ঠান</p>
                    <p>আনলিমিটেড ব্যবহারকারী</p>
                    <p>আনলিমিটেড পণ্য/সেবা</p>
                    <p>আনলিমিটেড বিল</p>
                    <p>মেয়াদকাল ১ বছর</p>
                    <p>রিপেয়ার ম্যানেজমেন্ট মডিউল</p>
                    <p>এইচআরএম ম্যানেজমেন্ট মডিউল</p>
                    <p>এসেন্সিয়াল ম্যানেজমেন্ট মডিউল</p>
                    <p>ডিজিটাল ক্যাটালগ মডিউল</p>
                    <p>এপিআই ম্যানেজমেন্ট মডিউল</p>
                    <p>এসেট ম্যানেজমেন্ট মডিউল</p>
                    <p>মোবাইল (অ্যান্ড্রয়েড) অ্যাপ অনলাইন/অফলাইন সংস্করণ</p>
                </section>
                <p className="text-xs text-gray-500">*** IONIC Shop এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।</p>
                <button className="bg-[#F9893F] text-white font-medium p-2 rounded text-xs xl:text-sm">আবেদন করুন</button>
            </div>

            <div className="card1 text-center bg-white border mb- pb-10 flex flex-col justify-center items-center pt-5 px-10">
            <div>
                    <img src={ProfessionalPlus} alt="" />
                </div>
                <h2 className="text-[#F9893F] 2xl:text-2xl lg:text-[12.9px] py-1 font-bold pt-5">Professional Plus</h2>
                <h2 className="font-bold py-1 lg:text-[16px]">প্রতি মাসে খরচ মাত্র <br /> ১৩৩৪ টাকা</h2>
                <section className="flex flex-col gap-2 pb-5 text-black flex-grow">
                    <p>৫ টি ব্যবসা প্রতিষ্ঠান</p>
                    <p>আনলিমিটেড ব্যবহারকারী</p>
                    <p>আনলিমিটেড পণ্য/সেবা</p>
                    <p>আনলিমিটেড বিল</p>
                    <p>মেয়াদকাল ১ বছর</p>
                    <p>রিপেয়ার ম্যানেজমেন্ট মডিউল</p>
                    <p>এইচআরএম ম্যানেজমেন্ট মডিউল</p>
                    <p>ম্যানুফ্যাকচারিং ম্যানেজমেন্ট মডিউল</p>
                    <p>এসেন্সিয়াল ম্যানেজমেন্ট মডিউল</p>
                    <p>ইকমার্স ম্যানেজমেন্ট মডিউল</p>
                    <p>ডিজিটাল ক্যাটালগ মডিউল</p>
                    <p>এপিআই ম্যানেজমেন্ট মডিউল</p>
                    <p>এসেট ম্যানেজমেন্ট মডিউল</p>
                    <p>মোবাইল (অ্যান্ড্রয়েড) অ্যাপ অনলাইন/অফলাইন সংস্করণ</p>
                </section>
                <p className="text-xs text-gray-500">*** IONIC Shop এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।</p>
                <button className="bg-[#F9893F] text-white font-medium p-2 rounded text-xs xl:text-sm">আবেদন করুন</button>
            </div>

            <div className="card1 text-center bg-white border mb- pb-10 flex flex-col justify-center items-center pt-5 px-10">
            <div>
                    <img src={eCommerce} alt="" />
                </div>
                <h2 className="text-[#F9893F] 2xl:text-2xl lg:text-[12.9px] py-1 font-bold pt-5">eCommerce Pro</h2>
                <h2 className="font-bold py-1 lg:text-[16px]">প্রতি মাসে খরচ মাত্র <br /> ১৬৬৭ টাকা</h2>
                <section className="flex flex-col gap-2 pb-5 text-black flex-grow">
                    <p>০৫ টি ব্যবসা প্রতিষ্ঠান</p>
                    <p>আনলিমিটেড ব্যবহারকারী</p>
                    <p>আনলিমিটেড পণ্য/সেবা</p>
                    <p>আনলিমিটেড বিল</p>
                    <p>মেয়াদকাল ১ বছর</p>
                    <p>রিপেয়ার ম্যানেজমেন্ট মডিউল</p>
                    <p>এইচআরএম ম্যানেজমেন্ট মডিউল</p>
                    <p>এসেন্সিয়াল ম্যানেজমেন্ট মডিউল</p>
                    <p>ইকমার্স ম্যানেজমেন্ট মডিউল</p>
                    <p>ডিজিটাল ক্যাটালগ মডিউল</p>
                    <p>এপিআই ম্যানেজমেন্ট মডিউল</p>
                    <p>এসেট ম্যানেজমেন্ট মডিউল</p>
                    <p>মোবাইল (অ্যান্ড্রয়েড) অ্যাপ অনলাইন/অফলাইন সংস্করণ</p>
                    <p>প্রফেসনাল ইকমার্স ওয়েবসাইট</p>
                    <p>ডোমেইন এবং ডেডিকেটেড হোস্টিং</p>
                </section>
                <p className="text-xs text-gray-500">*** IONIC Shop এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।</p>
                <button className="bg-[#F9893F] text-white font-medium p-2 rounded text-xs xl:text-sm">আবেদন করুন</button>
            </div>
            <div className="card1 text-center bg-white border mb- pb-10 flex flex-col justify-center items-center pt-5 px-10">
            <div>
                    <img src={ProfessionalPro} alt="" />
                </div>
    <h2 className="text-[#F9893F] 2xl:text-2xl lg:text-[12.9px] py-1 font-bold pt-5">Professional Pro</h2>
    <h2 className="font-bold py-1 lg:text-[16px]">কল করুন 01958442200</h2>
    <section className="flex flex-col gap-2 pb-5 text-black flex-grow">
        <p>আনলিমিটেড ব্যবসা প্রতিষ্ঠান</p>
        <p>আনলিমিটেড ব্যবহারকারী</p>
        <p>আনলিমিটেড পণ্য/সেবা</p>
        <p>আনলিমিটেড বিল</p>
        <p>মেয়াদকাল ১ বছর</p>
        <p>রিপেয়ার ম্যানেজমেন্ট মডিউল</p>
        <p>এইচআরএম ম্যানেজমেন্ট মডিউল</p>
        <p>ম্যানুফ্যাকচারিং ম্যানেজমেন্ট মডিউল</p>
        <p>এসেন্সিয়াল ম্যানেজমেন্ট মডিউল</p>
        <p>ইকমার্স ম্যানেজমেন্ট মডিউল</p>
        <p>প্রজেক্ট ম্যানেজমেন্ট মডিউল</p>
        <p>সি আর এম ম্যানেজমেন্ট মডিউল</p>
        <p>ডিজিটাল ক্যাটালগ মডিউল</p>
        <p>এপিআই ম্যানেজমেন্ট মডিউল</p>
        <p>এসেট ম্যানেজমেন্ট মডিউল</p>
        <p>চার্ট অফ অ্যাকাউন্ট (COA) মডিউল</p>
        <p>ফিল্ড ফোর্স মডিউল</p>
        <p>স্প্রেডশিট মডিউল</p>
        <p>মোবাইল (অ্যান্ড্রয়েড) অ্যাপ অনলাইন/অফলাইন সংস্করণ</p>
    </section>
    <p className="text-xs text-gray-500">*** IONIC Shop এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।</p>
    <button className="bg-[#F9893F] text-white font-medium p-2 rounded text-xs xl:text-sm">আবেদন করুন</button>
</div>

<div className="card1 text-center bg-white border mb- pb-10 flex flex-col justify-center items-center pt-5 px-10">
<div>
                    <img src={ultimate} alt="" />
                </div>
    <h2 className="text-[#F9893F] 2xl:text-2xl lg:text-[12.9px] py-1 font-bold pt-5">Ultimate Pro</h2>
    <h2 className="font-bold py-1 lg:text-[16px]">কল করুন 01958442200</h2>
    <section className="flex flex-col gap-2 pb-5 text-black flex-grow">
        <p>আনলিমিটেড ব্যবসা প্রতিষ্ঠান</p>
        <p>আনলিমিটেড ব্যবহারকারী</p>
        <p>আনলিমিটেড পণ্য/সেবা</p>
        <p>আনলিমিটেড বিল</p>
        <p>মেয়াদকাল- লাইফটাইম</p>
        <p>রিপেয়ার ম্যানেজমেন্ট মডিউল</p>
        <p>এইচআরএম ম্যানেজমেন্ট মডিউল</p>
        <p>এসেন্সিয়াল ম্যানেজমেন্ট মডিউল</p>
        <p>ইকমার্স ম্যানেজমেন্ট মডিউল</p>
        <p>ম্যানুফ্যাকচারিং ম্যানেজমেন্ট মডিউল</p>
        <p>প্রজেক্ট ম্যানেজমেন্ট মডিউল</p>
        <p>সিআরএম ম্যানেজমেন্ট মডিউল</p>
        <p>ডিজিটাল ক্যাটালগ মডিউল</p>
        <p>এপিআই ম্যানেজমেন্ট মডিউল</p>
        <p>এসেট ম্যানেজমেন্ট মডিউল</p>
        <p>চার্ট অফ অ্যাকাউন্ট (COA) মডিউল</p>
        <p>ফিল্ড ফোর্স মডিউল</p>
        <p>স্প্রেডশিট মডিউল</p>
        <p>মোবাইল (অ্যান্ড্রয়েড) অ্যাপ অনলাইন/অফলাইন সংস্করণ</p>
        <p>কাষ্টমারের নিজস্ব কাস্টম লিঙ্ক</p>
        <p>কাষ্টমারের নিজস্ব কাস্টমাইজড</p>
    </section>
    <p className="text-xs text-gray-500">*** IONIC Shop এর সকল প্যাকেজ বাৎসরিক চার্জ প্রযোজ্য।</p>
    <button className="bg-[#F9893F] text-white font-medium p-2 rounded text-xs xl:text-sm">আবেদন করুন</button>
</div>


        </section>

        </div>
    );
};

export default PriceManagementShop;