import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  // Fermer le menu mobile quand on clique sur un lien
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    if (!nav) return;

    nav.querySelectorAll("a.nav-link").forEach((a) => {
      a.addEventListener("click", () => {
        const bsCollapse = window.bootstrap?.Collapse.getInstance(nav);
        bsCollapse && bsCollapse.hide();
      });
    });
  }, []);

  const navLink = ({ isActive }) =>
    "nav-link px-3" + (isActive ? " active fw-semibold" : "");

  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-md bg-light" role="navigation">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            JOHN DOE
          </Link>

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

          <div id="mainNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li className="nav-item">
                <NavLink to="/" className={navLink} end>
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={navLink}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={navLink}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={navLink}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentions-legales" className={navLink}>
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
