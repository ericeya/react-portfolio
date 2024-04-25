import React from 'react'
import './Resume.css'
import uciboot from '../assets/uci-bootcamp-logo.png'
import codecademy from '../assets/codecademy-logo.png'
import kindlend from '../assets/kindlending_logo.jpg'
import homepoint from '../assets/homepointloans_logo.jpg'
import oam from '../assets/OAM-logo.png'
import compass from '../assets/Compass-logo.jpg'
import ethos from '../assets/Ethos-lending-logo.jpg'
import usc from '../assets/uscmarshall-logo.jpg'
import koreauniv from '../assets/korea-univ-logo.jpg'
import resume from '../assets/Resume_Eric_Lee_2024.pdf'

export default function Resume() {
    return (
        <>
            <div className='container'>
                <div className='overlay-resume'>

                <section className="resume">
                    <h2 className="title-resume mb-5">Resume</h2>
                    <div className='row'>
                        <div className="col-12">
                            <h5 className='mb-5'>
                                • Download <a href={resume} download="Resume.pdf"> Resume</a>
                            </h5>
                        </div>

                    </div>
                    <div className="row resume-content">
                        <div className="year">
                            <h3 className='mb-3'>Software Development Experiences</h3>
                            <hr />
                            <h5 className='mb-3'>Feb 2024 - May 2024</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={uciboot} alt="Logo of UCI bootcamp" id="logos" />
                                </div>
                                <div className="col-10 position">
                                    <h6>UCI Bootcamp</h6>
                                    <p> Full-time bootcamp student for coding</p>
                                    <ul>
                                        <li>CSS</li>
                                        <li>HTML</li>
                                        <li>Javascript</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>React</li>
                                        <li>MERN</li>
                                        <li>Web API</li>
                                        <li>SQL</li>
                                        <li>Object-oriented Programming (OOP)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <h5 className='mb-3'>Oct 2023 - Feb 2024</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={codecademy} alt="Logo of Codecademy" id="logos"/>
                                </div>
                                <div className="col-10 position">
                                    <h6>Codecademy</h6>
                                    <p> Full-time self-study student for coding</p>
                                    <ul>
                                        <li>Basic HTML</li>
                                        <li>C</li>
                                        <li>Python</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <h3 className='mb-3 mt-5'>Professional Experiences</h3>
                            <hr />
                            <h5 className='mb-3'>Apr 2023 - Oct 2023</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={kindlend} alt="Logo of Kind Lending" id="logos"/>
                                </div>
                                <div className="col-10 position">
                                    <h6>Kind Lending</h6>
                                    <p> Senior Gov't Underwriter</p>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <h5 className='mb-3'>Mar 2020 - Apr 2023</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={homepoint} alt="Logo of Homepoint Financial" id="logos"/>
                                </div>
                                <div className="col-10 position">
                                    <h6>Homepoint Financial</h6>
                                    <p> Senior Gov't Underwriter</p>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <h5 className='mb-3'>Mar 2020 - Apr 2023</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={homepoint} alt="Logo of Homepoint Financial" id="logos"/>
                                </div>
                                <div className="col-10 position">
                                    <h6>Homepoint Financial</h6>
                                    <p> Senior Gov't Underwriter</p>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <h5 className='mb-3'>Jul 2019 - Feb 2020</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={oam} alt="Logo of One American Mortgage" id="logos"/> 
                                </div>
                                <div className="col-10 position">
                                    <h6>One American Mortgage</h6>
                                    <p> Senior Gov't Underwriter</p>
                                </div>
                            </div>
                        </div>
                        <div className="year">
                            <h5 className='mb-3'>Feb 2019 - Jun 2019</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={oam} alt="Logo of One American Mortgage" id="logos"/> 
                                </div>
                                <div className="col-10 position">
                                    <h6>Compass Analytics</h6>
                                    <p> Investor Relations Specialist - experience with mySQL backend data management</p>
                                </div>
                            </div>
                        </div>

                        <div className="year">
                            <h5 className='mb-3'>Jan 2016 - Nov 2018</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={ethos} alt="Logo of Ethos Lending LLC" id="logos"/> 
                                </div>
                                <div className="col-10 position">
                                    <h6>Ethos Lending</h6>
                                    <p> Underwriter II</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="year">
                            <h3 className='mb-3 mt-5'>Educational Background</h3>
                            <hr />
                            <h5 className='mb-3'>Graduated in May 2012</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                    <img src={usc} alt="Logo of USC Marshall school of business" id="logos"/>
                                </div>
                                <div className="col-10 position">
                                    <h6>USC Marshall School of Business</h6>
                                    <p> Bachelor of Science in Business Administration with concentration of international business</p>
                                </div>
                            </div>
                        </div>

                        <div className="year">
                            <h5 className='mb-3'>Exchange student in Spring 2011</h5>
                            <div className="row job-history">
                                <div className='col-2 time-line'>
                                <img src={koreauniv} alt="Logo of Korea University" id="logos"/> 
                                </div>
                                <div className="col-10 position">
                                    <h6>Korea University</h6>
                                    <p> International exchange program to learn business at the top 3 university in Korea amongst the Korea's smartest students</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
                </div>
            </div>
        </>
    )
}
