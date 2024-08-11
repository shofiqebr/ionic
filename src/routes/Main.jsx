import { Outlet } from "react-router-dom";

import NavbarErp from "../pages/ionicerp/shared/navbarErp/NavbarErp";


const Main = () => {
    return (
        <div>
            <NavbarErp/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
};

export default Main;