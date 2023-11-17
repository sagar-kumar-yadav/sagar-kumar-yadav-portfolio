import React from "react";
import "../projects/projects.css";
import project from "../../assets/images/projects_imgs/project.png";
// import Project1 from "../../assets/project1.png";
// import Project3 from "../../assets/project3.png";
// import Project2 from "../../assets/project2.png";
// import Project4 from "../../assets/project4.png";
import Github from "../../assets/icons8-github-30.png";

const projectData = [
  {
    id: "01",
    imgUrl: "src/assets/images/projects_imgs/project.png",
    category: "Web Design",
    title: "eCommerce Website🛒",
    description:
      "Developed a fully functional e-commerce website, enabling exclusive shopping access for registered users. Users can effortlessly add or remove items from their cart and refine product searches by price and category.",
    technologies: "React, Node.js, Express.js, MongoDB, RestAPI",
    siteUrl:
      "https://github.com/sagar-kumar-yadav/eCommerce-Application-Using-MERN",
    liveUrl: "#",
    alt: "project",
  },
  {
    id: "02",
    imgUrl: "src/assets/images/projects_imgs/project1.png",
    category: "Web Design",
    title: "Image Search Application🖼️",
    description:
      "I create an image search application, I use the Unsplash API to get access to a vast collection of images. You can create a search bar that allows users to search for images based on keywords. I can also add pagination to your application to display the images in a more organized manner",
    technologies: "HTML, CSS, Javascript",
    siteUrl:
      "https://github.com/sagar-kumar-yadav/Image-Search-Application-Using-Javascript",
    liveUrl: "https://dancing-biscuit-d6a534.netlify.app/",
    alt: "project1",
  },
  {
    id: "03",
    imgUrl: "src/assets/images/projects_imgs/project4.png",
    category: "Web Design",
    title: "Drum Kit Website🏩",
    description:
      "I create a drum kit website using JavaScript, HTML, and CSS. The website have buttons that represent different drums in a typical drum set. When you click on any of those buttons, you’ll get the corresponding sound of the drum.",
    technologies: "HTML, CSS, Javascript",
    siteUrl: "https://github.com/sagar-kumar-yadav/Drum-Kit",
    liveUrl: "https://sweet-travesseiro-540fdd.netlify.app/",
    alt: "project4",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="project bg-[#1c1a1a] text-white dark:text-black dark:bg-[#f7f7f7]"
    >
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
            <div className="flex items-center gap-24 p-8 " key={p.id}>
              <div className="w-[68rem] ">
                <img src={p.imgUrl} alt={p.alt} className="" />
              </div>
              <div className="">
                <p className=" text-center font-bold pb-2">{p.title}</p>
                <p className="text-center max-w-4xl">{p.description}</p>

                <p className="text-center pt-1">
                  <span className=" font-semibold">
                    Tech Stack | {p.technologies}
                  </span>
                </p>
                <div className="flex items-center justify-evenly pt-4">
                  <div className="flex items-end gap-1">
                    <span className=" font-semibold">code</span>
                    <span className="w-6">
                      <a href={p.siteUrl}>
                        <img
                          src={Github}
                          alt="code"
                          className="bg-white rounded-full"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className=" font-semibold">Live Demo</span>
                    <span className="w-5">
                      <a href={p.liveUrl}>
                        <img
                          src="/src/assets/open_in_new.png"
                          alt="live-demo"
                          className="bg-white rounded"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
