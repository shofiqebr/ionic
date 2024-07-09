import restoraImg from '../../assets/my-restuara-250x100.png'
import healthImg from '../../assets/ionichealth-logo-final-250x100.png'
import shopImg from '../../assets/ionicshop-logo-250x100.png'
import myBhara from '../../assets/my-bhara-250x100.png'
import pharma from '../../assets/ionic-pharma-logo-2-250x100.png'
import shikkha from '../../assets/shihkhachart-250x100.png'
import kormochary from '../../assets/karmochary-250x100.png'
import ionicErp from '../../assets/ionicerp-250x100.png'
import tailor from '../../assets/tailor.png'
import travel from '../../assets/travel.png'
import diagnostic from '../../assets/diagnostic.png'
import account from '../../assets/account.png'
import ocean from '../../assets/ocean.png'
import repair from '../../assets/repair.png'
import talksale from '../../assets/talksale.png'
import store from '../../assets/store.png'
import protidhoniall from '../../assets/protidhoniall.png'
import quicker from '../../assets/quicker.png'


const ProductDetails = () => {
    return (
        <div className='py-10'>
            <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] font-semibold text-xl'>আমাদের পণ্যের বিস্তারিত জানুন</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>



            {/* cards start here */}

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20 px-5 pt-10'>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#898989] hover:text-white relative group transition duration-300'>
                    <img src={ionicErp} alt="" />
                    <h2 className='font-bold'>আইওনিক ইআরপি</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন আইওনিক ইআরপি সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ইআরপি একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#F68B1F] hover:text-white relative group transition duration-300'>
                    <img src={kormochary} alt="" />
                    <h2 className='font-bold'>কর্মচারী</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন “কর্মচারী” সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। “কর্মচারী” একটি দক্ষ কর্মচারী ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#6E97B0] hover:text-white relative group transition duration-300'>
                    <img src={shikkha} alt="" />
                    <h2 className='font-bold'>শিক্ষা চ্যাট</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন শিক্ষা চ্যাট সফটওয়্যার দিয়ে আপনার যে কোন এডুকেশন সিস্টেমকে সহজেই পরিচালনা করতে পারবেন। শিক্ষা চ্যাট হল একটি দক্ষ একাউন্টিং ও এডুকেশন ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#2A2050] hover:text-white relative group transition duration-300'>
                    <img src={myBhara} alt="" />
                    <h2 className='font-bold'>মাই ভাড়া</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন My Bhara সফটওয়্যার দিয়ে আপনার ভাড়ার ব্যবস্থাপনাকে সহজেই পরিচালনা করুন। My Bhara একটি দক্ষ ভাড়া ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#8DC63F] hover:text-white relative group transition duration-300'>
                    <img src={healthImg} alt="" />
                    <h2 className='font-bold'>আইওনিক হসপিটাল</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন আইওনিক হসপিটাল সফটওয়্যার দিয়ে আপনার যে কোন হসপিটাল সিস্টেমকে সহজেই পরিচালনা করতে পারবেন। আইওনিক হসপিটাল হল একটি দক্ষ একাউন্টিং ও হসপিটাল ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#ED1C24] hover:text-white relative group transition duration-300'>
                    <img src={pharma} alt="" />
                    <h2 className='font-bold'>আইওনিক ফার্মা</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন আইওনিক ফার্মা সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ফার্মা একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#ED1C24] hover:text-white relative group transition duration-300'>
                    <img src={restoraImg} alt="" />
                    <h2 className='font-bold'>মাই রেস্তোরাঁ</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন My Restaurant সফটওয়্যার দিয়ে আপনার রেস্তোরাঁ ব্যবসাকে সহজেই পরিচালনা করুন। My Restaurant একটি দক্ষ রেস্তোরাঁ ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#E37D00] hover:text-white relative group transition duration-300'>
                    <img src={shopImg} alt="" />
                    <h2 className='font-bold'>আইওনিক সপ</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন IONIC Shop সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক সপ একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#FF0000] hover:text-white relative group transition duration-300'>
                    <img src={tailor} alt="" />
                    <h2 className='font-bold'>আইওনিক টেইলার্স</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন IONIC Tailor সফটওয়্যার দিয়ে আপনার টেইলার্স ব্যবসাকে সহজেই পরিচালনা করুন। IONIC Tailor একটি দক্ষ টেইলার্স ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#1B75BB] hover:text-white relative group transition duration-300'>
                    <img src={travel} alt="" />
                    <h2 className='font-bold'>আইওনিক ট্রাভেল</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন IONIC Travel সফটওয়্যার দিয়ে আপনার ট্রাভেল ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ট্রাভেল একটি দক্ষ একাউন্টিং ও ট্রাভেল ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#1B1464] hover:text-white relative group transition duration-300'>
                    <img src={diagnostic} alt="" />
                    <h2 className='font-bold'>মাই ডায়গনোস্টিক</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন মাই ডায়গনোস্টিক সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। মাই ডায়গনোস্টিক একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#26A66A] hover:text-white relative group transition duration-300'>
                    <img src={account} alt="" />
                    <h2 className='font-bold'>গো একাউন্ট</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন গো একাউন্ট সফটওয়্যার দিয়ে আপনার যে কোন একাউন্টিং ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। গো একাউন্ট একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#2A8FCE] hover:text-white relative group transition duration-300'>
                    <img src={ocean} alt="" />
                    <h2 className='font-bold'>আইওনিক ওসেন</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন IONIC Ocean সফটওয়্যার দিয়ে আপনার অনলাইন আনলিমিটেড স্টোরেজ ব্যবহার করুন। IONIC Ocean একটি আনলিমিটেড অনলাইন স্টোরেজ ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#819831] hover:text-white relative group transition duration-300'>
                    <img src={repair} alt="" />
                    <h2 className='font-bold'>আইওনিক রিপেয়ার</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন IONIC Repair সফটওয়্যার দিয়ে আপনার রিপেয়ার ব্যবসাকে সহজেই পরিচালনা করুন।IONIC Repair একটি দক্ষ রিপেয়ার ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#3F2664] hover:text-white relative group transition duration-300'>
                    <img src={talksale} alt="" />
                    <h2 className='font-bold'>টকসেল</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন TalkSale সফটওয়্যার দিয়ে আপনার ব্যবসাকে সহজেই পরিচালনা করুন। TalkSale একটি দক্ষ একাউন্টিং ও ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#61ADDF] hover:text-white relative group transition duration-300'>
                    <img src={store} alt="" />
                    <h2 className='font-bold'>আইওনিক স্টোর</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন IONIC Store সফটওয়্যার দিয়ে আপনার ব্যবসাকে সহজেই পরিচালনা করুন। IONIC Store একটি দক্ষ ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
               
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#FCB040] hover:text-white relative group transition duration-300'>
                    <img src={protidhoniall} alt="" />
                    <h2 className='font-bold'>প্রতিধ্বনি</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন Protidhoni সফটওয়্যার দিয়ে আপনার ব্যবসাকে সহজেই পরিচালনা করুন। Protidhoni একটি দক্ষ একাউন্টিং ও ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
                <div className=' h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#191750] hover:text-white relative group transition duration-300'>
                    <img src={quicker} alt="" />
                    <h2 className='font-bold'>কুইকার</h2>
                    <p className='text-center text-[14px] text-[#777777] group-hover:text-white'>ক্লাউড ভিত্তিক অনলাইন Quicker সফটওয়্যার দিয়ে আপনার ব্যবসাকে সহজেই পরিচালনা করুন। IONIC Repair একটি দক্ষ Online Food & Grocery Ordering & Delivery Solution সফটওয়্যার।</p>
                <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold  transform opacity-0 group-hover:opacity-100 group-hover:block group-hover:-translate-y-5 transition duration-300 ease-in-out absolute -bottom-9'>VISIT NOW</button>
                </div>
             
            </div>


            {/* cards ends here */}
            
        </div>
    );
};

export default ProductDetails;