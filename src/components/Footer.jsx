import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
    return (
        <footer className='footer-content'>
            <div className='row'>

            <div className='col-12'>
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className='col-12'>
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className='col-12'>
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className='col-12'>
                <p>2024 &copy; <br></br>Eric Lee</p>
            </div>

            </div>
        </footer>
    )
}

