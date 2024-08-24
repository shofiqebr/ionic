import sales from '../../assets/pharma/MarketingSales-40x40.png'
import Accounting from '../../assets/pharma/Accounting-40x40.png'
import operation from '../../assets/pharma/Leadership-40x40.png'
import hr from '../../assets/pharma/GraphicalPresentation-40x40.png'
import inventory from '../../assets/pharma/Investor-40x40.png'
import crm from '../../assets/pharma/crm-40x40.png'
import { Element } from 'react-scroll'


const SectorsPharma = () => {
    return (
        <div className='pb-5 detailsWidth'>
            <Element name='sector' className='element'>
        <section className='flex flex-col justify-center items-center gap-2 mt-10 px-10'>
            <h1 className=' text-[#E90000] text-3xl text-center font-semibold '>আইওনিক ফার্মা ক্লাউড ভিত্তিক দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট
সফটওয়্যার এর ব্যবহারের সেক্টর সমূহ


</h1>
            <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
            <p className='text-center text-[#898989] font-semibold '>আইওনিক কর্পোরেশন এর পেশাদারদের একটি বিশেষজ্ঞ দল রয়েছে যারা যুগ যুগ ধরে সমাধান তৈরি করছে এবং
            স্থানীয় এবং বিদেশী উভয় শিল্পের ক্লায়েন্টদের বিশ্বাস এবং নির্ভর যোগ্যতার সাথে উল্লেখ যোগ্য ভাবে বৃদ্ধি পাচ্ছে।।</p>
        </section>
        </Element>



        {/* cards start here */}

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-5 md:px-3 pt-10 '>
            <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={sales} alt="" />
                </div>
                <h2 className='font-bold '> বিক্রয়</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
                অনলাইন কোটেশন এবং চালান তৈরি করুন এবং পাঠান, বিক্রয়, মনিটস্টাফের কর্মক্ষমতা ট্র্যাক করুন এবং আমাদের POS এর মাধ্যমে আপনার সমস্ত পণ্য বিক্রি ও সিঙ্ক করুন।
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>
            
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24'src={Accounting} alt="" />
                </div>
                <h2 className='font-bold '>হিসাব</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
                আপনার নগদ প্রবাহ, ক্রয়, কর, লাভ ও ক্ষতি, ব্যালেন্স শীট, বিক্রয়, অ্যাকাউন্টের চার্ট, আয় বিবরণী, সম্পদ এবং আরও অনেক কিছু পরিচালনা করুন।


</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>


            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={operation} alt="" />
                </div>
                <h2 className='font-bold '>অপারেশন</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
                কাজের আদেশ তৈরি এবং পরিচালনা করুন, ক্লায়েন্ট এবং কর্মচারী নিয়োগ করুন, আয় এবং চালান, সময়সূচী অ্যাপয়েন্টমেন্ট এবং আরও অনেক কিছু।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={hr} alt="" />
                </div>
                <h2 className='font-bold '>মানব সম্পদ</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
                অনলাইন কোটেশন ও চালান তৈরি করুন,পাঠান, বিক্রয় ট্র্যাক করুন, কর্মীদের কর্মক্ষমতা নিরীক্ষণ করুন ও আমাদের POS এবং আরও অনেক কিছুর মাধ্যমে সমস্ত পণ্য বিক্রি ও সিঙ্ক করুন।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={inventory} alt="" />
                </div>
                <h2 className='font-bold '>ইনভেন্টরি</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
                অনলাইন কোটেশন এবং চালান তৈরি করুন এবং পাঠান, বিক্রয়, মনিটস্টাফের কর্মক্ষমতা ট্র্যাক করুন এবং আমাদের POS এর মাধ্যমে আপনার সমস্ত পণ্য বিক্রি ও সিঙ্ক করুন।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}

                
            </div> 
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={crm} alt="" />
                </div>
                <h2 className='font-bold '>   গ্রাহক সম্পর্ক ব্যবস্থাপনা</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
                অনলাইন কোটেশন এবং চালান তৈরি করুন এবং পাঠান, বিক্রয়, মনিটস্টাফের কর্মক্ষমতা ট্র্যাক করুন এবং আমাদের POS এর মাধ্যমে আপনার সমস্ত পণ্য বিক্রি ও সিঙ্ক করুন।


</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
           
          
          
        </div>


        {/* cards ends here */}
        
    </div>
    );
};

export default SectorsPharma;