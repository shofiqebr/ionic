import { Outlet } from "react-router-dom";
import NavbarPharma from "../pages/ionicpharma/shared/NavbarPharma";
import Footer from "../shared/footer/Footer";


const MainPharma = () => {
    return (
        <div>
            <NavbarPharma/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainPharma;