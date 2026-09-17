import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Hero() {
  return (
    

<section
  id="home"
  className="min-h-screen lg:mt-15 bg-[#051a35] gap-10 lg:gap-x-20
             flex flex-col-reverse md:flex-row items-center justify-center
             px-5 sm:px-8 md:px-12 lg:px-20
             py-24 md:py-16 lg:py-10 overflow-hidden"
>
  {/* Left Side - Text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
    className="w-full md:flex-1 text-center md:text-left"
  >
    <h1
      className="text-4xl sm:text-5xl lg:text-6xl
                 font-extrabold mb-4
                 bg-gradient-to-r from-indigo-400 via-white
                 bg-clip-text text-transparent"
    >
      Hi, I'm{" "}
      <span className="">
        Sourov Pal
      </span>
    </h1>

    <p
      className="text-base sm:text-lg md:text-xl mb-6
                 text-gray-200 max-w-xl mx-auto md:mx-0
                 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
    >
      A passionate{" "}
      <span className="font-semibold text-indigo-300">
        Marketing Enthusiast
      </span>{" "}
      with a background in Computer Science and Engineering,
      experienced in sales, lead generation, customer engagement,
      and CRM management. Interested in Digital Marketing and
      leveraging technical knowledge to create engaging customer
      experiences.
    </p>

    {/* Buttons */}
    <div
      className="flex flex-col sm:flex-row gap-4
                 justify-center md:justify-start items-center md:items-start"
    >
      <a
        href="/src/assets/CV.pdf"
        download
        className="group inline-flex items-center justify-center gap-3
                   bg-gradient-to-r from-indigo-600 to-purple-600
                   hover:from-indigo-700 hover:to-purple-700
                   text-white font-semibold
                   px-8 py-3.5 rounded-full
                   shadow-lg shadow-indigo-500/30
                   border border-white/20
                   hover:shadow-indigo-500/50
                   hover:scale-105 active:scale-95
                   transition-all duration-300 ease-in-out"
      >
        <span>Download CV</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 group-hover:translate-y-1
                     transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
          />
        </svg>
      </a>
    </div>
  </motion.div>

  {/* Right Side - Image */}
  
{/* Right Side - Image */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full md:flex-1 flex justify-center items-center"
>
  <div
    className="w-64 h-64
               sm:w-72 sm:h-72
               md:w-80 md:h-80
               lg:w-[4050px] lg:h-[400px]
               xl:w-[450px] xl:h-[450px]
               flex-shrink-0
               rounded-full overflow-hidden
               border-4 border-white
               shadow-[0_0_30px_rgba(255,255,255,0.2)]"
  >
    <img
      src="/src/assets/Image/picture.jpeg"
      alt="Sourov Pal"
      className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[520px] xl:h-[520px] rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-400 drop-shadow-[0_6px_12px_rgba(255,255,255,0.3)]"
    />
  </div>
</motion.div>
</section>
  );
}

export default Hero;
