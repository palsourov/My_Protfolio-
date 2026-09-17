import React from "react";

import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";  
import { div } from "framer-motion/client";

const Roots = () => {
  return (
    <div className="font-sans bg-[#051a35] text-gray-800">
      <div className="   ">
        <Navbar></Navbar>
         <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
