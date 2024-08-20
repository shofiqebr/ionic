import consulting from '../../assets/karmochary/consulting.jpg';
import development from '../../assets/karmochary/development.jpg';
import customization from '../../assets/karmochary/customization.jpg';
import implementation from '../../assets/karmochary/implementation.jpg';
import support from '../../assets/karmochary/support.jpg';
import training from '../../assets/karmochary/training.jpg';

const Services = () => {
    return (
        <div className='mx-[400px]'>
            <section className='flex flex-col justify-center items-center gap-2 pt-36'>
                <h1 className='text-[#898989] text-xl font-semibold'>
                    "কর্মচারি" টোটাল সলুয়েশন ইআরপি সফ্টওয়ার সমস্ত সেবা সমূহ
                </h1>
                <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold'>
                    আপনার ব্যবসার জন্য বিশেষভাবে তৈরি কাস্টম “কর্মচারি” টোটাল সলুয়েশন ইআরপি সফ্টওয়ার পরিষেবা এবং সমাধান
                </p>
            </section>

            <section className='grid grid-cols-3 gap-10 py-10'>
                {/* Consulting */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${consulting})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>consulting</div>
                    </div>
                </div>

                {/* Development */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${development})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>development</div>
                    </div>
                </div>

                {/* Customization */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${customization})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>customization</div>
                    </div>
                </div>

                {/* Implementation */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${implementation})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>implementation</div>
                    </div>
                </div>

                {/* Support */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${support})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>support</div>
                    </div>
                </div>

                {/* Training */}
                <div className='relative group rounded-2xl overflow-hidden'>
                    <div 
                        className='h-[200px] bg-cover bg-center transition-transform duration-300 ease-in-out transform group-hover:scale-105'
                        style={{
                            backgroundImage: `url(${training})`,
                        }}
                    ></div>
                    <div className='absolute inset-0 bg-black opacity-30 rounded-2xl transition-opacity duration-300 ease-in-out group-hover:opacity-60'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-white text-3xl uppercase'>training</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
