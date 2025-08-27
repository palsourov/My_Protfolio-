import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen mt-20 gap-x-20 flex flex-col-reverse md:flex-row items-center justify-center  md:px-20 
                "
    >
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 
                       bg-gradient-to-r from-indigo-600 to-emerald-500 
                       bg-clip-text text-transparent">
          Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">Sourov Pal</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 max-w-xl">
          A passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400"> MERN Stack Developer</span>  focused on frontend development  
              and creating beautiful, responsive, and high-performance web apps.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white px-6 py-3 
                       rounded-full shadow-lg hover:scale-105 transform transition"
          >
            View My Work
          </a>
          <a
            href="/SourovPal_CV.pdf" // place your CV in public folder
            download
            className="bg-white dark:bg-gray-800 text-indigo-700 dark:text-white px-6 py-3 
                       rounded-full shadow-md border hover:scale-105 transform transition"
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
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="https://i.ibb.co.com/TDT7xVY5/Sourov.jpg" // replace with your photo
          alt="Sourov Pal"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
                     shadow-lg border-4 border-white dark:border-gray-700"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
