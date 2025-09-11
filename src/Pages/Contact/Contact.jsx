import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-[#051a35] text-white py-12 px-6 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-indigo-200 mb-4"
          >
            Get in Touch
          </motion.h3>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-2xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-2xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <motion.textarea
              whileFocus={{ scale: 1.03 }}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-2xl bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></motion.textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-2xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-6 mt-6 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[ 
              { icon: <FaGithub />, link: "https://github.com/" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/" },
              { icon: <MdEmail />, link: "mailto:youremail@example.com" },
              { icon: <FaInstagram />, link: "https://instagram.com/" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            title="Nabiganj, Habiganj District"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.047099342294!2d91.5016!3d24.6173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751b9f8ef87df11%3A0xa6f7c20a1fd51417!2sNabiganj%2C%20Habiganj!5e0!3m2!1sen!2sbd!4v1694441789548!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
