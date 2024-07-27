import python from '../../assets/Python-Logo-2048x1152.png'
import frappe from '../../assets/frappe-framwork.png'
import javascript from '../../assets/JavaScript-JS.png'
import react from '../../assets/React.png'
import redux from '../../assets/REDUX.png'
import firebase from '../../assets/Firebase.png'
import plesk from '../../assets/plesk.png'
import ubuntu from '../../assets/ubonto-logo.jpg'
import ionos from '../../assets/ionos-logo.jpg'
import debian from '../../assets/debian.png'
import nginx from '../../assets/nginx.png'
import apache from '../../assets/apache.png'
import figma from '../../assets/figma.jpg'
import wordpress from '../../assets/wordpress-logo.jpg'
import flutter from '../../assets/flutter.png'
import andriod from '../../assets/Android-logo.jpg'
import swift from '../../assets/swift-1.png'

const Technologies = () => {
    return (
        <div className='pb-5'>
              <section className='flex flex-col justify-center items-center gap-2 mt-16 '>
                <h1 className=' text-[#898989] font-semibold  text-center'>আমাদের সফটওয়্যার এর ব্যবহৃত টেকনোলজি সমূহ</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>

           
            <section className="lg:grid-cols-6 grid md:grid-cols-3 grid-cols-2 items-center  justify-center gap-5 pt-3 mt-5 bg-white lg:mx-32 rounded-lg ">
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={python}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={frappe}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={javascript}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={react}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={redux}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={firebase}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={plesk}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={ubuntu}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={ionos}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={debian}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={nginx}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={apache}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={figma}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={wordpress}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={flutter}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={andriod}/>
                </div>
                <div className="flex flex-col justify-center items-center border-r   p-4 hover:scale-105">
                    <img className="w-24 pb-5" src={swift}/>
                </div>
               
              
          
              
          

            </section>
            
        </div>
    );
};

export default Technologies;