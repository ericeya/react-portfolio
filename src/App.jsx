import { useState, useRef } from 'react'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import sunset from './assets/sunset-nightsky.jpg'
import sunset2 from './assets/sunset-nightsky2F.png'
import sunset3 from './assets/sunset-nightsky3F.png'
import mt1 from './assets/lens1.jpg'
import mt2 from './assets/layer1F.png'
import mt3 from './assets/layer2F.png'
import mt4 from './assets/layer3F.png'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {



  return (
    <>
      <Navbar/>
      <div>
          <Parallax pages={4} className="d-flex justify-content-center">
          <ParallaxLayer className="d-flex justify-content-center"
            offset={0}
            speed={0.5}
            factor={3}
            style={{
              backgroundImage: `url(${sunset})`,
              backgroundSize: `cover`
              
            }}
            >
            <h2 className='mt-5'>About Me</h2>
          </ParallaxLayer>

          
          <ParallaxLayer className="d-flex justify-content-center" 
            offset={0.5}
            speed={0.5}
            >
            <h3>This is my website</h3>
          </ParallaxLayer>



        </Parallax>


        
      </div>
    </>
  )
}

export default App
