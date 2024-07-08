import BannerText from "./BannerText";
import BrandProduct from "./BrandProduct";
import ProductDetails from "./ProductDetails";


const Home = () => {
    return (
        <div  className='max-w-screen-xl mx-auto '>
            <BannerText/>
            <BrandProduct/>
            <ProductDetails/>
        </div>
    );
};

export default Home;