import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location=useLocation()
  console.log(location)
  return (
    <header>
      <ul id="navbar-text">
        <li>
          <Link
            className={location.pathname === '/' ? 'navbar-text-active' : 'navbar-text'}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/portfolio' ? 'navbar-text-active' : 'navbar-text'}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/contact' ? 'navbar-text-active' : 'navbar-text'}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/resume' ? 'navbar-text-active' : 'navbar-text'}
            to="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>
    </header>
  )
}
