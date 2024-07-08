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
        <div className='py-5'>
              <section className='flex flex-col justify-center items-center gap-2 mt-16 '>
                <h1 className=' text-[#898989] font-semibold text-xl'>আমাদের সফটওয়্যার এর ব্যবহৃত টেকনোলজি সমূহ</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>

            <section className='flex flex-wrap gap-12 justify-center items-center pt-10'>

                <img className='w-40' src={python} alt="" />
                <img className='w-40' src={frappe} alt="" />
                <img className='w-40' src={javascript} alt="" />
                <img className='w-40' src={react} alt="" />
                <img className='w-40' src={redux} alt="" />
                <img className='w-40' src={firebase} alt="" />
                <img className='w-40' src={plesk} alt="" />
                <img className='w-40' src={ubuntu} alt="" />
                <img className='w-40' src={ionos} alt="" />
                <img className='w-40' src={debian} alt="" />
                <img className='w-40' src={nginx} alt="" />
                <img className='w-40' src={apache} alt="" />
                <img className='w-40' src={figma} alt="" />
                <img className='w-40' src={wordpress} alt="" />
                <img className='w-40' src={flutter} alt="" />
                <img className='w-40' src={andriod} alt="" />
                <img className='w-40' src={swift} alt="" />
            </section>
            
        </div>
    );
};

export default Technologies;