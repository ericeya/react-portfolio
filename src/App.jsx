import { useState, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './components/Home'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'

function App() {



  return (
    <>
      <Router>
        <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path='/contact' element={<Portfolio/>} />
              <Route path='/resume' element={<Portfolio/>} />
            </Routes>
          </div>
        <Footer/>
      </Router>
    </>
  )
}

export default App
