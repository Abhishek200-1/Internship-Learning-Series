import React from 'react'
import Footer from './Components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import MyOrders from './Pages/MyOrders'
import Profile from './Pages/Profile'
import { useState } from 'react'


const App = () => {

   const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='container'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/my-orders' element={<MyOrders/>}/>
          <Route path='/my-profile' element={<Profile/>}/>         
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
