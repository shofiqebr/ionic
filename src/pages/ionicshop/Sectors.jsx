import shopping from '../../assets/shop/shopping-65x65.png'
import fashion from '../../assets/shop/fashion-1-65x65.png'
import producing from '../../assets/shop/cpu-65x65.png'
import garments from '../../assets/shop/dress-1-65x65.png'
import computer from '../../assets/shop/home-65x65.png'
import drug from '../../assets/shop/drug-65x65.png'
import hotel from '../../assets/shop/baker-65x65.png'
import meeting from '../../assets/shop/meeting-65x65.png'
import { Element } from 'react-scroll'


const Sectors = () => {
    return (
        <div className='pb-5 detailsWidth'>
            <Element name='sector' className='element'>
        <section className='flex flex-col justify-center items-center gap-2 mt-10 px-10'>
            <h1 className=' text-[#898989] text-xl font-semibold '>আইওনিক সপ ক্লাউড ভিত্তিক দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর ব্যবহারের সেক্টর সমূহ

</h1>
            <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
            <p className='text-center text-[#898989] font-semibold '>আইওনিক কর্পোরেশন এর পেশাদারদের একটি বিশেষজ্ঞ দল রয়েছে যারা যুগ যুগ ধরে সমাধান তৈরি করছে এবং স্থানীয় এবং বিদেশী উভয় শিল্পের ক্লায়েন্টদের বিশ্বাস এবং নির্ভর যোগ্যতার সাথে উল্লেখ যোগ্য ভাবে বৃদ্ধি পাচ্ছে।</p>
        </section>
        </Element>



        {/* cards start here */}

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-5 md:px-3 pt-10 '>
            <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={shopping} alt="" />
                </div>
                <h2 className='font-bold '> সুপারসপ ও ডিপার্টমেন্ট স্টোর</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>
            
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24'src={garments} alt="" />
                </div>
                <h2 className='font-bold '>গার্মেন্স ও ফ্যাশন হাউস</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।


</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>


            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={producing} alt="" />
                </div>
                <h2 className='font-bold '>উৎপাদনকারী প্রতিষ্ঠান</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={fashion} alt="" />
                </div>
                <h2 className='font-bold '>ফ্যাশন হাউজ ও টেইলার্স</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={computer} alt="" />
                </div>
                <h2 className='font-bold '>কম্পিউটারের ব্যবসা</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}

                
            </div> 
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={drug} alt="" />
                </div>
                <h2 className='font-bold '>ফার্মাসিউটিক্যাল</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।


</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={shopping} alt="" />
                </div>
                <h2 className='font-bold '>ইকমার্স ও অনলাইন ব্যবসা</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।



</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={hotel} alt="" />
                </div>
                <h2 className='font-bold '>হোটেল ব্যবসা </h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।



</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <div className='bg-[#F1F1F1] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={meeting} alt="" />
                </div>
                <h2 className='font-bold '>সকল ট্রেডিং ব্যবসা</h2>
                <p className='text-center  text-[#5e5d5d] flex-grow'>
আমাদের আইওনিক সপ ম্যানেজমেন্ট সফটওয়্যারটিতে এমন সরঞ্জাম রয়েছে যা আপনাকে ইনভেন্টরি, রিপোর্টিং, কর্মচারী পরিচালন এবং রিয়েল টাইমে আরও অনেক কিছু পরিচালনা করতে সহায়তা করে।



</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
          
          
        </div>


        {/* cards ends here */}
        
    </div>
    );
};

export default Sectors;