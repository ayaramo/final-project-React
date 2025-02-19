import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Navbar from './Components/navbar'
import Footer from './Components/Footer'
import Booking from './Pages/BookingComponent'
import Cards from './Pages/Cards'
import Card from './Pages/Card'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/register' element={ <SignUp />} />
        <Route path='/booking' element={ <Booking />} />
        <Route path='/cards' element={ <Cards />} />
        <Route path='/card' element={ <Card />} />



      </Routes>

      <Footer />
    </>
  )
}

export default App
