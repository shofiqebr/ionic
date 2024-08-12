import { Outlet } from "react-router-dom";

import NavbarErp from "../pages/ionicerp/shared/navbarErp/NavbarErp";
import Footer from "../shared/footer/Footer";


const Main = () => {
    return (
        <div>
            <NavbarErp/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;