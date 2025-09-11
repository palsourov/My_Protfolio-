import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaBook } from "react-icons/fa";

const academics = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Metropolitan University, Sylhet",
    duration: "2022 - Present",
    result: "CGPA: 3.68 / 4.00",
    icon: <FaUniversity className="text-indigo-400" size={40} />,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Nabiganj Govt. College",
    duration: "2018 - 2020",
    result: "GPA: 4.33 / 5.00",
    icon: <FaBook className="text-indigo-400" size={40} />,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Homeland High School",
    duration: "2016 - 2018",
    result: "GPA: 4.56 / 5.00",
    icon: <FaSchool className="text-indigo-400" size={40} />,
  },
];

const Academic = () => {
  return (
    <section className="py-16 px-6 md:px-30">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-gray-200 mb-4">
          Academic Background
        </h2>
        <p className="mt-3 text-indigo-200 text-base md:text-lg">
          My academic journey, from school to university, shaping my skills and
          knowledge.
        </p>
      </motion.div>

      {/* Academic Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {academics.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-indigo-200">
              {item.degree}
            </h3>
            <p className="text-indigo-200 mt-2">{item.institution}</p>
            <p className="text-sm text-indigo-400 mt-1">{item.duration}</p>
            <p className="mt-3 font-medium text-indigo-200">{item.result}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Academic;
