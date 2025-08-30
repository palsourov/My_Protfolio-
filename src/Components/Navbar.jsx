import React from "react";
import { NavLink } from "react-router";
import { FaAngleLeft ,FaAngleRight} from "react-icons/fa";


const Navbar = () => {
  const NavList = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2   font-semibold text-indigo-400 lg:text-xl text-[17px] "
            : "lg:text-xl font-semibold text-indigo-300 text-[17px]"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2   font-semibold text-indigo-400 lg:text-xl text-[17px] "
            : "lg:text-xl font-semibold text-indigo-300 text-[17px]"
        }
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2   font-semibold text-indigo-400 lg:text-xl text-[17px] "
            : "lg:text-xl font-semibold text-indigo-300 text-[17px]"
        }
        to="/Skills"
      >
        {" "}
        Skills
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2   font-semibold text-indigo-400 lg:text-xl text-[17px] "
            : "lg:text-xl font-semibold text-indigo-300 text-[17px]"
        }
        to="/MyRecipes"
      >
        {" "}
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2   font-semibold text-indigo-400 lg:text-xl text-[17px] "
            : "lg:text-xl font-semibold text-indigo-300 text-[17px]"
        }
        to="/Contact"
      >
        {" "}
        Contact
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-[#001c43] text-white shadow-md  ">
        <div className="navbar-start  lg:max-w-7xl mx-auto   py-6 px-8">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-gray-600"
            >
              {NavList}
            </ul>
          </div>
          <h1 className="text-5xl md:text-3xl font-bold mb-4 
                     bg-gradient-to-r from-indigo-400 via-white 
                     bg-clip-text text-transparent">
       <div className="flex items-center gap-x-2">
           <FaAngleLeft className="text-white" />
            Sourov Pal
            <FaAngleRight className="text-white" />

       </div>
 
        </h1>
        </div>
        <div className="navbar-center hidden lg:flex  lg:max-w-7xl mx-auto  ">
          <ul className="menu menu-horizontal px-1 gap-x-8">{NavList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
