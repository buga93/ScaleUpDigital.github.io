import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <h2 style={{cursor: 'pointer'}}>ScaleUp Digital</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive('/services') ? 'nav-link active' : 'nav-link'}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li>
            <Link to="/case-studies" className={isActive('/case-studies') ? 'nav-link active' : 'nav-link'}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}