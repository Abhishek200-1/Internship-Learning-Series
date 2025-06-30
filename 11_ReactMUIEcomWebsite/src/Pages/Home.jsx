import React, { useState } from 'react'
import Header from './Header'
import ExploreMenu from '../Components/ExploreMenu'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Navbar from '../Components/Navbar'
import FoodDisplay from '../Components/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("All")
    const [showLogin, setShowLogin] = useState(false)

  return (
    <div id='home'>
      <Navbar setShowLogin={setShowLogin}/>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}

export default Home
