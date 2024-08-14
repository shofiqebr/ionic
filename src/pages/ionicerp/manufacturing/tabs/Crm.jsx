import crm from '../../../../assets/erp/module-crm.svg'

const Crm = () => {
    return (
        <div>
        <section className='flex justify-between pb-5'>
            <div>
                <h1 className="text-3xl font-bold">সিআরএম</h1>
                <p className="text-xl font-medium text-[#777777]">
                আপনি আপনার গ্রাহকের যত্ন না নিলে, আপনার প্রতিযোগীরা করবে। – বব হুই</p>
            </div>
            <div><img className='w-96' src={crm} alt="" /></div>
        </section>


        <section>
            <p className='text-xl font-medium text-[#777777] pb-5'>ERP সলিউশনের CRM মডিউল আপনাকে গ্রাহকদের সাথে আপনার সম্পর্ককে সর্বোত্তমভাবে পরিচালনা করার অনুমতি দেয় আপনাকে একটি বিস্তৃত পরিসরের কার্যকারিতা প্রদান করে যা বিশেষভাবে আপনার গ্রাহক পরিষেবা উন্নত করার জন্য ডিজাইন করা হয়েছে। গ্রাহকের 360 ডিগ্রি ভিউ পেতে অ্যাকাউন্টিং সফ্টওয়্যার থেকে মেইলের মতো একাধিক প্ল্যাটফর্ম অনুসন্ধান করতে না বলুন, আপনি একক পৃষ্ঠায় কথোপকথন, অর্ডার, চালান, বিতরণ এবং অর্থপ্রদানের বিবরণ পেতে পারেন।</p>

            <p className='text-2xl text-[#777777]'>বৈশিষ্ট্য:</p>
            <ul className='list-disc pl-5 text-[#777777] text-lg pb-5'>
                <li>লিড -> তদন্ত -> গ্রাহক ব্যবস্থাপনা থেকে সম্পূর্ণ রূপান্তর চক্র পরিচালনা করুন।
                </li>
                <li>সিস্টেম রিমাইন্ডারের মাধ্যমে সময়মতো ফলো-আপ কল করতে ভুলবেন না।
                </li>
                <li>প্রতিটি গ্রাহক/লিডের জন্য Facebook এর মতো টাইম লাইন বৈশিষ্ট্য আপনাকে একক পৃষ্ঠায় সমস্ত মেল/ফোন কথোপকথন দেখতে দেয়।</li>
                <li>সিস্টেম জেনারেটেড এসকেলেশন মেলগুলির মাধ্যমে প্রতিনিধিত্ব এবং টাস্ক টাস্কের নিরীক্ষণকে আরও দক্ষ করে তুলুন।</li>
               
            </ul>
        </section>
    </div>
    );
};

export default Crm;