import React, { useEffect } from "react";
import skill from "../../Images/skills.jpg";
import thumbnail from '../../Images/thumbnail.jpg';

import { BsFillStarFill } from "react-icons/bs";
import AOS from 'aos';
import "aos/dist/aos.css";


function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ProjectsMainContainer">
        <section data-aos="fade-up">
          <div className="ProjectHeader">
            <div className="ProjectHeaderLeft">
              <h2 id="Heading">Projects & Experience</h2>
              <p>
              You can find all of my projects on my profile on Github. You can view my activities, contributions and code on these projects. Some of these are completed and some are in progress. You can also leave comments on the profile and start a discussion. I am always looking for new projects and Ideas. You can also reach out to me on any of the social media channels mentioned below.
              </p>

              <div className="starbtn" >
                <button>
                  <span>
                    <BsFillStarFill className="star" size={"20px"} color="orange" />
                  </span>
                  Star me on Github
                </button>
              </div>
            </div>

            <div className="ProjectHeaderRight" data-aos="fade-down">
              <img src={skill} alt="ProjectsImage" />
            </div>
          </div>
        </section>


        <div className="ProjectsContainer">
        
         <section data-aos="fade-up">
            <div className="ProjectsMenu">
              <button data-aos="fade-up">All Here</button>
              <button data-aos="fade-up">Web Application</button>
              {/* <button data-aos="fade-up">Web Application</button> */}
            </div>
          </section>
          

          <section data-aos="fade-up">

            <div className="ProjectsRow">
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>
              

              
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>
              

              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

            
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

            
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

            
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

            
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

            
              <div className="ProjectItem" >
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor  
                  </h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

            
            </div>
            </section>
       </div>
        
      </div>
    </>
  );
}

export default Projects;
