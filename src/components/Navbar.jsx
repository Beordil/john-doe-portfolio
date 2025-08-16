
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // 🔹 FR : Header principal contenant la barre de navigation
    // 🔹 EN : Main header containing the navigation bar
    <header>
      {/* Barre de navigation Bootstrap en sombre */}
      {/* EN: Bootstrap navigation bar (dark theme) */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          
          {/* Logo / Nom affiché à gauche */}
          {/* EN: Logo / Name displayed on the left */}
          <NavLink to="/" className="navbar-brand fw-bold text-uppercase">
            JOHN DOE
          </NavLink>

          {/* Bouton burger (affiché uniquement en mobile) */}
          {/* EN: Burger menu button (visible only on mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Liens de navigation (droite de la navbar) */}
          {/* EN: Navigation links (right side of navbar) */}
          <div id="mainNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto text-uppercase">
              {/* Lien Accueil */}
              {/* EN: Home link */}
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>

              {/* Lien Services */}
              {/* EN: Services link */}
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>

              {/* Lien Portfolio */}
              {/* EN: Portfolio link */}
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>

              {/* Lien Contact */}
              {/* EN: Contact link */}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>

              {/* Lien Mentions légales */}
              {/* EN: Legal mentions link */}
              <li className="nav-item">
                <NavLink to="/mentions-legales" className="nav-link">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
