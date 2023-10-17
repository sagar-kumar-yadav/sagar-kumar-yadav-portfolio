import React from "react";
import "./navbar.css";
import logo from "../../assets/pass1.png";
import { Link } from "react-scroll";

const Navbar = ({ toggleMenu, isOpen }) => {
  return (
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
              activeClass="active"
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
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-5}
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
