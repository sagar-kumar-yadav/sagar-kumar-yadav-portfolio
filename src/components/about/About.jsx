import React from "react";
import "../about/about.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about_main_cont ">
        <div className="about_heading_sec">
          <span className="aboutTitle">About me</span>
          <span className="aboutDesc">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </div>

        <div className="about_grid w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20">
          <div className="about_grid_cont">
            <h3 className="about_grid_heading">Get to know me!</h3>
            <div className="about_content_details">
              <p className="about_para">
                I'm a <strong>Web Developer</strong> building the
                Front-end and Back-end of the Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the{" "}
                <strong>Projects</strong> section.
              </p>
              <p className="about_para">
                My foundation in <strong>computer science</strong> extends to
                strong knowledge of
                <strong> Java</strong>. I have hands-on experience in
                implementing{" "}
                <strong>Data Structures and Algorithms (DSA)</strong> concepts,
                which have equipped me with problem-solving skills crucial for
                efficient software development.
              </p>
              <p className="about_para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a opportunity that
                matches my skills then don't hesitate to 
                <strong> contact</strong> me.
              </p>
            </div>
            <div className="mt-10 flex gap-10">
          
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className="hire_me_btn text-lg text-white rounded-md py-3 px-5"
              >
                Contact
              </Link>
            
            </div>
          </div>

          <div className="about_skills p-4">
            <h3 className="about_skills_header">My Skills</h3>
            <div className="skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React.js</div>
              <div className="skill">JAVA</div>
              <div className="skill">Python</div>
              <div className="skill">Node.js</div>
              <div className="skill">Express.js</div>
              <div className="skill">MongoDB</div>
              <div className="skill">MySql</div>
              <div className="skill">Tailwind</div>
              <div className="skill">Git</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
