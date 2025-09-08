import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen lg:mt-15    bg-[#051a35] gap-x-20 flex flex-col-reverse md:flex-row items-center justify-center md:px-20"
    >
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex-1 text-center md:text-left"
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4 
                     bg-gradient-to-r from-indigo-400 via-white 
                     bg-clip-text text-transparent "
        >
          Hi, I'm{" "}
          <span className="">
            Sourov Pal
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]">
          A passionate{" "}
          <span className="font-semibold text-indigo-300 ">
            MERN Stack Developer
          </span>{" "}
          focused on frontend development and creating beautiful, responsive,
          and high-performance web apps.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    
          <a
    href="/SourovPal_CV.pdf"
    download
    className="bg-white dark:bg-gray-800 text-indigo-700 dark:text-white px-6 py-3 
               rounded-full shadow-md border hover:scale-105 transform transition
               drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]"
  >
    Download CV
  </a>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex-col-reverse justify-center  md:mt-0"
      >
        <img
          src="https://i.ibb.co.com/TDT7xVY5/Sourov.jpg"
          alt="Sourov Pal"
          className=" w-60 h-60 lg:w-140 lg:h-140 rounded-full object-cover 
                     shadow-lg border-4 border-white dark:border-gray-400
                     drop-shadow-[0_6px_12px_rgba(255,255,255,0.3)]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
