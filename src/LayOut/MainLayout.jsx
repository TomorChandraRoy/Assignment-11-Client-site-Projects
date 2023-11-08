import { Outlet } from "react-router-dom";

import Footer from "../LayOut/Footer";
import Navbar from "../LayOut/Navbar";

// import Navbar from "../LayOut/Navbar"

const MainLayout = () => {
    return (
        <div className="lg:max-w-[1300px] md:max-w-[750px] lg:mx-auto md:mx-auto   font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;