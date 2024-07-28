


import Banner from "./Banner";
// import BannerText from "./BannerText";
import BrandProduct from "./BrandProduct";
import DigitalPartner from "./DigitalPartner";
// import ImportantSubject from "./ImportantSubject";

import ProductDetails from "./ProductDetails";
// import RealSolution from "./RealSolution";
import Technologies from "./Technologies";
import Test from "./Test";


const Home = () => {
    return (
       
            <div className="max-w-screen-xl mx-auto bg-[#F3F3F3] ">
                <Test/>
                <Banner/>
                {/* <RealSolution/> */}
                <DigitalPartner/>
            {/* <BannerText/> */}
   
            <BrandProduct/>
            {/* <Product */}
            <ProductDetails/>
            {/* <ImportantSubject/> */}
            <Technologies/>
            </div>
         
       
       
    );
};

export default Home;