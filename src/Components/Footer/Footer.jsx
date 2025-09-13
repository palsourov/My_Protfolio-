import React from "react";
import Logo from "../Logo/Logo";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full text-white py-6 px-6 md:px-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-transform transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="mailto:someone@example.com"
            className="hover:text-red-400 transition-transform transform hover:scale-110"
          >
            <MdEmail size={28} />
          </a>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-400 text-sm mt-4">
        © 2025 Saurov Pal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
