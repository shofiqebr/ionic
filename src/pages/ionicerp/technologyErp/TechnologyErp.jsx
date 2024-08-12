import technologyImg from '../../../assets/erp/erpnext-integration-final.png'

const TechnologyErp = () => {
    return (
        <div className='technology'>

            <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] text-xl font-semibold '>আপনার প্রিয় ``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার সাথে সংযোগ করুন</h1>
                <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold '>``আইওনিক ইআরপি`` বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর বিল্ট-ইন ইন্টিগ্রেশনের একটি হোস্ট রয়েছে যা আপনার ব্যবসাকে দ্রুত টেক অফ করতে সাহায্য করে।</p>
            </section>


            <section className='flex justify-center items-center w-[93%] mx-auto'>
                <img src={technologyImg} alt="" />
            </section>
         
        </div>
    );
};

export default TechnologyErp;