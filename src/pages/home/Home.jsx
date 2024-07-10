import BannerText from "./BannerText";
import BrandProduct from "./BrandProduct";
import ImportantSubject from "./ImportantSubject";

import ProductDetails from "./ProductDetails";
import Technologies from "./Technologies";


const Home = () => {
    return (
        <div  className=' bg-[#F3F3F3] '>
            <div className="max-w-screen-xl mx-auto">
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