import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  // 🔹 FR : useEffect pour fermer le menu mobile après avoir cliqué sur un lien
  // 🔹 EN : useEffect to close the mobile menu after clicking on a link
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    if (!nav) return;

    // Ajoute un écouteur sur chaque lien du menu
    // Add a click listener to each nav link
    nav.querySelectorAll("a.nav-link").forEach((a) => {
      a.addEventListener("click", () => {
        const bsCollapse = window.bootstrap?.Collapse.getInstance(nav);
        bsCollapse && bsCollapse.hide(); // Ferme le menu si ouvert / Close menu if open
      });
    });
  }, []);

  // 🔹 FR : Fonction qui ajoute la classe "active" au lien correspondant à la page courante
  // 🔹 EN : Function that adds "active" class to the link of the current page
  const navLink = ({ isActive }) =>
    "nav-link px-3" + (isActive ? " active fw-semibold" : "");

  return (
    // 🔹 FR : En-tête principal avec barre de navigation Bootstrap
    // 🔹 EN : Main header with Bootstrap navbar
    <header className="border-bottom">
      <nav className="navbar navbar-expand-md bg-light" role="navigation">
        <div className="container">
          {/* Logo / Brand */}
          {/* FR : Redirige vers la page d’accueil */}
          {/* EN : Redirects to home page */}
          <Link className="navbar-brand fw-bold" to="/">
            JOHN DOE
          </Link>

          {/* Bouton burger (mobile) */}
          {/* FR : Affiche/masque le menu sur mobile */}
          {/* EN : Toggle button for mobile navigation */}
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

          {/* Menu principal */}
          {/* FR : Liste des liens de navigation */}
          {/* EN : Main navigation links */}
          <div id="mainNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li className="nav-item">
                <NavLink to="/" className={navLink} end>
                  Accueil {/* FR : Page d’accueil | EN : Home page */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={navLink}>
                  Services {/* FR : Page Services | EN : Services page */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={navLink}>
                  Portfolio {/* FR : Page Portfolio | EN : Portfolio page */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={navLink}>
                  Contact {/* FR : Page Contact | EN : Contact page */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentions-legales" className={navLink}>
                  Mentions légales {/* FR : Page Mentions légales | EN : Legal notices */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
