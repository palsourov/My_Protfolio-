import React, { useState } from "react";
import ThemeToggle from "../Pages/ThemeToggle";
import { Menu, X } from "lucide-react"; // hamburger icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8">
        {/* Logo */}
        <h1 className="text-3xl md:text-3xl font-semibold tracking-wide cursor-pointer hover:scale-110 transition">
          Sourov<span className="text-yellow-300">Pal</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden text-xl md:flex space-x-8 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group hover:text-yellow-300 transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
        

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-sky-900 text-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-6 px-6 font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-yellow-300 transition"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
