import React from "react";
import "./homepage.css";
import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <section id="home" className="home">
      {/* w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 */}
      <div className="home_content ">
        <div
          className="flex flex-col mb-20 lg:mb-0"
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <span className="text-lg font-bold text-orange-700">Hi, I'am</span>
          <div className="flex gap-4 items-center my-4">
            <h1 className="text-white text-4xl 2xl:text-7xl font-bold text-center">
              Sagar Yadav
            </h1>
          </div>
          <p className="text-md text-white 2xl:mt-5">
            Front-End Web Developer with ability to learn and collaborate in
            rapidly changing environments and compositions.
          </p>
          <div className="mt-10 flex gap-10">
            <a href="mailto:sagarkryadav31@gmail.com">
              <button className="text-lg text-white font-semibold rounded-md py-3 px-5 hire_me_btn">
                Hire Me
              </button>
            </a>

            <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vTFS4qv5lZSrH6To2Gxj88pkX5uxe-UjB1qZCSL-9Ea-6AVrIhw9wd_WX8JvRchHV3DCJojopxXWopp/pub">
              <button className="text-lg text-white font-semibold rounded-md py-3 px-5 project_btn">
                Download CV
              </button>
            </a>
          </div>
        </div>

        
      </div>
      <div className="home_mouse">
          <div className="mouse"></div>
        </div>
    </section>
  );
};

export default Homepage;
