import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] ">
            <Navbar/>
            <div className='bodyWidth flex mx-auto' >

            <Outlet />
            </div>
            </div>
            <div className="">

            <Footer/>
            </div>
        </div>
    );
};

export default Root;