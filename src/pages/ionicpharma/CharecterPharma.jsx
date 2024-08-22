import pharmacy from '../../assets/pharma/pharmacy.png'
import pos from '../../assets/pharma/pos.png'
import smart from '../../assets/pharma/smart.png'
import users from '../../assets/pharma/users.png'

const CharecterPharma = () => {
    return (
        <div className="text-[#777777] text-xl mx-[405px]">
            <section>
            <h1 className="text-[#E90000] text-3xl text-center pt-5">আইওনিক ফার্মা সফটওয়্যারের দুর্দান্ত বৈশিষ্ট্যগুলি
           </h1>
            <p className="text-center py-2"> আমাদের শক্তিশালী ফার্মা সলিউশনে, আমরা আপনার গ্রাহকদের সন্তুষ্ট করার জন্য দুর্দান্ত বৈশিষ্ট্যগুলি অফার করেছি।</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2">
            <div className='pb-10  pt-3  px-5  flex flex-col gap-4  items-center'>
                <div className='bg-[#EAEAEA] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={pharmacy} alt="" />
                </div>
                <h2 className='font-bold text-black'> ফার্মেসি ম্যানেজমেন্ট মডিউল</h2>
                <p className='text-justify  text-[#5e5d5d] flex-grow'>
                আমাদের আইওনিক ফার্মা ব্যবস্থাপনা সমাধানের মাধ্যমে, আপনি আপনার সম্মানিত গ্রাহকদের রেকর্ড রাখতে এক বা একাধিক দোকান পরিচালনা করতে পারেন। আপনি যে রেকর্ডগুলি রাখতে পারেন তার মধ্যে রয়েছে পরিমাপ, নাম, ফোন নম্বর, কাজ চলছে বা সমাপ্ত কাজ, ঔষধের বিশদ বিবরণ ইত্যাদি। আপনি এই সমস্ত রেকর্ডগুলি গ্রাহকদের অনুসন্ধান করতে বা ঔষধ অনুযায়ী অর্ডারের বর্তমান অবস্থা পরীক্ষা করতে ব্যবহার করতে পারেন যা আপনি বর্তমান ট্র্যাক করতে পারেন। কাজ চলছে বা সমাপ্ত হওয়ার মতো বিভাগ অনুসারে ঔষধের স্ট্যাটাস মুদ্রণ এবং আটকানোর আদেশের স্থিতি।
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>
            <div className='pb-10  pt-3  px-5  flex flex-col gap-4  items-center'>
                <div className='bg-[#EAEAEA] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={pos} alt="" />
                </div>
                <h2 className='font-bold text-black'> POS ড্যাশবোর্ড</h2>
                <p className='text-justify  text-[#5e5d5d] flex-grow'>
                আমাদের আইওনিক ফার্মা ব্যবস্থাপনা সমাধানের মাধ্যমে, আপনি আপনার সম্মানিত গ্রাহকদের রেকর্ড রাখতে এক বা একাধিক দোকান পরিচালনা করতে পারেন। আপনি যে রেকর্ডগুলি রাখতে পারেন তার মধ্যে রয়েছে পরিমাপ, নাম, ফোন নম্বর, কাজ চলছে বা সমাপ্ত কাজ, ঔষধের বিশদ বিবরণ ইত্যাদি। আপনি এই সমস্ত রেকর্ডগুলি গ্রাহকদের অনুসন্ধান করতে বা ঔষধ অনুযায়ী অর্ডারের বর্তমান অবস্থা পরীক্ষা করতে ব্যবহার করতে পারেন যা আপনি বর্তমান ট্র্যাক করতে পারেন। কাজ চলছে বা সমাপ্ত হওয়ার মতো বিভাগ অনুসারে ঔষধের স্ট্যাটাস মুদ্রণ এবং আটকানোর আদেশের স্থিতি।
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>
            <div className='pb-10  pt-3  px-5  flex flex-col gap-4  items-center'>
                <div className='bg-[#EAEAEA] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={smart} alt="" />
                </div>
                <h2 className='font-bold text-black'> স্মার্ট অ্যাকাউন্টিং</h2>
                <p className='text-justify  text-[#5e5d5d] flex-grow'>
আপনি আপনার ঔষধের দোকানের জন্য ব্যক্তিগতকৃত অ্যাকাউন্ট চার্ট সংজ্ঞায়িত এবং পরিচালনা করতে পারেন। আমাদের ভ্যাট সক্রিয় অ্যাকাউন্টিং বিকল্পগুলি আপনাকে দৈনিক জার্নাল এন্ট্রি এবং লেনদেন, বিল, প্রাপ্য এবং প্রদেয়, এবং আর্থিক প্রতিবেদনগুলি পরিচালনা করতে দেয়। আমাদের সমাধান একক বা একাধিক নিবন্ধন বিকল্প এবং একাধিক অর্থপ্রদানের পদ্ধতি সহ একটি বৈশিষ্ট্য সমৃদ্ধ বিলিং সিস্টেম সরবরাহ করে। সফ্টওয়্যার দ্বারা মুদ্রিত প্রতিটি বিল ভ্যাট সক্ষম। আপনার মুলতুবি পেমেন্টগুলি পরিচালনা করার প্রয়োজন হলে গ্রাহকদের দ্বারা অর্থপ্রদান ট্র্যাক করা খুব সুবিধাজনক হবে।
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>
            <div className='pb-10  pt-3  px-5  flex flex-col gap-4  items-center'>
                <div className='bg-[#EAEAEA] rounded-full p-2 mt-2'>

                <img className='p-5 w-24 h-24' src={users} alt="" />
                </div>
                <h2 className='font-bold text-black'> একাধিক দোকান, কর্মচারী, সরবরাহকারী পরিচালনা</h2>
                <p className='text-justify  text-[#5e5d5d] flex-grow'>
আমাদের সফ্টওয়্যারটি ঔষধ এবং মালিকদের তাদের একাধিক ঔষধের দোকানের রেকর্ড পরিচালনা করতে দেয়। ডেটাতে গ্রাহকের বিবরণ, ঔষধের পরিমান, স্থিতি, অ্যাকাউন্ট এবং অন্যান্য বিবরণ অন্তর্ভুক্ত থাকে।
আমাদের ইন বিল্ড এইচআর পে-রোল সফ্টওয়্যার দিয়ে, আপনি প্রতিটি কর্মচারীর দ্বারা একদিনে শেষ করা সমস্ত কাজ রেকর্ড করতে পারেন। এটি প্রতিটি কর্মচারী এবং সরবরাহকারীকে কাজ বরাদ্দ করে এবং নিশ্চিত করে যে সমস্ত কাজ, প্রদত্ত তারিখের মধ্যে, সময়সীমার মধ্যে শেষ হয়েছে।
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>

            </section>
            
        </div>
    );
};

export default CharecterPharma;