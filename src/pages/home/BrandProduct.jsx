import restoraImg from '../../assets/my-restuara-250x100.png';
import healthImg from '../../assets/ionichealth-logo-final-250x100.png';
import shopImg from '../../assets/ionicshop-logo-250x100.png';
import myBhara from '../../assets/my-bhara-250x100.png';
import pharma from '../../assets/ionic-pharma-logo-2-250x100.png';
import shikkha from '../../assets/shihkhachart-250x100.png';
import kormochary from '../../assets/karmochary-250x100.png';
import ionicErp from '../../assets/ionicerp-250x100.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

const BrandProduct = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className='text-[#898989] font-semibold text-xl text-center'>আমাদের বিভিন্ন ব্র্যান্ডের পণ্য সমূহ</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>
            <div className='flex gap-20 mt-10 flex-col md:flex-row max-w-screen-xl mx-auto'>
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                    >
                        <div>
                            <img className='carousel-img' src={restoraImg} alt="Restora" />
                        </div>
                        <div>
                            <img className='carousel-img' src={healthImg} alt="Health" />
                        </div>
                        <div>
                            <img className='carousel-img' src={shopImg} alt="Shop" />
                        </div>
                    </Carousel>
                </section>
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                    >
                        <div>
                            <img className='carousel-img' src={shikkha} alt="Shikkha" />
                        </div>
                        <div>
                            <img className='carousel-img' src={pharma} alt="Pharma" />
                        </div>
                        <div>
                            <img className='carousel-img' src={myBhara} alt="My Bhara" />
                        </div>
                    </Carousel>
                </section>
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                    >
                        <div>
                            <img className='carousel-img' src={kormochary} alt="Kormochary" />
                        </div>
                        <div>
                            <img className='carousel-img' src={ionicErp} alt="Ionic ERP" />
                        </div>
                    </Carousel>
                </section>
            </div>
        </div>
    );
};

export default BrandProduct;
