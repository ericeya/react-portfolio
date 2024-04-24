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

function App() {



  return (
    <>
      <Router>
        <Navbar />
        <body>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<h3>This is my profile Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nihil minus sunt repellat eum id cum dignissimos accusantium officiis delectus excepturi minima, voluptas est rem? Sunt voluptatibus est consequatur suscipit!</h3>

              } />
            </Routes>
          </div>
        </body>
        <Footer/>
      </Router>
    </>
  )
}

export default App
