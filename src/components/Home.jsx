
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import micro from '../assets/microchip.jpg'
import rock from '../assets/rock.jpg'
import video from '../assets/tennis.mp4'
import Sample from './Sample'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 

export default function Home() {
    return (
        <>
            <Parallax pages={2} className="d-flex justify-content-center">
                <ParallaxLayer className="d-flex justify-content-center"
                    offset={0}
                    speed={0.2}
                    factor={3}
                    style={{
                        backgroundImage: `url(${rock})`,
                        width: '100%',
                        objectPosition: 'center',
                        zIndex: '0',
                        opacity: 1

                    }}
                >
                </ParallaxLayer>

                <ParallaxLayer className="d-flex justify-content-center"
                    offset={0}
                    speed={0.5}
                    factor={1}
                >
                    <div className="container about-me-container">
                        <div className='row text-center mb-5'>
                            <h3 id="About-me">About me</h3> 

                        </div>
                        <div className='row d-flex justify-content-between picture-container'>
                            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                                <img src="/src/assets/self.png" alt="myself" id="about-me-pic" />

                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8'>
                                <p className='lh-lg' id="about-me-p">
                                Right out of my USC Undergraduate as a business major, I worked as an logistics manager, an accountant, and ended up with mortgage industry. I have been a mortgage underwriter for the past 8 years successfully achieving a lot of respect from many of the people I worked with and deeply rooting my networks amongst the mortgage professionals. <br></br><br></br> However, with volatile mortgage industry, I realized my passion was really in making things better and more efficient. I decided to take the time needed to get into a bootcamp to learn coding and start my new chapter in life to be a better contributor to the world we live in.<br></br><br></br>
                                As much as I have grown to love coding, I also love playing tennis!😀
                                </p>

                            </div>
                        </div>
                        
                        
                    </div>
                </ParallaxLayer>

                <ParallaxLayer className="d-flex justify-content-center"
                    offset={1}
                    speed={0.7}
                >
                    <div className='container'>
                        <div className='row d-flex justify-content-center text-center'>
                            <h3 className='text-light' id="videotag">Tennis &gt;  Pickleball</h3>
                            <ReactPlayer url='https://youtube.com/shorts/kV9uZEsHM1Y' playing={true} loop={true} muted={true} width="400px" height="665px" id="video-player"/>
                        </div>
                    </div>

                </ParallaxLayer>

            </Parallax>

        </>
    )
}

