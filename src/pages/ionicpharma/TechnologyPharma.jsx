import server from '../../assets/shop/How_IONICPOS_Works.png'
import javascript from '../../assets/JavaScript-JS.png'
import redux from '../../assets/REDUX.png'
import firebase from '../../assets/Firebase.png'
import react from '../../assets/React.png'

import php from '../../assets/PHP.png'
import laravel from '../../assets/laravel.png'

const TechnologyPharma = () => {
    return (
        <div className="mx-[405px] grid grid-cols-1 lg:grid-cols-2  gap-10 py-5">
            <section className="text-xl text-[#777777] flex flex-col gap-5 ">
                <h1 className="text-[#E90000] text-2xl text-center">আইওনিক ফার্মা ক্লাউড ভিত্তিক দক্ষ একাউন্টিং ও
                    বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর ব্যবহৃত
                    টেকনোলজি সমূহ</h1>
                <p>পুরো কার্যকারিতাটি আইওনিক ফার্মা অ্যাডমিন অ্যাপ্লিকেশন থেকে একটি কেন্দ্রীয় সার্ভার নিয়ে গঠিত যা একটি ভার্চুয়াল ইনভেন্টরি হিসাবে কাজ করে। আইওনিক ফার্মা এর মাধ্যমে, আপনি বিভিন্ন আউটলেট থেকে অফলাইন এবং অনলাইন উভয় মোডে অর্ডার দিতে পারেন যা ব্যাক -এন্ড সিস্টেমে ইনভেন্টরিতে প্রভাব ফেলবে এবং বিভিন্ন আউটলেটে স্টকের সঠিক অবস্থা দেখাবে। এছাড়াও অনলাইন অর্ডার স্থাপন বা মোবাইল অ্যাপ্লিকেশন অর্ডারের সাথে একীভূত হলে, এটি স্বয়ংক্রিয়ভাবে ভার্চুয়াল ইনভেন্টরির উপরও প্রভাব ফেলবে। সামগ্রিক পদ্ধতি আপনাকে স্পষ্ট স্টক তথ্য এবং গ্রাহকের কাছে সঠিক বিতরণের সাথে সহজে বিক্রি করতে দেয়।</p>
                <p>WOOCOMMERCE এর সাথে ইন্টিগ্রেশন। আইওনিক ফার্মা উন্নত সংযোগের জন্য আইওনিক ফার্মাকে সংহত করে। এই ইন্টিগ্রেশন ব্যবহারকারীকে বিক্রয় আদেশ, ভ্যাট গণনা, ইনভেন্টরি চেকিং, সেলস রিটার্ন ইত্যাদি করতে সক্ষম করে।</p>
                <p>পুরো কার্যকারিতাটি আইওনিক ফার্মা অ্যাডমিন অ্যাপ্লিকেশন থেকে একটি কেন্দ্রীয় সার্ভার নিয়ে গঠিত যা একটি ভার্চুয়াল ইনভেন্টরি হিসাবে কাজ করে। আইওনিক ফার্মা এর মাধ্যমে, আপনি বিভিন্ন আউটলেট থেকে অফলাইন এবং অনলাইন উভয় মোডে অর্ডার দিতে পারেন যা ব্যাক -এন্ড সিস্টেমে ইনভেন্টরিতে প্রভাব ফেলবে এবং বিভিন্ন আউটলেটে স্টকের সঠিক অবস্থা দেখাবে। এছাড়াও অনলাইন অর্ডার স্থাপন বা মোবাইল অ্যাপ্লিকেশন অর্ডারের সাথে একীভূত হলে, এটি স্বয়ংক্রিয়ভাবে ভার্চুয়াল ইনভেন্টরির উপরও প্রভাব ফেলবে। সামগ্রিক পদ্ধতি আপনাকে স্পষ্ট স্টক তথ্য এবং গ্রাহকের কাছে সঠিক বিতরণের সাথে সহজে বিক্রি করতে দেয়।</p>
            </section>
            <section>
            <div className="grid  grid-cols-1   rounded-lg">
           

           <div className=''>
           <section className=" grid md:grid-cols-3 grid-cols-2 items-center  justify-center gap-5 pt-3 bg-white ">
               <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                   <img className="w- pb-5" src={php}/>
               </div>
               <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                   <img className="w- pb-5" src={laravel}/>
               </div>
               <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                   <img className="w- pb-5" src={javascript}/>
               </div>
               <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                   <img className="w- pb-5" src={react}/>
               </div>
               <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                   <img className="w- pb-5" src={redux}/>
               </div>
               <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                   <img className="w- pb-5" src={firebase}/>
               </div>
           </section>
           </div>
           <div>
       
           <div className="flex flex-col justify-center items-center  bg-white  p-4 ">
           <img className='h-[px] hover:scale-105' src={server} alt="" />
               </div>
           </div>
           
       </div>
            </section>

        </div>
    );
};

export default TechnologyPharma;