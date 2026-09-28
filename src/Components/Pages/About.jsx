import React from 'react'
import AboutBanner from '../Layout/AboutBanner'
import OurStory from '../Layout/OurStory'
import OurPurpose from '../Layout/OurPurpose'
import MissionVision from '../Layout/MissionVision'
import WhyHeyCarts from '../Layout/WhyHeyCarts'
import AboutTechnology from '../Layout/AboutTechnology'
import AboutSustainability from '../Layout/AboutSustainability'
import AboutCTA from '../Layout/AboutCTA'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'


const About = () => {
  return (
    <div>
<Navbar/>
<AboutBanner/>
<OurStory/>
<OurPurpose/>
<MissionVision/>
<WhyHeyCarts/>
<AboutTechnology/>
<AboutSustainability/>
<AboutCTA/>
<Footer/>


    </div>
  )
}

export default About