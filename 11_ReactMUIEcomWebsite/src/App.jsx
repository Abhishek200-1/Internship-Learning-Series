import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import Home from './Pages/Home'
import ExploreMenu from './Components/ExploreMenu'
import FoodDisplay from './Components/FoodDisplay'

const App = () => {
  return (
    <>
      <div className='container'>
      <Header/>
      {/* Routes Come here */}
      <main className='global-padding-wrapper'>
        <Home/>
        <ExploreMenu/>
        <FoodDisplay/>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App
