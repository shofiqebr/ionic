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

const ImportantSubject = () => {
    return (
        <div className='md:px-20 px-2'>
             <section className='flex flex-col justify-center items-center gap-2 mt-16 '>
                <h1 className=' text-[#898989] font-semibold text-xl text-center'>আমাদের সফটওয়্যার তৈরির সময় নিচের বিষয়গুলো গুরুত্ব দেওয়া হয়</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>



            <section className='py-14 grid md:grid-cols-6 grid-cols-2 md:gap-20 gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>বিক্রয়</p>
                    <img src={sales} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>সেবা</p>
                    <img src={service} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>মার্কেটিং</p>
                    <img src={marketing} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>ইকমার্স</p>
                    <img src={ecommarces} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>মানব সম্পদ/কর্মচারী</p>
                    <img src={employee} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>প্রস্তুতকারী প্রতিষ্ঠান</p>
                    <img src={factory} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>মেরামত</p>
                    <img src={repair} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>প্রকল্প পরিচালনা
                    </p>
                    <img src={project} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>সাবস্ক্রিপশন/ ভাড়া</p>
                    <img src={subscription} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>ইন্টিগ্রেশন</p>
                    <img src={integration} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>প্ল্যাটফর্ম</p>
                    <img src={platform} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>বিশ্লেষণ</p>
                    <img src={statistics} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>বিক্রেতা</p>
                    <img src={vendor} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>স্প্রেডশীট</p>
                    <img src={spreadsheet} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>অ্যাকাউন্টিং</p>
                    <img src={accounting} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>কর্মচারী গোষ্টী</p>
                    <img src={magnet} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>গ্রাহক</p>
                    <img src={customer} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-center font-bold'>অন্যান্য</p>
                    <img src={other} alt="" />
                </div>
            </section>
            
        </div>
    );
};

export default ImportantSubject;