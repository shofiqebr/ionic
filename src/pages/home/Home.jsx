import Banner from "./Banner";
import BrandProduct from "./BrandProduct";

// import Card from "./Card";


import DigitalPartner from "./DigitalPartner";
// import ProductDetails from "./ProductDetails";
import ProductDetails from "./product/ProductDetails";
import Technologies from "./Technologies";



const Home = () => {



    return (
       
            <div className=" bg-[#F3F3F3]">
               
                <Banner/>
                {/* <Card/> */}
               
                <DigitalPartner/>

           
   
            <BrandProduct/>
        
            {/* <ProductDetails/> */}
            <ProductDetails/>
            {/* <ProductCard/> */}
            
            <Technologies/>
         
            </div>
         
       
       
    );
};

export default Home;