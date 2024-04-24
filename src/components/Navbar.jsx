import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
                <ul className="d-flex flex-row justify-content-end" id="navbar-text">
                    <li><Link className="navbar-text" to="/">Home</Link> </li>
                    <li><Link className="navbar-text" to="/portfolio">Portfolio</Link> </li>
                    <li><Link className="navbar-text" to="/contact">Contact</Link> </li>
                    <li><Link className="navbar-text" to="/resume">Resume</Link> </li>
                </ul>
    </header>
  )
}
