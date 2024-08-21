import { Outlet } from "react-router-dom";
import NavbarShop from "../pages/ionicshop/shared/NavbarShop";
import Footer from "../shared/footer/Footer";


const MainShop = () => {
    return (
        <div>
            <NavbarShop/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainShop;