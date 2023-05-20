import { React, useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

import AOS from "aos";
import "aos/dist/aos.css";

function Resume() {
  // const { ref:myRef, inView:myElementIsVisible} = useInView();
  const { ref, inView } = useInView();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="ResumeContainer">
        <header>
          <h1 id="Heading" className="resume">
            RESUME
          </h1>
        </header>

        <section data-aos="fade-up">
          <div className="TopLevelResumeContainer">
            <div className="topLeftmostResumeContainer">
              <div className="topLeftmostResumeContainerHeading">
                <h2>Education</h2>
              </div>
              <div className="topLeftResumeContainer">
                <span class="sideLine" data-aos="fade-up"></span>
                <div className="EducationItem" data-aos="fade-up">
                  <h4>Matriculation</h4>
                  <span className="date">2019</span>
                  <span>CBSE</span>
                  <p className="EduacationDesc">
                  Matriculation education, also referred to as secondary education or high school education, is an important phase in a student's academic journey. 
                  </p>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="EducationItem" data-aos="fade-up">
                  <h4>Intermediate</h4>
                  <span className="date">2021</span>
                  <span>JAC</span>
                  <p className="EduacationDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quod sed aliquid, maxime quos delectus aperiam
                    cupiditate. Assumenda, in omnis.
                  </p>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="EducationItem" data-aos="fade-up">
                  <h4>Graduation</h4>
                  <span className="date">2024</span>
                  <span>AICTE</span>
                  <p className="EduacationDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quod sed aliquid, maxime quos delectus aperiam
                    cupiditate. Assumenda, in omnis.
                  </p>
                </div>
              </div>
            </div>

            <div className="topRightmostResumeContainer">
              <div className="topRightmostResumeContainerHeading">
                <h2>Experience</h2>
              </div>
              <div className="topRightResumeContainer" data-aos="fade-up">
                <span class="sideLine" data-aos="fade-up"></span>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h4>Frontend-Developer</h4>
                  <span className="date">2019</span>
                  <span>CBSE</span>
                  <p className="EdxperienceDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quod sed aliquid, maxime quos delectus aperiam
                    cupiditate. Assumenda, in omnis.
                  </p>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h4>Web Designer</h4>
                  <span className="date">2019</span>
                  <span>CBSE</span>
                  <p className="EdxperienceDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quod sed aliquid, maxime quos delectus aperiam
                    cupiditate. Assumenda, in omnis.
                  </p>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h4>Graphics Designer</h4>
                  <span className="date">2019</span>
                  <span>CBSE</span>
                  <p className="EdxperienceDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste quod sed aliquid, maxime quos delectus aperiam
                    cupiditate. Assumenda, in omnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bottomResumeContainer">
            <div className="bottomLeftResumeContainer" data-aos="fade-up">
              <h2>Coding Skills</h2>

              <div className="progress">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div className="progressvaluecontainer">
                <div className="progressvalueHtml"></div>
              </div>

              <div className="progress">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="progressvaluecontainer">
                <div className="progressvalueJavascript"></div>
              </div>

              <div className="progress">
                <span>ReactJs</span>
                <span>60%</span>
              </div>
              <div className="progressvaluecontainer">
                <div className="progressvalueReactjs"></div>
              </div>

              <div className="progress">
                <span>Php</span>
                <span>75%</span>
              </div>
              <div className="progressvaluecontainer">
                <div className="progressvaluePhp"></div>
              </div>
            </div>

            <div className="bottomRightResumeContainer" data-aos="fade-up">
              <h2>Other Skills</h2>
              <div className="circularProgressBarContainer">
                <div className="circularprogress" data-aos="zoom-in">
                  <div className="outerCircle">
                    <div className="innerCircle">
                      <div id="number">80%</div>
                      <div id="skill">Communication</div>
                    </div>
                  </div>

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#12c54b" />
                        <stop offset="100%" stop-color="#0a622c" />
                      </linearGradient>
                    </defs>
                    <circle
                      ref={ref}
                      className="circle1"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div className="circularprogress" data-aos="zoom-out">
                  <div className="outerCircle">
                    <div className="innerCircle">
                      <div id="number">70%</div>
                      <div id="skill">Logic</div>
                    </div>
                  </div>

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="circle2"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div className="circularprogress" data-aos="zoom-in">
                  <div className="outerCircle">
                    <div className="innerCircle">
                      <div id="number">75%</div>
                      <div id="skill">Problem Solving</div>
                    </div>
                  </div>

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="circle3"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Resume;
