


import Banner from "./Banner";
// import BannerText from "./BannerText";
import BrandProduct from "./BrandProduct";
import DigitalPartner from "./DigitalPartner";
import ProductCard from "./product/ProductCard";
// import ImportantSubject from "./ImportantSubject";

import ProductDetails from "./ProductDetails";
// import RealSolution from "./RealSolution";
import Technologies from "./Technologies";



const Home = () => {



    return (
       
            <div className=" bg-[#F3F3F3]">
               
                <Banner/>
               
                <DigitalPartner/>

           
   
            <BrandProduct/>
        
            <ProductDetails/>
            <ProductCard/>
            
            <Technologies/>
            </div>
         
       
       
    );
};

export default Home;