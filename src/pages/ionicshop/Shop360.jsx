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


const Shop360 = ({title,  titleColor}) => {
    return (
        <div className='mx-[555px] '>
             <section className='flex flex-col justify-center items-center gap-2 mt-5 pb-5'>
                    <h1 className={` font-semibold text-2xl text-center ${titleColor} `}>{title}</h1>
                   
                </section>


       <section className='py-5 grid md:grid-cols-6 grid-cols-2 lg:gap-5 xl:gap-20 gap-10 mx-auto shikkha360'>
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
            
        </div>
    );
};

export default Shop360;