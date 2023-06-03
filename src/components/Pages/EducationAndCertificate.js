import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EducationImg from "../../Images/education.jpg";
import npsImg from "../../Images/national public school.jpg";
import schoolLogo from "../../Images/schoolLogo.jpg";
import iscImg from "../../Images/isc.jpg";
import iscLogo from "../../Images/isclogo.png";
import vbuImg from "../../Images/vbuImg.png";
import vbuLogo from "../../Images/vbulogo.jpg";

import LinkedIn from "../../Images/LinkedIn.png";
import GreatLearning from "../../Images/greatLearning.png";
import FreeCodeCamp from "../../Images/FreeCodeCamp.png";

import { RiShareBoxFill } from "react-icons/ri";

import AOS from "aos/";
import "aos/dist/aos.css";

function EducationAndCertification() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="EducationAndCertificationMainContainer">
        <section>
          <div className="EducationAndCertificationHeader">
            <div className="Left" data-aos="fade-up">
              <h2 id="Heading">Education Journey</h2>
              <p>
                My education journey has been an exciting and transformative
                path that has shaped my knowledge, skills, and personal growth.
                From the early stages of my academic life to the pursuit of
                higher education, each step has played a crucial role in shaping
                my educational foundation and preparing me for future endeavors.
                <br />
                <br />
                Education Is Not The Learning Of Facts, But The Training Of The
                Mind To Think.
              </p>
              <button>Start Now</button>
            </div>

            <div className="Right">
              <img
                src={EducationImg}
                alt="EducationHeaderImg"
                data-aos="fade-up"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="EducationContainer">
            <h3>Let's start</h3>

            <section>
              <div className="FirstContainer" data-aos="fade-up">
                <div className="schoolImg">
                  <img src={npsImg} alt="SchoolImg" data-aos="fade-up"/>
                </div>

                <div className="schoolDesc">
                  <div className="SchoolDescHeader">
                    <div className="SchoolLogo">
                      <img src={schoolLogo} alt="schoolLogo" />
                    </div>
                    <div className="SchoolName">
                      <h4>National Public School</h4>
                      <span>10th (2009-2019)</span>
                    </div>
                  </div>
                  <span>CBSE</span>
                  <p>
                  National Public School is a co-education, english medium, senior secondary school, affiliated with CBSE and located at New Area, Hazaribagh, Jharkhand. The school was established in 1977 and managed by Laxman Kaushaliya Chandravansi Memorial Educational Society.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="SecondContainer" data-aos="fade-up">
                <div className="schoolImg">
                  <img src={iscImg} alt="clgImg" data-aos="fade-up"/>
                </div>

                <div className="schoolDesc">
                  <div className="SchoolDescHeader">
                    <div className="SchoolLogo">
                      <img src={iscLogo} alt="iscLogo" />
                    </div>
                    <div className="SchoolName">
                      <h4>Inter Science College</h4>
                      <span>12th (2019-2021)</span>
                    </div>
                  </div>
                  <span>JAC - SCIENCE</span>
                  <p>
                  INTER SCIENCE COLLEGE HAZARIBAG is located in Rural area of Jharkhand state/ut of India. In Ward No.01 area of Hazaribagh block of Hazaribag district. The year of establishment of Inter Science College is 2005. Inter Science College is a Co-Educational school.  It is a Sr. Secondary School (Class 11-12), where lowest class is 11th and highest class is 12th.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="ThirdContainer" data-aos="fade-up">
                <div className="schoolImg">
                  <img src={vbuImg} alt="vbumcaImg" data-aos="fade-up"/>
                </div>

                <div className="schoolDesc">
                  <div className="SchoolDescHeader">
                    <div className="SchoolLogo">
                      <img src={vbuLogo} alt="schoolLogo" />
                    </div>
                    <div className="SchoolName">
                      <h4>University Department Of Computer Application</h4>
                      <span>UG (2021-2024)</span>
                    </div>
                  </div>
                  <span>VBU - BCA</span>
                  <p>
                    University Department of Computer Application of Vinoba Bhave University is  First AICTE approved department in the Jharkhand. The Year of Establishment is 2007. Vinoba Bhave University is funded by the agencies of Government of India and Jharkhand State. 
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section>
          <div className="CertificationContainer">
            <h4 id="Heading">Certificates</h4>

            <div className="CertificateRow">
              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/103f390627775ac646db9b9f96e0416c0d8657b50ea8d42643c29ada4c1cdace"
                  target="_blank"
                >
                  <img src={LinkedIn} alt="certificateImg" />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>React.js Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>11th April 2023</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/103f390627775ac646db9b9f96e0416c0d8657b50ea8d42643c29ada4c1cdace"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.freecodecamp.org/certification/fccb65a6b09-5d56-4634-9f0f-a90694dc30f3/responsive-web-design"
                  target="_blank"
                >
                  <img
                    src={FreeCodeCamp}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>Responsive Web Design</h4>
                  <h5>- FreeCodeCamp</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>19th Jan 2023</span>
                  <span>
                    <Link
                      to="https://www.freecodecamp.org/certification/fccb65a6b09-5d56-4634-9f0f-a90694dc30f3/responsive-web-design"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/43aa9ca58fbd35543038e084879024201effc3b3c9609a570c124f5343929664"
                  target="_blank"
                >
                  <img
                    src={LinkedIn}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>HTML Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>11th Dec 2022</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/43aa9ca58fbd35543038e084879024201effc3b3c9609a570c124f5343929664"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/658665b4f1c988e82c0a1cba378244d7dfc21ea8ff7f2689b2eff318ff254ef4"
                  target="_blank"
                >
                  <img
                    src={LinkedIn}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>PHP Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>27 Dec 2022</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/658665b4f1c988e82c0a1cba378244d7dfc21ea8ff7f2689b2eff318ff254ef4"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/658436/original/Rajiv_Ranjan20220101-15160-1xepsj6.jpg" target="_blank"
                >
                  <img
                    src={GreatLearning}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>C for Beginners</h4>
                  <h5>- Great Learning</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>Jan 2022</span>
                  <span>
                    <Link
                      to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/658436/original/Rajiv_Ranjan20220101-15160-1xepsj6.jpg"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/150df6a2f3bc40daf20f08d78ae16b28913a19ece16e7cdded3464155e7bcfa5"
                  target="_blank"
                >
                  <img
                     src={LinkedIn}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>SQL Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>26 Dec 2022</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/150df6a2f3bc40daf20f08d78ae16b28913a19ece16e7cdded3464155e7bcfa5"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/654919/original/Rajiv_Ranjan20211231-19143-iev0vv.jpg"
                  target="_blank"
                >
                  <img
                     src={GreatLearning}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>Introduction to digital marketing</h4>
                  <h5>- Great Learning</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>Dec 2021</span>
                  <span>
                    <Link
                      to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/654919/original/Rajiv_Ranjan20211231-19143-iev0vv.jpg"
                      target="_blank"
                    >
                      <RiShareBoxFill size={"25px"} />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default EducationAndCertification;
