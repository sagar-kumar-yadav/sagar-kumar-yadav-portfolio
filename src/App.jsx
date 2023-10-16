import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <Homepage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
