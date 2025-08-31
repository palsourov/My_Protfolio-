import React from "react";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer";
import { div } from "framer-motion/client";

const Roots = () => {
  return (
    <div className="font-sans bg-[#051a35] text-gray-800">
      <div className="   ">
        <Navbar></Navbar>
         <Outlet  ></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
