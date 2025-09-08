import React, { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiNetlify, SiVercel, SiC, SiCplusplus, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router";

const skills = [
  // 🌐 Frontend
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, level: "Advanced", category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" />, level: "Advanced", category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" />, level: "Advanced", category: "Frontend" },
  { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" />, level: "Advanced", category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" />, level: "Advanced", category: "Frontend" },

  // ⚙️ Backend
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" />, level: "Intermediate", category: "Backend" },
  { name: "Express.js", icon: <SiExpress size={40} color="#000000" />, level: "Intermediate", category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, level: "Intermediate", category: "Backend" },

  // 💻 Programming Languages
  { name: "Java", icon: <FaJava size={40} color="#007396" />, level: "Intermediate", category: "Programming" },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" />, level: "Intermediate", category: "Programming" },
  { name: "C", icon: <SiC size={40} color="#A8B9CC" />, level: "Intermediate", category: "Programming" },
  { name: "C++", icon: <SiCplusplus size={40} color="#00599C" />, level: "Intermediate", category: "Programming" },

  // 🛠 Tools
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" />, level: "Advanced", category: "Tools" },
  { name: "GitHub", icon: <SiGithub size={40} color="#181717" />, level: "Advanced", category: "Tools" },
  { name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" />, level: "Intermediate", category: "Tools" },
  { name: "Vercel", icon: <SiVercel size={40} color="#000000" />, level: "Intermediate", category: "Tools" },
];

const AllSkills = () => {
  const [filter, setFilter] = useState("All");

  // ✅ Filtering logic
  const filteredSkills = filter === "All" ? skills : skills.filter(skill => skill.category === filter);

 

  return (
    <section id="skills" className="lg:mt-20 lg:py-15 px-6 flex-col justify-center items-center text-center min-h-screen">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-gray-200 mb-4">
        My Skills
      </h2>

      {/* ✅ Subtitle */}
      <p className="text-gray-400 text-lg mb-8">Explore the technologies, frameworks, and tools I use to design, build, and deploy modern web applications.</p>

      {/* ✅ Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Frontend", "Backend", "Programming", "Tools"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === cat
                ? "bg-indigo-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-indigo-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ Skills Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-indigo-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{
                  width:
                    skill.level === "Advanced"
                      ? "100%"
                      : skill.level === "Intermediate"
                      ? "70%"
                      : "50%",
                }}
                transition={{ duration: 1.5 }}
              ></motion.div>
            </div>
            <p className="mt-2 text-indigo-300 text-sm">{skill.level}</p>
          </motion.div>
        ))}
      </div>

      {/* ✅ View More Button */}
      <div className="mt-12">
        <Link to="/">
          <button className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 transition-all duration-300">
            Go Home 
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AllSkills;
