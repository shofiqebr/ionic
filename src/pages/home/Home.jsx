


import Banner from "./Banner";
// import BannerText from "./BannerText";
import BrandProduct from "./BrandProduct";
import DigitalPartner from "./DigitalPartner";
// import ImportantSubject from "./ImportantSubject";

import ProductDetails from "./ProductDetails";
// import RealSolution from "./RealSolution";
import Technologies from "./Technologies";



const Home = () => {


//     const screenWidth = screen.width;

// // Get screen height
// const screenHeight = screen.height;

// console.log(`Screen Width: ${screenWidth}`);
// console.log(`Screen Height: ${screenHeight}`); 

    return (
       
            <div className=" bg-[#F3F3F3]">
               
                <Banner/>
               
                <DigitalPartner/>

           
   
            <BrandProduct/>
        
            {/* <ProductDetails/> */}
            
            {/* <Technologies/> */}
            </div>
         
       
       
    );
};

export default Home;