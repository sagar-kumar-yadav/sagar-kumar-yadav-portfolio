import React from "react";
import "./navbar.css";
import logo from '../../assets/pass1.png'
import { Link } from 'react-scroll';
// import { FiSun } from "react-icons/fi";
// import { MdOutlineNightlight } from "react-icons/md";


const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header_content">
        <div className="header_logo-container">
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
          <ul className="header_menu_links">
            <li className="menu_link_wrapper">
            <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} duration={500} className="header_link" >Home</Link>
            </li>

            <li className="menu_link_wrapper">
            <Link activeClass="active" to='about' spy={true} smooth={true} offset={-10} duration={500} className="header_link">About</Link>
            </li>

            <li className="menu_link_wrapper">
            <Link activeClass="projects" to='projects' spy={true} smooth={true} offset={-5} duration={500} className="header_link">Projects</Link>
            </li>

            <li className="menu_link_wrapper">
            <Link activeClass="contact" to='contact' spy={true} smooth={true} offset={-10} duration={500} className="header_link">Contact</Link>
            </li>
          </ul>
        </div>

        {/* <button onClick={toggleTheme} className="p-2">
          {darkMode ? (
            <FiSun size={24} color={"white"} />
          ) : (
            <MdOutlineNightlight size={24} color={"gray"} />
          )}
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
