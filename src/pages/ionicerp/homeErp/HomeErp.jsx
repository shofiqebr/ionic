import BannerErp from "./bannerErp/BannerErp";
import Module from "./module/Module";
import ProductDetailsErp from "./productDetailsErp/ProductDetailsErp";


const HomeErp = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <BannerErp/>
            <ProductDetailsErp/>
            <Module/>
        </div>
    );
};

export default HomeErp;