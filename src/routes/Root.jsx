import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const Root = () => {
    return (
        <>
            
            <Navbar/>
            
            <div className="bg-[#F3F3F3]">

            <Outlet />
            <Footer/>
            </div>
            
        
            

            
         </>
    );
};

export default Root;