import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Images/RajivPhoto.jpg";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <main>
        <section>
          <div className="HeroContainer" data-aos="fade-left">
            <aside>
              <div className="LeftHeroContainer">
                <div className="Image">
                  <img src={Image} alt="OurImage" />
                </div>
              </div>
            </aside>
            <div className="RightHeroContainer">
              <div className="OurPosition">
                <h2>Frontend developer</h2>
              </div>
              <div className="Heading">
                <h1>Rajiv Ranjan</h1>
              </div>
              <div className="Description">
                <p>
                  I'm a WebDeveloper with learing experience of 1 year.
                  Currently pursing BCA from Vinoba Bhave University. I am very
                  passionate about improving my coding skill & developing
                  website and applications.
                  <br />
                  <br />
                  Working for myself to imporve my skills.
                </p>
              </div>
              <div className="HeroSectionButton">
                <button className="HeroSectionButton1">Download CV</button>
                <a href="#getintouch">
                  <button className="HeroSectionButton2">Contact</button>
                </a>
                {/* <Link to="/contact"></Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroSection;
