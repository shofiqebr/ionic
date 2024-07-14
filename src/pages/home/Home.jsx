


import Banner from "./Banner";
import BannerText from "./BannerText";
import BrandProduct from "./BrandProduct";
import DigitalPartner from "./DigitalPartner";
import ImportantSubject from "./ImportantSubject";

import ProductDetails from "./ProductDetails";
import RealSolution from "./RealSolution";
import Technologies from "./Technologies";
import Test from "./Test";


const Home = () => {
    return (
        <div  className=' bg-[#F3F3F3] '>
            <div className="max-w-screen-xl mx-auto">
                <Test/>
                <Banner/>
                <RealSolution/>
                <DigitalPartner/>
            <BannerText/>
   
            <BrandProduct/>
            <ProductDetails/>
            <ImportantSubject/>
            <Technologies/>
            </div>
         
       
        </div>
    );
};

export default Home;