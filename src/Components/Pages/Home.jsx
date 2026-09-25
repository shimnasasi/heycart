import React from 'react'
import HomeBanner from '../Layout/HomeBanner'
import Navbar from '../Layout/Navbar'
import HomeBenefits from '../Layout/HomeBenefits'
import ProductExperience from '../Layout/ProductExperience'
import ShoppingJourney from '../Layout/ShoppingJourney'
import Sustainability from '../Layout/Sustainability'
import ContactCTA from '../Layout/ContactCTA'
import Footer from '../Layout/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <HomeBenefits/>
        <ProductExperience/>
        <ShoppingJourney/>
        <Sustainability/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default Home