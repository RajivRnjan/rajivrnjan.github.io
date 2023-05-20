import {React,useEffect} from "react";
import { Link } from "react-router-dom";
import contactImg from "../../Images/contact-us.jpg";
import {
  BsFillPeopleFill,
  BsPenFill,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";

import { GrLinkedin } from "react-icons/gr";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (

    <>
    <main>
      <div className="GetInTochMainContainer">
      <section>
        <div  className="GetInTouch" >
          <div className="left_container" data-aos="fade-up">
            <h2 id="Heading">Get In Touch</h2>
            <p>We are there for you! How can I help?</p>

            <form>
              <div className="inputContainer" data-aos="fade-right">
                <BsFillPeopleFill />
                <input type="text" name="name" placeholder="Enter your Name" />
              </div>

              <div className="inputContainer" data-aos="fade-right">
                <MdEmail />
                <input type="email" name="email" placeholder="Enter Email" />
              </div>

              <div className="inputContainer" data-aos="fade-right">
                <BsPenFill />
                <textarea placeholder="Write something about your query"></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="right_container" >
            <img src={contactImg} alt="contactimage" data-aos="fade-down"/>
            <div className="socialIcon" >
              <ul>
                
                <span>
                  <li data-aos="fade-right">
                    <Link to="https://www.linkedin.com/in/rajiv-ranjan-5b6733227/" target="_blnak">
                    <GrLinkedin className="LinkedinIcon"
                      size={"30px"}
                      
                    /></Link>
                  </li>
                </span>

                <span>
                  <li data-aos="fade-up">
                    <Link to="https://github.com/RajivRnjan" target="_blank">
                    <BsGithub className="GithubIcon" size={"35px"} />
                    </Link>
                  </li>
                </span>

                <span>
                  <li data-aos="fade-left">
                  <Link to="https://twitter.com/rajiv_ranjan_1?t=JhwP7fOpEzXk2GXDXYHuNw&s=08" target="_blank">
                    <BsTwitter className="twitterIcon" size={"35px"}  />
                    </Link>
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ContactFooterContainer" data-aos="fade-up">
          <p>Feel free to contact Us</p>

          <div className="ContactFooterElement">
            <div>
              <span>
                <MdPhone className="ContactFooterIcon"/>
              </span>
              <p>+91 9693482587</p>
            </div>
            <div>
              <span>
                <MdEmail className="ContactFooterIcon"/>
              </span>
              <p>rajivforyu@gmail.com</p>
            </div>
            <div>
              <span>
                <MdLocationOn className="ContactFooterIcon"/>
              </span>
              <p>Hazaribagh Jharkhand 825301</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      </main>
    </>
  );
}

export default Contact;
