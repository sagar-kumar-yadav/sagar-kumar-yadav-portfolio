import React from "react";
import "./navbar.css";
import logo from "../../assets/pass1.png";
import { Link } from "react-scroll";

const Navbar = ({ toggleMenu, isOpen }) => {
  return (
    // <header className="header">
    //   <div className="w-full items-center justify-between py-2 px-4 bg-white fixed top-0 z-10">
    //     <div className="flex items-center justify-between w-full">
    //       <div className="header_logo_and_name_cont">
    //         <div className="header_logo_img_container">
    //           <img
    //             src={logo}
    //             alt="sagar yadav logo img"
    //             className="header_logo_img"
    //           />
    //         </div>
    //         <span className="header_logo_name">Sagar Yadav</span>
    //       </div>

    //       {/* -------------------------header menu----------------------------------------------------- */}
    //       <div className="header_menu">
    //         <Link
    //           activeClass="active"
    //           to="home"
    //           spy={true}
    //           smooth={true}
    //           offset={-100}
    //           duration={500}
    //           className="header_link"
    //         >
    //           Home
    //         </Link>

    //         <Link
    //           activeClass="active"
    //           to="about"
    //           spy={true}
    //           smooth={true}
    //           offset={-10}
    //           duration={500}
    //           className="header_link"
    //         >
    //           About
    //         </Link>

    //         <Link
    //           activeClass="projects"
    //           to="projects"
    //           spy={true}
    //           smooth={true}
    //           offset={-5}
    //           duration={500}
    //           className="header_link"
    //         >
    //           Projects
    //         </Link>

    //         <Link
    //           activeClass="contact"
    //           to="contact"
    //           spy={true}
    //           smooth={true}
    //           offset={-10}
    //           duration={500}
    //           className="header_link"
    //         >
    //           Contact
    //         </Link>
    //       </div>

    //       {/* -------------------------header hamburg  menu------------------------------------------- */}
    //       <div className=" md:hidden flex flex-col justify-center items-center ">
    //         <button onClick={toggleMenu}>
    //           <img
    //             src="./src/assets/svg/ham-menu.svg"
    //             alt="hamburg menu"
    //             className={`w-[100%] ${isOpen ? "hidden" : "block"}`}
    //           />

    //           <img
    //             src="./src/assets/svg/ham-menu-close.svg"
    //             alt="hamburg menu"
    //             className={`w-[100%] ${isOpen ? "block" : "hidden"}`}
    //           />
    //         </button>
    //       </div>
    //     </div>

    //     <div
    //       className={`${isOpen ? "block " : "hidden"} md:hidden `}
    //       id="mobile-menu"
    //     >
    //       <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200 float-right width-[100%]">
    //         <div className="flex flex-col gap-4 bg-white">
    //           <Link
    //             activeClass="active"
    //             to="home"
    //             spy={true}
    //             smooth={true}
    //             offset={-100}
    //             duration={500}
    //             className="header_link"
    //             onClick={toggleMenu}
    //           >
    //             Home
    //           </Link>

    //           <Link
    //             activeClass="active"
    //             to="about"
    //             spy={true}
    //             smooth={true}
    //             offset={-10}
    //             duration={500}
    //             className="header_link"
    //             onClick={toggleMenu}
    //           >
    //             About
    //           </Link>

    //           <Link
    //             activeClass="projects"
    //             to="projects"
    //             spy={true}
    //             smooth={true}
    //             offset={-5}
    //             duration={500}
    //             className="header_link"
    //             onClick={toggleMenu}
    //           >
    //             Projects
    //           </Link>

    //           <Link
    //             activeClass="contact"
    //             to="contact"
    //             spy={true}
    //             smooth={true}
    //             offset={-100}
    //             duration={500}
    //             className="header_link"
    //             onClick={toggleMenu}
    //           >
    //             Contact
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <nav className="navbar">
      <div className="navbar-container mr-16 ">
        <input
          type="checkbox"
          className={`${isOpen ? "block " : "hidden"} md:hidden `}
        />
        <div className="hamburger-lines ">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <ul className="menu-items ml-auto">
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
        <div className="header_logo_and_name_cont logo">
          <div className="header_logo_img_container">
            <img
              src={logo}
              alt="sagar yadav logo img"
              className="header_logo_img"
            />
          </div>
          <span className="header_logo_name">Sagar Yadav</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
