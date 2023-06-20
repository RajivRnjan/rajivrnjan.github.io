import { React, useEffect } from "react";

import HeroSection from "../HeroSection";
import Help from "../Help";
import MyJourney from "../MyJourney";
import MyWork from "../MyWork";
import GetInTouch from "../GetInTouch";

import AOS from "aos";
import "aos/dist/aos.css";

import human from "../../Images/human.png";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection />
      <Help />
      <MyJourney />
      <MyWork />

     

      <div className="thankingContainer">
        <p>
          Thank you for visiting my portfolio website! I hope this glimpse into
          my skills and experiences has provided you with a better understanding
          of how I can add value to your projects. If you have any inquiries or
          would like to discuss potential collaborations, please don't hesitate
          to reach out. I look forward to connecting with you soon!
        </p>
        {/* <div className="bubbles">
        <div className="firstBubble"></div>
        <div className="secondBubble"></div>
        </div> */}
        
        <div className="humanImage">
          <img className="human" src={human} alt="human" />
        </div>

        <GetInTouch />
      </div>
    </>
  );
}

export default Home;
