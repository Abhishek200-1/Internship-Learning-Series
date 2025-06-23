import React from 'react'
import Header from './Header'
import ExploreMenu from '../Components/ExploreMenu'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div id='home'>
      <Navbar/>
      <Header/>
      <ExploreMenu/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}

export default Home
