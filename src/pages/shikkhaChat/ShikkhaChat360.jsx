import sales from '../../assets/sales-50x50.png'
import service from '../../assets/service-50x50.png'
import marketing from '../../assets/marketing-50x50.png'
import ecommarces from '../../assets/ecommarces-50x50.png'
import employee from '../../assets/employee.png'
import factory from '../../assets/factory-50x50.png'
import repair from '../../assets/repair-tools-50x50.png'
import project from '../../assets/project-50x50.png'
import subscription from '../../assets/subscription-model-50x50.png'
import integration from '../../assets/intregation-50x50.png'
import platform from '../../assets/cross-platform-50x50.png'
import statistics from '../../assets/statistics-50x50.png'
import vendor from '../../assets/vendor-50x50.png'
import spreadsheet from '../../assets/spreadsheet-50x50.png'
import accounting from '../../assets/accounting-2-50x50.png'
import magnet from '../../assets/magnet-50x50.png'
import customer from '../../assets/customer-50x50.png'
import other from '../../assets/other-50x50.png'
import shikkha from '../../assets/shihkhachart-250x100.png'


const ShikkhaChat360 = () => {
    return (
        <div className='   xl:px-[410px] xl:-ml-5 pt-5 shikkha360main'>
     <section className='flex flex-col justify-center items-center gap-2 mt-5 pb-5'>
                    <h1 className=' font-semibold text-xl text-center '>শিক্ষা চ্যাট ম্যানেজমেন্ট সিস্টেম সফটওয়্যারের 360 ডিগ্রি ফিচার সমূহ</h1>
                    <div className='w-10 h-[3px] bg-[#F8001F]'></div>
                </section>


       <section className='py-5 grid md:grid-cols-6 grid-cols-2 lg:gap-5 gap-10 mx-auto shikkha360'>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>বিক্রয়</p>
               <img className='xl:w-[70px]' src={sales} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>সেবা</p>
               <img className='xl:w-[70px]' src={service} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>মার্কেটিং</p>
               <img className='xl:w-[70px]' src={marketing} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>ইকমার্স</p>
               <img className='xl:w-[70px]' src={ecommarces} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>মানব সম্পদ/কর্মচারী</p>
               <img className='xl:w-[70px]' src={employee} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>প্রস্তুতকারী প্রতিষ্ঠান</p>
               <img className='xl:w-[70px]' src={factory} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>মেরামত</p>
               <img className='xl:w-[70px]' src={repair} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>প্রকল্প পরিচালনা
               </p>
               <img className='xl:w-[70px]' src={project} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>সাবস্ক্রিপশন/ ভাড়া</p>
               <img className='xl:w-[70px]' src={subscription} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>ইন্টিগ্রেশন</p>
               <img className='xl:w-[70px]' src={integration} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>প্ল্যাটফর্ম</p>
               <img className='xl:w-[70px]' src={platform} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>বিশ্লেষণ</p>
               <img className='xl:w-[70px]' src={statistics} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>বিক্রেতা</p>
               <img className='xl:w-[70px]' src={vendor} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>স্প্রেডশীট</p>
               <img className='xl:w-[70px]' src={spreadsheet} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>অ্যাকাউন্টিং</p>
               <img className='xl:w-[70px]' src={accounting} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>কর্মচারী গোষ্টী</p>
               <img className='xl:w-[70px]' src={magnet} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>গ্রাহক</p>
               <img className='xl:w-[70px]' src={customer} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center'>
               <p className='text-center font-bold'>অন্যান্য</p>
               <img className='xl:w-[70px]' src={other} alt="" />
           </div>
       </section>



       {/* ----------card------------- */}
       
       <div className="card1 text-center bg-white border mb-10 pb-5 mx-1 md:mx-3 lg:mx-44 xl:mx-0 mt-5 card360">
                           <div className='flex justify-center items-center pt-20'>

                            <img src={shikkha} alt="" />
                           </div>
                           <p className='text-3xl text-[#0B7A06] font-bold py-5'>Shikkha Chat</p>
                        <section className="flex flex-col gap-2 pb-5">
                            <p>শিক্ষা চ্যাট ১০০% ডেডিকেটেড সফ্টওয়্যার ।</p>
                            <p>50 GB Pure SSD storage</p>
                            <p>অভিভাবক ও ছাত্র/ছাত্রীদের জন্য আলাদা মোবাইল এ্যাপস ফ্রি।</p>
                            <p>শিক্ষকদের জন্য আলাদা মোবাইল এ্যাপস ফ্রি।</p>
                            <p>ফ্রি আনলিমিটেড ইমেইল ও এ্যাপস নোটিফিকেশন ব্যবস্থা।</p>
                            <p>ফ্রি আনলিমিটেড নতুন/চাহিদা অনুসারে মডিউল/ফিচার।</p>
                            <p>প্রতিষ্ঠানের নামে নিজস্ব ডোমেইন এ সফ্টওয়্যার ব্যবহার করতে পারবেন।</p>
                            <p>ফ্রি আনলিমিটেড SSD স্টোরেজ।</p>
                            <p>ফ্রি আনলিমিটেড মাসিক ব্যান্ডউইথ।</p>
                            <p>ফ্রি ডোমেন লাইফ টাইম (.com/.edu.bd)</p>
                            <p>ফ্রি SSL সার্টিফিকেট সাইট।</p>
                            <p>ফ্রি দৈনিক ব্যাকআপ।</p>
                            <p>ফ্রি আনলিমিটেড ডাটাবেস।</p>
                            <p>ফ্রি ডোমেন ট্রান্সফার ব্যবস্থা।</p>
                            <p>লাইটস্পিড ডেডিকেটেড সার্ভার।</p>
                            <p>99.9% আপটাইম গ্যারান্টি।</p>
                            <p>24/7/365 প্রিমিয়াম সাপোর্ট

</p>
                           
                           
                        </section>

                        <button className="bg-[#FF0020] text-white font-semibold p-2 rounded ">উপরের সকল সুবিধার খরচ প্রতি বছরে আলোচনা সাপেক্ষে</button>

                    </div>


   </div>
    );
};

export default ShikkhaChat360;