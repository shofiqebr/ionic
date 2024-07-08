// import restoraImg from '../../assets/my-restuara-250x100.png'
// import healthImg from '../../assets/ionichealth-logo-final-250x100.png'
// import shopImg from '../../assets/ionicshop-logo-250x100.png'
// import myBhara from '../../assets/my-bhara-250x100.png'
// import pharma from '../../assets/ionic-pharma-logo-2-250x100.png'
// import shikkha from '../../assets/shihkhachart-250x100.png'
// import kormochary from '../../assets/karmochary-250x100.png'
import ionicErp from '../../assets/ionicerp-250x100.png'


const ProductDetails = () => {
    return (
        <div>
            <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] font-semibold text-xl'>আমাদের পণ্যের বিস্তারিত জানুন</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>



            {/* cards start here */}

            <div>
                <div className='w-80 h-[360px] bg-white p-8 flex flex-col gap-4 justify-center items-center hover:bg-[#898989] hover:text-white relative'>
                    <img src={ionicErp} alt="" />
                    <h2 className='font-bold'>আইওনিক ইআরপি</h2>
                    <p className='text-center text-[14px] text-[#777777] hover:text-white'>ক্লাউড ভিত্তিক অনলাইন আইওনিক ইআরপি সফটওয়্যার দিয়ে আপনার যে কোন ব্যবসাকে সহজেই পরিচালনা করতে পারবেন। আইওনিক ইআরপি একটি দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার।</p>
                <button className='hidden hover:block'>VISIT NOW</button>
                </div>
             
            </div>


            {/* cards ends here */}
            
        </div>
    );
};

export default ProductDetails;