import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;