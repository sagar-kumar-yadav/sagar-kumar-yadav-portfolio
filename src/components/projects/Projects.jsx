import React from "react";
import "../projects/projects.css";
import project from "../../assets/project.png";
import Project1 from "../../assets/project1.png";
import Project3 from "../../assets/project3.png";
import Project2 from "../../assets/project2.png";
import Project4 from "../../assets/project4.png";

const projectData = [
  {
    id: "01",
    imgUrl: "/src/assets/project.png",
    category: "Web Design",
    title: "Restaurant Website",
    description:
      "I made a beautiful Restaurant website using a custom Toggle Bar menu with HTML, CSS, and Java Script. This website also features a lovely animation.",
    technologies: '"Javascript" "HTML" "CSS"',
    siteUrl: "https://github.com/sushantkr384/restaurant-website-sushant.git",
    alt: "project1",
  },
  {
    id: "02",
    imgUrl: "/src/assets/project.png",
    category: "Web Design",
    title: "Restaurant Website",
    description:
      "I made a beautiful Restaurant website using a custom Toggle Bar menu with HTML, CSS, and Java Script. This website also features a lovely animation.",
    technologies: ["Javascript", "HTML", "CSS"],
    siteUrl: "https://github.com/sushantkr384/restaurant-website-sushant.git",
    alt: "project1",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="project bg-[#f7f7f7]">
      <div className="projects_main_container w-[75%]">
        <div className="project_heading_sec p-4">
          <span className="heading">Projects</span>
          <span className="heading_para">
            Here, you can explore my personal projects about my current
            programming and technology skills. Each project represents a unique
            blend of creativity, problem-solving, and technical expertise.
          </span>
        </div>

        <div className="w-[90%] m-auto">
          {projectData.map((p) => (
            <div className="flex gap-24 p-8" key={p.id}>
              <div className="w-[68rem] ">
                <img
                  src={p.imgUrl}
                  alt={p.alt}
                  className=""
                />
              </div>
              <div className="">
                <p>{p.description}</p>

                <p>tech stack | <span>{p.technologies}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
