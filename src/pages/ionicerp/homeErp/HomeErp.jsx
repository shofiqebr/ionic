import SoftwarePrice from "../softwarePrice/SoftwarePrice";
import TechnologyErp from "../technologyErp/TechnologyErp";
import BannerErp from "./bannerErp/BannerErp";
import Module from "./module/Module";
import ProductDetailsErp from "./productDetailsErp/ProductDetailsErp";


const HomeErp = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <BannerErp/>
            <ProductDetailsErp/>
            <Module/>
            <TechnologyErp/>
            <SoftwarePrice/>
        </div>
    );
};

export default HomeErp;