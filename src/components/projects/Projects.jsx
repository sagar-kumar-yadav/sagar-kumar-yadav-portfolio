import React from "react";
import "../projects/projects.css";
import project from "../../assets/project.png";
import Project1 from "../../assets/project1.png";
import Project3 from "../../assets/project3.png";
import Project2 from "../../assets/project2.png";
import Project4 from "../../assets/project4.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects_main_container">
        <div className="project_heading_sec">
          <span className="heading">Projects</span>
          <span className="heading_para">
            Here, you can explore my personal projects about my current
            programming and technology skills. Each project represents a unique
            blend of creativity, problem-solving, and technical expertise.
          </span>
        </div>

        <div className="flex flex-wrap gap-10 lg:gap-20 justify-center ">
          <div className="w-[450px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md ">
            <img
              src={project}
              alt="img1"
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="project_desc_cont flex flex-col justify-start w-full h-[100px] bg-[rgb(50, 50, 50)] ">
              <h4 className="project_title_heading">E-commerce MERN APP</h4>
              <a
                className="check_it_out_btn"
                href="https://github.com/sagar-kumar-yadav/eCommerce-Application-Using-MERN"
              >
                Github Repository
              </a>
              {/* <p className="text-sm px-1 text-center">
                An responsive user interface while
                effectively utilizing the useState hook for state management
                within the React.js framework.
              </p> */}
            </div>
          </div>
          <div className="w-[350px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md ">
            <img
              src={Project1}
              alt="img1"
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="project_desc_cont flex flex-col justify-start w-full h-[100px] bg-[rgb(50, 50, 50)] ">
              <h4 className="project_title_heading">
                Web Screen and Webcam Recorder
              </h4>
              <a
                className="check_it_out_btn"
                href="https://github.com/sagar-kumar-yadav/Webcam-and-Screen-Recorder"
              >
                Github Repository
              </a>
              {/* <p className="text-sm text-orange-600  px-1 uppercase">
                Created a web app for recording screen and webcam videos, with
                audio and user authentication.
              </p> */}
            </div>
          </div>

          <div className="w-[450px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md ">
            <img
              src={Project2}
              alt="img1"
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="project_desc_cont flex flex-col justify-start w-full h-[100px] bg-[rgb(50, 50, 50)] ">
              <h4 className="project_title_heading">Product Details Page</h4>
              <a
                className="check_it_out_btn bg-red-600"
                href="https://fluffy-faloodeh-6a844c.netlify.app/"
              >
                See it Live
              </a>
              {/* <p className="text-sm px-1 text-center">
                An responsive user interface while
                effectively utilizing the useState hook for state management
                within the React.js framework.
              </p> */}
            </div>
          </div>

          <div className="w-[350px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md ">
            <img
              src={Project3}
              alt="img1"
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="project_desc_cont flex flex-col justify-start w-full h-[100px] bg-[rgb(50, 50, 50)] ">
              <h4 className="project_title_heading">Password Generator</h4>
              <a
                className="check_it_out_btn bg-red-600"
                href="https://master--frolicking-parfait-1cdd69.netlify.app/"
              >
                See it Live
              </a>
              {/* <p className="text-sm  px-1 text-center">
                Users can set the desired length of the generated password using
                an interactive input field.
              </p> */}
            </div>
          </div>

          <div className="w-[450px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md ">
            <img
              src={Project4}
              alt="img1"
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="project_desc_cont flex flex-col justify-start w-full h-[100px] bg-[rgb(50, 50, 50)]">
              <h4 className="project_title_heading">Drum Website</h4>
              <a
                className="check_it_out_btn bg-red-600"
                href="https://master--sweet-travesseiro-540fdd.netlify.app/"
              >
                See it Live
              </a>
              {/* <p className="text-sm text-orange-600 px-1 uppercase">
                Web Devlopment
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
