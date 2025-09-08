import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, level: "Advanced" },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" />, level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" />, level: "Advanced" },
  { name: "HTML & CSS", icon: <><FaHtml5 size={40} color="#E34F26"/><FaCss3Alt size={40} color="#1572B6"/></>, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" />, level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress size={40} color="#000000" />, level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, level: "Intermediate" },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" />, level: "Advanced" },
];

const Skills = () => {
  return (
    <section id="skills" className="lg:mt-20 lg:py-15  px-6 flex-col justify-center items-center  text-center min-h-screen ">
      <h2 className="text-4xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-gray-200 mb-12">My Skills</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400  ">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-indigo-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level === "Advanced" ? "100%" :
                                 skill.level === "Intermediate" ? "70%" : "50%" }}
                transition={{ duration: 1.5 }}
              ></motion.div>
            </div>
            <p className="mt-2 text-indigo-300 text-sm">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
