import restoraImg from '../../assets/new logo/my-restura-logo.png'
import healthImg from '../../assets/new logo/ionic-health-logo.png'
import shopImg from '../../assets/new logo/ionic-shop-logo.png'
import myBhara from '../../assets/new logo/my-bhara-logo.png'
import pharma from '../../assets/new logo/ionic-pharma-logo.png'
import shikkha from '../../assets/new logo/Shikkha-chart-logo.png'
import kormochary from '../../assets/new logo/karmochary-logo.png'
import ionicErp from '../../assets/new logo/ionic-erp-logo.png'
import tailor from '../../assets/new logo/my-tailor-logo.png'
import travel from '../../assets/new logo/ionic-travel-logo.png'
import ionicCorporationLogo from '../../assets/new logo/ionic-corporation-logo.png'
import ionicLogo from '../../assets/new logo/ionic-logo.png'
import transport from '../../assets/new logo/ionic-transport-logo.png'
import shakti from '../../assets/new logo/bikroy-shakti-logo.png'
import go from '../../assets/new logo/go-account-logo.png'
import ocean from '../../assets/new logo/ionic-ocean-logo.png'



const ProductDetails = () => {
    return (
        <div className='pt-5'>
            <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] font-semibold '>আমাদের পণ্যের বিস্তারিত জানুন</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>



            {/* cards start here */}

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-5 pt-10'>
                <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={ionicErp} alt="" />
                    <h2 className='font-bold '>আইওনিক ইআরপি</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন আইওনিক ইআরপি সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ইআরপি একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48'src={kormochary} alt="" />
                    <h2 className='font-bold '>কর্মচারী</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন “কর্মচারী” সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। “কর্মচারী” একটি দক্ষ কর্মচারী ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={shikkha} alt="" />
                    <h2 className='font-bold '>শিক্ষা চ্যাট</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন শিক্ষা চ্যাট সফটওয়্যার দিয়ে আপনার যে কোন এডুকেশন সিস্টেমকে সহজেই পরিচালনা করতে পারবেন। শিক্ষা চ্যাট হল একটি দক্ষ একাউন্টিং ও এডুকেশন ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={myBhara} alt="" />
                    <h2 className='font-bold '>মাই ভাড়া</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন My Bhara সফটওয়্যার দিয়ে আপনার ভাড়ার ব্যবস্থাপনাকে সহজেই পরিচালনা করুন। My Bhara একটি দক্ষ ভাড়া ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={healthImg} alt="" />
                    <h2 className='font-bold '>আইওনিক হসপিটাল</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন আইওনিক হসপিটাল সফটওয়্যার দিয়ে আপনার যে কোন হসপিটাল সিস্টেমকে সহজেই পরিচালনা করতে পারবেন। আইওনিক হসপিটাল হল একটি দক্ষ একাউন্টিং ও হসপিটাল ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={pharma} alt="" />
                    <h2 className='font-bold '>আইওনিক ফার্মা</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন আইওনিক ফার্মা সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ফার্মা একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={restoraImg} alt="" />
                    <h2 className='font-bold '>মাই রেস্তোরাঁ</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন My Restaurant সফটওয়্যার দিয়ে আপনার রেস্তোরাঁ ব্যবসাকে সহজেই পরিচালনা করুন। My Restaurant একটি দক্ষ রেস্তোরাঁ ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={shopImg} alt="" />
                    <h2 className='font-bold '>আইওনিক সপ</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন IONIC Shop সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক সপ একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={go} alt="" />
                    <h2 className='font-bold '>গো একাউন্ট</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন গো একাউন্ট সফটওয়্যার দিয়ে আপনার যে কোন একাউন্টিং ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। গো একাউন্ট একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={travel} alt="" />
                    <h2 className='font-bold '>আইওনিক ট্রাভেল</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন IONIC Travel সফটওয়্যার দিয়ে আপনার ট্রাভেল ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ট্রাভেল একটি দক্ষ একাউন্টিং ও ট্রাভেল ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={tailor} alt="" />
                    <h2 className='font-bold '>আইওনিক টেইলার্স</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন IONIC Tailor সফটওয়্যার দিয়ে আপনার টেইলার্স ব্যবসাকে সহজেই পরিচালনা করুন। IONIC Tailor একটি দক্ষ টেইলার্স ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={shakti} alt="" />
                    <h2 className='font-bold '>বিক্রয় শক্তি</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন Bikroy Shakti সফটওয়্যার দিয়ে আপনার ব্যবসাকে সহজেই পরিচালনা করুন। Bikroy Shakti একটি দক্ষ একাউন্টিং ও ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={ocean} alt="" />
                    <h2 className='font-bold '>আইওনিক ওসেন</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন IONIC Ocean সফটওয়্যার দিয়ে আপনার অনলাইন আনলিমিটেড স্টোরেজ ব্যবহার করুন। IONIC Ocean একটি আনলিমিটেড অনলাইন স্টোরেজ ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={transport} alt="" />
                    <h2 className='font-bold '>আইওনিক ট্রান্সপোর্ট</h2>
                    <p className='text-center  text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন IONIC Transport সফটওয়্যার দিয়ে আপনার রিপেয়ার ব্যবসাকে সহজেই পরিচালনা করুন। IONIC Transport একটি দক্ষ রিপেয়ার ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।
                    A Business ERP</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={ionicLogo} alt="" />
                    <h2 className='font-bold '>আইওনিক </h2>
                    <p className='text-center  text-[#5e5d5d]'>আইওনিক ক্লাউড ভিত্তিক অনলাইন IONIC সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। IONIC একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div>
                {/* <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={ionicCorporationLogo} alt="" />
                    <h2 className='font-bold '>আইওনিক ওসেন</h2>
                    <p className='text-center text-[#5e5d5d]'>ক্লাউড ভিত্তিক অনলাইন IONIC Ocean সফটওয়্যার দিয়ে আপনার অনলাইন আনলিমিটেড স্টোরেজ ব্যবহার করুন। IONIC Ocean একটি আনলিমিটেড অনলাইন স্টোরেজ ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>VISIT NOW</button>
                </div> */}





             
            </div>


            {/* cards ends here */}
            
        </div>
    );
};

export default ProductDetails;