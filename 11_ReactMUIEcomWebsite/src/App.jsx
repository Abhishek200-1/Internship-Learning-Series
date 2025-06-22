import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import Home from './Pages/Home'
import ExploreMenu from './Components/ExploreMenu'


const App = () => {
  return (
    <>
      <div className='container'>
      <Header/>
      {/* Routes Come here */}
      <main className='global-padding-wrapper'>
        <Home/>
        <ExploreMenu/>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App
