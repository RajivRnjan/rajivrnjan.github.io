import  {React, useEffect } from 'react';

import HeroSection from '../HeroSection';
import Help from '../Help';
import MyJourney from '../MyJourney';
import MyWork from '../MyWork';
import PeopleAboutMe from '../PeopleAboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 
  return (
    <>
    <HeroSection/>
    <Help/>
    <MyJourney/>
    <MyWork/> 
    {/* <PeopleAboutMe/> */}
    </>
  )
}

export default Home