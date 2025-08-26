import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    
    <section
      id="about"
      className="py-20 px-6  rounded-2xl md:px-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-4 border-emerald-500 inline-block pb-2">
            About Me
          </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-10">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
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
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed">
            I am passionate about learning new technologies and constantly improving my skills to deliver high-quality, scalable web applications.
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
  );
};

export default About;
