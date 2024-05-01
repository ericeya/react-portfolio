import djRUs from '../assets/demo1.gif'
import noteTaker from '../assets/note-taker-app.gif'
import readmeGen from '../assets/readmeGen.png'
import weather from '../assets/weather.png'
import brews from '../assets/brews.png'
import mbuddy from '../assets/mbuddy.png'
import Project from './Card/Project';




const portfolioObj = [
    {
        id: 1,
        github: 'https://github.com/ericeya/DJ-R-Us',
        screenshot: djRUs,
        title: 'DJ R Us',
        description: 'A social platform for dad-joke enthusiasts! Read, post, like, and save the dad joke posts!'
    },
    {
        id: 2,
        github: 'https://github.com/brad-wall01/Brews-Grooves',
        screenshot: brews,
        title: 'Brews and Grooves',
        description: 'One stop place to search for local breweries and finding nearby music events! Stop by and search for an adventure!'
    },
    {
        id: 3,
        github: 'https://github.com/ericeya/mortgage-buddy',
        screenshot: mbuddy,
        title: 'Mortgage Buddy',
        description: 'This terminal application helps you calculate mortgage payment based on loan amount. Also it has options to evaluate whether you will be qualified for a conventional loan based on your financial situation using webscraping to grab a live national rate! Come check it out! '
    },
    {
        id: 4,
        github: 'https://github.com/ericeya/weather-dashboard',
        screenshot: weather,
        title: 'Weather Dashboard',
        description: 'With weather API, this site searches real time data on weather information on the searched cities.'
    },
    {
        id: 5,
        github: 'https://github.com/ericeya/note-taker-app',
        screenshot: noteTaker,
        title: 'Note Taker App',
        description: 'This simple web app allows you to write, save, and delete simple notes to help you keep track of things!'
    },
    {
        id: 6,
        github: 'https://github.com/ericeya/readme-generator',
        screenshot: readmeGen,
        title: 'Readme Generator',
        description: 'This was a terminal application that for generating README file for your projects with a simple template that you can modify further afterwards.'
    },
]

export default function Portfolio() {
    return (
        <>
            <div className="container">
                <div className='portfolio-header mb-3'>
                    <h2>Portfolio</h2>

                </div>
                <div className="portfolio-container">
                    {
                        portfolioObj.map((portf) => (
                            <Project key={portf.id} title={portf.title} screenshot={portf.screenshot} description={portf.description} github={portf.github} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
