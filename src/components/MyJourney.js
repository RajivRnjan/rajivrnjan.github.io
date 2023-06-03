import {React,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";

function MyJourney() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  return (
    <>
      <section>
        <div className="WorkExperienceContainer" data-aos="fade-up">
          <div className="TopSection">
            <header>
            <h1 id="Heading">My Journey</h1>
            </header>
          </div>

          <div className="BottomSection">
            <div className="BottomLeftContainer">
              <div className="Item">
                <h2>Matriculation</h2>
                <p>March 2019</p>
              </div>
              <div className="Item">
                <h2>Intermediate</h2>
                <p>2019 - 2021</p>
              </div>
              <div className="Item">
                <h2>Graduation </h2>
                <p>2021 - 2024</p>
              </div>
            </div>

            {/* <div className="RightPart"> */}
            {/* Progress Bar Start */}
            <div className="BottomRightContainer">
              <section className="ProgressBar">
                <div className="OuterCircle">
                  <div className="InnerCircle InnerCircle1-bg-color"></div>
                </div>
                <div className="Line"></div>

                <div className="OuterCircle">
                  <div className="InnerCircle InnerCircle2-bg-color"></div>
                </div>
                <div className="Line"></div>

                <div className="OuterCircle">
                  <div className="InnerCircle InnerCircle3-bg-color"></div>
                </div>
                <div className="Line"></div>
              </section>
              {/* Progress Bar End*/}

              <div className="ExperienceItems">
                <div className="ExperienceItem" data-aos="fade-up">
                  <h2>Matriculation</h2>
                  <p>
                    <IoIosArrowDroprightCircle />
                    Completed in 2019
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle />
                    National Public School Hazaribagh
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle />
                    Central Board of Secondary Education
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle />
                    Percentage : 84.4%
                  </p>
                </div>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h2>Intermediate</h2>
                  <p>
                    <IoIosArrowDroprightCircle />
                    2019 - 2021
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle />
                    Inter Science College Hazaribagh.
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle />
                    Jharkhand Academic Council (JAC)
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle />
                    Percentage : 84%
                  </p>
                </div>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h2>Graduation</h2>
                  <p>
                    <IoIosArrowDroprightCircle />
                    2021 - 2024
                  </p>
                  <p>
                    <IoIosArrowDroprightCircle size="25px" />
                    University Department of Computer Application, Vinoba Bhave
                    University
                  </p>

                  <p>
                    <IoIosArrowDroprightCircle />
                    SGPA : 8.24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyJourney;