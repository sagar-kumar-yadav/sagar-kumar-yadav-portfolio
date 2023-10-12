import React from "react";
import "./navbar.css";
import logo from "../../assets/pass1.png";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, toggleTheme, isOpen, toggleMenu }) => {
  return (
    <header className="header flex">
      <div className="header_logo_and_name_cont">
        <div className="header_logo_img_container">
          <img
            src={logo}
            alt="sagar yadav logo img"
            className="header_logo_img"
          />
        </div>
        <span className="header_logo_name">SagarKrYdv</span>
      </div>

      <div className="header_menu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header_link"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="header_link"
        >
          About
        </Link>

        <Link
          activeClass="projects"
          to="projects"
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
          className="header_link"
        >
          Projects
        </Link>

        <Link
          activeClass="contact"
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="header_link"
        >
          Contact
        </Link>

        <div className="md:hidden">
          <button
            type="button"
            className=""
            aria-controls=",onile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={`${
                isOpen ? "hidden" : "block"
              } text-gray-700 dark:text-gray-300`}
            />

            <AiOutlineClose
              size={26}
              className={`${
                isOpen ? "block" : "hidden"
              } h-6 w-6 dark:text-gray-400`}
            />
          </button>
        </div>
      </div>

      {/* <button onClick={toggleTheme} className="p-2">
          {darkMode ? (
            <FiSun size={24} color={"white"} />
          ) : (
            <MdOutlineNightlight size={24} color={"gray"} />
          )}
        </button> */}
      {/* </div> */}

      {/* <div className="header_re_menu">
        <div className="header_re_menu_content">
          <ul className="header_re_menu_links">
            <li className="header_re_menu_link">
              <a href="./index.html"> Home </a>
            </li>
            <li className="header_re_menu_link">
              <a href="./index.#about"> About </a>
            </li>
            <li className="header_re_menu_link">
              <a href="./index.#projects"> Projects </a>
            </li>
            <li className="header_re_menu_link">
              <a href="./index.#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
