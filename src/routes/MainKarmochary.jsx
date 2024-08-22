import { Outlet } from "react-router-dom";
import NavbarKarmochary from "../pages/kormochary/shared/NavbarKarmochary";
import Footer from "../shared/footer/Footer";


const MainKarmochary = () => {
    return (
        <div>
            <NavbarKarmochary/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainKarmochary;