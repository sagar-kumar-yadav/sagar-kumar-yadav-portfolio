import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import Contact1 from "./components/contact/Contact1";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}

      <Navbar />
      <Homepage />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* <Contact1 /> */}
    </>
  );
};

export default App;
