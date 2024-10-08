import finance from '../../../../assets/erp/Financial-Services-100x100.png'
import human from '../../../../assets/erp/human-resoruces-85x85-1.png'
import factory from '../../../../assets/erp/factory-85x85-1.png'
import sales from '../../../../assets/erp/sales-85x85-1.png'
import trading from '../../../../assets/erp/tigrt.png'
import customer from '../../../../assets/erp/customer-85x85-1.png'
import project from '../../../../assets/erp/project-85x85-1.png'
import data from '../../../../assets/erp/Data-Center-100x100.png'
import vendor from '../../../../assets/erp/vendor-85x85-1.png'

const Module = ({heading,subheading }) => {
    return (
        <div className='pb-5 detailsWidth'>
        <section className='flex flex-col justify-center items-center gap-2 mt-10 px-10'>
            <h1 className=' text-[#898989] text-xl font-semibold '>{heading}</h1>
            <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
            <p className='text-center text-[#898989] font-semibold '>{subheading}</p>
        </section>



        {/* cards start here */}

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-5 md:px-3 pt-10 '>
            <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg ' src={finance} alt="" />
                <h2 className='font-bold text-[18.5px] '> অ্যাকাউন্টিং ও হিসাবরক্ষণ</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>আপনার নগদ প্রবাহের একটি রিয়েল-টাইম ভিউ পান। পূর্ণাঙ্গ অ্যাকাউন্টিং মডিউল হিসাবরক্ষণের প্রতিটি দিককে কভার করে। লেনদেন রেকর্ড করা থেকে শুরু করে আর্থিক প্রতিবেদনের সংক্ষিপ্তকরণ এবং বিশ্লেষণ পর্যন্ত এক জায়গায় নগদ প্রবাহ পরিচালনা করার জন্য আপনার প্রয়োজনীয় সমস্ত সরঞ্জাম। এটা বইখাতা সহজ করা.
</p>
               

            {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
        
          
            </div>
            
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg'src={human} alt="" />
                <h2 className='font-bold text-[18.5px] '>এইচআর এবং বেতন</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>“IONIC ERP” কর্মীদের নিয়োগ এবং পরিচালনা এবং উপস্থিতি, ট্র্যাক পাতা এবং খরচ এবং অনবোর্ডিং, প্রশিক্ষণ এবং মূল্যায়ন পরিচালনা করা সহজ এবং দক্ষ করে তোলে। কনফিগারযোগ্য বেতন কাঠামো এবং ব্যক্তিগতকৃত পেস্লিপ সহ বেদনাহীনভাবে বেতন প্রক্রিয়া করুন।
</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>


            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={factory} alt="" />
                <h2 className='font-bold text-[18.5px] '>প্রস্তুতকারী / উৎপাদন</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>কার্যকরীভাবে রক্ষণাবেক্ষণ এবং উপকরণের বহুস্তর বিল, উত্পাদন পরিকল্পনা, জব কার্ড এবং ইনভেন্টরি পরিচালনা করুন। একটি ওপেন সোর্স, আধুনিক ক্লাউড ম্যানুফ্যাকচারিং ইআরপি সফ্টওয়্যার যা উত্পাদন চক্রকে সহজ করে, উপাদানের ব্যবহার ট্র্যাক করতে সহায়তা করে, ক্ষমতা পরিকল্পনা প্রদর্শন করে, সাবকন্ট্রাক্টিং পরিচালনা করে এবং আরও অনেক কিছু!</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={sales} alt="" />
                <h2 className='font-bold text-[18.5px] '>বিক্রয় এবং ক্রয়</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>ক্রয় থেকে বিক্রয় অর্ডার পর্যন্ত আপনার বিক্রয় এবং ক্রয় চক্র পরিচালনা করে উত্পাদনশীলতা এবং কম খরচ বাড়ান। ইনভেন্টরি লেভেল ট্র্যাক করুন, স্টক পুনরায় পূরণ করুন এবং সেলস অর্ডার, গ্রাহক, সরবরাহকারী, চালান, ডেলিভারেবল এবং অর্ডার পূর্ণতা পরিচালনা করুন — সবই এক ওপেন সোর্স সেলস এবং ক্রয় ইআরপি।</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={trading} alt="" />
                <h2 className='font-bold text-[18.5px] '>ওয়েবসাইট </h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>“IONIC ERP” ব্লগ, ওয়েব পৃষ্ঠা এবং ফর্ম সহ সম্পূর্ণ বৈশিষ্ট্যযুক্ত বিষয়বস্তু পরিচালনার সাথে আসে। একটি প্ল্যাটফর্ম যা আপনাকে মিনিটের মধ্যে আপনার ওয়েব উপস্থিতি তৈরি, ডিজাইন, পরিচালনা এবং বিকাশ করার স্বাধীনতা দেয়।</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}

                
            </div> 
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={customer} alt="" />
                <h2 className='font-bold text-[18.5px] '>সিআরএম</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>বিক্রয় প্রক্রিয়া অপ্টিমাইজ করে আরও গ্রাহকদের জিতুন এবং ধরে রাখুন। ট্র্যাক লিড, সুযোগ, এবং যেতে উদ্ধৃতি পাঠান. কম সময়ে বেশি কাজ করার জন্য “IONIC ERP” হল সেরা টুল। লিড পান, বিক্রয় ড্রাইভ করুন, জাগতিক কাজগুলিকে স্বয়ংক্রিয় করুন এবং আপনার সম্ভাবনার সাথে সংযোগ করুন এবং আপনার ব্যবসা বৃদ্ধি করুন — সবই প্রকৃত গ্রাহককেন্দ্রিক CRM এর সাথে।
</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={project} alt="" />
                <h2 className='font-bold text-[18.5px] '>প্রকল্প</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>সময়, বাজেট এবং লাভজনকতা অনুযায়ী অভ্যন্তরীণ এবং বাহ্যিক প্রকল্পগুলি সরবরাহ করুন। প্রকল্প দ্বারা কাজ, টাইমশীট এবং সমস্যা ট্র্যাক করুন। একটি টাস্ক-চালিত পদ্ধতির সাথে প্রকল্পগুলি সংগঠিত করুন, সময়সূচী করুন, পরিকল্পনা করুন এবং বিশ্লেষণ করুন যা টিম সহযোগিতাকে প্রবাহিত করবে এবং আপনার কাজকে ত্বরান্বিত করবে।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={data} alt="" />
                <h2 className='font-bold text-[18.5px] '>ইস্পাত এবং অ্যালুমিনিয়াম </h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>সম্পদের বিবরণ, তাদের গতিবিধি, মান সমন্বয় এবং অবচয় বজায় রাখুন এবং পরিচালনা করুন। “IONIC ERP” সম্পদ ব্যবস্থাপনাকে বেদনাদায়ক করে তোলে — ক্রয় থেকে ধ্বংস, আইটি অবকাঠামো থেকে সরঞ্জাম পর্যন্ত। আপনার প্রতিষ্ঠানের প্রতিটি শাখাকে এক কেন্দ্রীভূত ব্যবস্থায় কভার করুন। সম্পদগুলি আরও ভালভাবে পরিচালনা করার জন্য একটি একক টুলে জ্যাম-প্যাকড প্রচুর বৈশিষ্ট্য ব্যবহার করুন।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold text-[18.5px]  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
            <div  className='pb-10 bg-white p-3 px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                <img className='p-5 w-28 h-28 grayImg' src={vendor} alt="" />
                <h2 className='font-bold text-[18.5px] '>সাহায্য ডেস্ক</h2>
                <p className='text-center  text-sm text-[#5e5d5d] flex-grow'>একটি স্বজ্ঞাত ইস্যু ট্র্যাকার এবং একটি সমন্বিত জ্ঞান বেস সহ একটি ভাল পরিষেবা অভিজ্ঞতা প্রদান করুন৷ আজ আপনার SaaS সহায়তা ডেস্ক পুনরায় উদ্ভাবন করুন। “IONIC ERP”-এ আপনার গ্রাহক সহায়তাকে এক জায়গায় পরিমার্জিত করার জন্য প্রয়োজনীয় সবকিছু রয়েছে — একাধিক চ্যানেলে টিকিট ব্যবস্থাপনা, প্রক্রিয়া অটোমেশন, SLA ট্র্যাকিং, রিপোর্টিং এবং আরও অনেক কিছু।

</p>
                {/* <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a> */}
            </div>
          
          
        </div>


        {/* cards ends here */}
        
    </div>
    );
};

export default Module;