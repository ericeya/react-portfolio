import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer-content'>
            <div className='row'>

                <div className='col-12'>
                    <Link to="https://www.github.com/ericeya" target="_blank" id="profilelinks">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
                <div className='col-12'>
                    <Link to="https://www.instagram.com/ericleecious/" target="_blank" id="profilelinks">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
                <div className='col-12'>
                    <Link to="https://www.linkedin.com/in/erichlee/" target="_blank" id="profilelinks">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
                <div className='col-12'>
                    <p>2024 &copy; <br></br>Eric Lee</p>
                </div>

            </div>
        </footer>
    )
}

