import server from '../../assets/shop/How_IONICPOS_Works.png'
import javascript from '../../assets/JavaScript-JS.png'
import redux from '../../assets/REDUX.png'
import firebase from '../../assets/Firebase.png'
import react from '../../assets/React.png'

import php from '../../assets/PHP.png'
import laravel from '../../assets/laravel.png'




const TechnologyShop = () => {
    return (
       <div className='py-10'>
           <section className='flex flex-col justify-center items-center gap-2 mt-5 pb-5'>
                    <h1 className=' font-semibold text-2xl text-center '>আইওনিক সপ ক্লাউড ভিত্তিক দক্ষ একাউন্টিং ও বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর ব্যবহৃত টেকনোলজি সমূহ</h1>
                   
                </section>
         <div className="grid lg:grid-cols-2 grid-cols-1 mx-[405px]  rounded-lg">
           

            <div className=''>
            <section className=" grid md:grid-cols-3 grid-cols-2 items-center  justify-center gap-5 pt-3 bg-white ">
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={php}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={laravel}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={javascript}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={react}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={redux}/>
                </div>
                <div className="flex flex-col justify-center items-center    p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={firebase}/>
                </div>
            </section>
            </div>
            <div>
        
            <div className="flex flex-col justify-center items-center  bg-white  p-4 ">
            <img className='h-[187px] hover:scale-105' src={server} alt="" />
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default TechnologyShop;