import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bold">JOHN DOE</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="mainNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/mentions-legales">Mentions légales</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
