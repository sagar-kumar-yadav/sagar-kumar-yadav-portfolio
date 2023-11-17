import React from "react";
import "./homepage.css";
import { Link } from "react-scroll";
import Linkdin from "../../assets/icons8-linkedin-30.png";
import Github from "../../assets/icons8-github-30.png";

const TechStack = [
  {
    id: "01",
    src: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    id: "02",
    src: "https://img.icons8.com/color/48/000000/css3.png",
  },

  {
    id: "03",
    src: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    id: "04",
    src: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
  },
  {
    id: "05",
    src: "https://img.icons8.com/color/48/000000/python--v1.png",
  },
  {
    id: "06",
    src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },

  {
    id: "07",
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    id: "08",
    src: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    id: "09",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    id: "10",
    src: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  },
  {
    id: "11",
    src: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    id: "12",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  },
];

const Homepage = () => {
  return (
    <section
      id="home"
      className="home h-[100vh] dark:bg-[#f7f7f7] dark:text-black bg-[#f7f7f7] min-h-max relative overflow-hidden"
    >
      <div
        className="home_content flex pt-48 pb-40 w-[75%] m-auto"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col  lg:mb-0 flex-grow-[0.7] min-w-max">
          <span className=" text-xl font-bold text-orange-700">Hi There,</span>
          <div className="flex gap-4 items-center">
            <h1 className=" text-3xl text-left pt-4">
              <span className=" text-xl font-semibold">I am</span>{" "}
              <span className=" font-bold text-2xl"> Sagar Yadav</span>
            </h1>
          </div>
          <div className=" text-lg font-medium text-left ">
            <span className=" text-5xl font-semibold">
              Full-Stack developer👋
            </span>{" "}
            <p className="">
              <span className="font-semibold">based in Pune, India</span>
              <span className="">📍</span>
            </p>
          </div>

          {/* github and linkedin link ----- */}
          <div className="flex gap-2 pt-4">
            <Link to="https://www.linkedin.com/in/sagar-kumar-yadav/">
              <img className="w-6" src={Linkdin} alt="icon" />
            </Link>
            <Link to="https://github.com/sagar-kumar-yadav">
              <img className="w-6 " src={Github} alt="icon" />
            </Link>
          </div>

          {/* Hire me and download cv */}
          <div
            className="mt-8 flex gap-4
          "
          >
            <Link to="mailto:sagarkryadav31@gmail.com">
              <button className="text-lg text-white font-bold rounded-md py-2 px-5 hire_me_btn">
                Hire Me
              </button>
            </Link>

            <Link to="https://drive.google.com/file/d/1t1RfWu9raKqSW8IBHSJ9FgOhY0pKQ9Z4/view?usp=share_link">
              <button className="text-lg  font-semibold rounded-md py-2 px-5 dark:bg-black dark:text-white project_btn">
                Download CV
              </button>
            </Link>
          </div>

          {/* Tech Stack ----------------- */}
          <div className="flex gap-4 items-center mt-8 font-bold min-w-max">
            <p>Tech Stack |</p>
            {TechStack.map((t) => (
              <div className="w-8" key={t.id}>
                <img src={t.src} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-grow-[0.3]  min-w-max">
          <div className="rounded-full overflow-hidden w-[17rem] h-[17rem]">
            <img src="/src/assets/home_1.png" alt="" />
          </div>
        </div>
      </div>
      {/* mouse */}
      <div className="home_mouse">
        <div className="mouse dark:border-b dark:border-solid border-[#787373] before:bg-black"></div>
      </div>
    </section>
  );
};

export default Homepage;
