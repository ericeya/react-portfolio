import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import djRUs from '../assets/demo1.gif'
import noteTaker from '../assets/note-taker-app.gif'
import readmeGen from '../assets/readmeGen.png'
import weather from '../assets/weather.png'
import brews from '../assets/brews.png'
import mbuddy from '../assets/mbuddy.png'




const portfolioObj = [
    {
        github: 'https://github.com/ericeya/DJ-R-Us',
        screenshot: djRUs,
        title:'DJ R Us',
        description: 'hello world this is a great app'
    },
    {
        github: 'https://github.com/ericeya/note-taker-app',
        screenshot: noteTaker,
        title:'Note Taker App',
        description: 'hello world this is a great app'
    },
    {
        github: 'https://github.com/ericeya/readme-generator',
        screenshot: readmeGen,
        title:'Readme Generator',
        description: 'hello world this is a great app'
    },
    {
        github: 'https://github.com/ericeya/weather-dashboard',
        screenshot: weather,
        title:'Weather Dashboard',
        description: 'hello world this is a great app'
    },
    {
        github: 'https://github.com/brad-wall01/Brews-Grooves',
        screenshot: brews,
        title:'Brews and Grooves',
        description: 'hello world this is a great app'
    },
    {
        github: 'https://github.com/ericeya/mortgage-buddy',
        screenshot: mbuddy,
        title:'Mortgage Buddy',
        description: 'hello world this is a great app'
    }
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
                        <Card className='proj-card' key={portf}>
                        <Card.Img variant="top" src={portf.screenshot} />
                        <Card.Body>
                            <Card.Title>{portf.title}</Card.Title>
                            <Card.Text>
                                {portf.description}
                            </Card.Text>
                            <Button variant="primary" className='proj-card-button'><a href={portf.github} target="_blank">Github</a></Button>
                        </Card.Body>
                    </Card>

                    ))
                }
                    
                </div>
            </div>
        </>
    )
}
