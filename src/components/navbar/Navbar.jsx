import React from "react";
import "./navbar.css";
import logo from "../../assets/pass1.png";
// import { Link } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";


const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <header className=" fixed h-16 z-50 w-full flex items-center bg-[#323232] text-white dark:bg-white dark:text-black border-b border-solid border-[#787373]">
      <div className="flex items-center w-[90%] justify-between min-w-max m-auto ">
        {/* Logo And Name --------------------------------------------------------*/}
        <div className="header_logo_and_name_cont logo ">
          <a href="#" className="">
            <span className="header_logo_name">Sagar.dev</span>
          </a>
        </div>
        {/* Menus --------------------------------------------------------------------*/}
        <div className=" min-w-max flex items-center gap-4 ">
          <ul className="menu-items ">
            <li>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Home</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">About</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Projects</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Contact</span>
              </ScrollLink>
            </li>
          </ul>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={24} color={"black"} />
            ) : (
              <MdOutlineNightlight size={24} color={"white"} />
            )}
          </button>
        </div>
      </div>
    </header>
    // </nav>
  );
};

export default Navbar;
