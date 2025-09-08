import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <>  
    
    
    <div className="lg:px-30 flex-col justify-center items-center min-h-screen mb-10 lg:mt-20  py-8 ">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-indigo-400 md:text-5xl  font-bold mb-6 border-b-4 border-indigo-200 inline-block pb-2">
            About Me
          </h2>
      </div>
         
    <section
      id="about"
      className="py-10 px-6 lg:flex   gap-10 justify-center items-center  rounded-2xl md:px-20 bg-gradient-to-r  from-gray-900 to-gray-800 text-white"
    >
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        className="w-84 h-84 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-200 shadow-lg">
            <img
              src="https://i.ibb.co.com/TDT7xVY5/Sourov.jpg" // Replace with your photo
              alt="Profile"
              className="object-cover w-full h-full hover:scale-110 transition duration-500"
            />
          </motion.div>

      <div className="  lg:w-[70%]  mx-auto flex flex-col md:flex-row items-center md:space-x-10">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
             whileHover={{ scale: 1.1, y: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          
          <p className="text-gray-300 mb-4 text-lg md:text-xl leading-relaxed">
            I'm a <span className="text-emerald-400 font-semibold">MERN Stack Developer</span> 
            with a strong focus on <span className="text-indigo-400 font-semibold">frontend development</span>. 
            I enjoy building <span className="text-indigo-400 font-semibold">beautiful, responsive, and user-friendly web applications</span> 
            using <span className="text-emerald-400 font-semibold">React</span>, 
            <span className="text-emerald-400 font-semibold"> Tailwind CSS</span>, and modern web technologies.
          </p>
          <p className="text-gray-300 mb-4 text-lg md:text-xl leading-relaxed">
            Recently, I successfully completed a comprehensive web development course at <span className="text-yellow-400 font-semibold">Programming Hero</span> 
            which enhanced my skills in <span className="text-indigo-400 font-semibold">JavaScript, React, Node.js, and MongoDB</span>.
          </p>
         

          {/* Skills / Technologies */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Frontend Focused",
              "Responsive Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-emerald-500 text-gray-900 rounded-full font-semibold shadow hover:scale-105 transform transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right - Image */}
       
      </div>
    </section>
  </div>
  </>
  );
};

export default About;
