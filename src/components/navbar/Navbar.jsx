import React from "react";
import "./navbar.css";
import logo from "../../assets/pass1.png";
import { Link } from "react-scroll";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <header className=" fixed h-16 z-50 w-full flex items-center bg-[#323232] text-white dark:bg-white dark:text-black border-b border-solid border-[#787373]">
      <div className="flex items-center w-[90%] justify-between min-w-max m-auto ">
        {/* Logo And Name --------------------------------------------------------*/}
        <div className="header_logo_and_name_cont logo ">
          <span className="header_logo_name">Sagar.dev</span>
        </div>
        {/* Menus --------------------------------------------------------------------*/}
        <div className=" min-w-max flex items-center gap-4 ">
          <ul className="menu-items ">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="header_link "
              >
                <span className=" font-bold">Home</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className="header_link "
              >
                 <span className=" font-bold">About</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                className="header_link "
              >
                 <span className=" font-bold">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                className="header_link "
              >
                 <span className=" font-bold">Contact</span>
              </Link>
            </li>
          </ul>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={24} color={"black"}/>
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
