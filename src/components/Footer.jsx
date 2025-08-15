import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">John Doe</h5>
            <p className="mb-1">Développeur Front-end</p>
            <p className="mb-0">
              <i className="bi bi-envelope me-2" />
              john.doe@mail.com
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="link-light text-decoration-none">Accueil</Link></li>
              <li><Link to="/services" className="link-light text-decoration-none">Services</Link></li>
              <li><Link to="/portfolio" className="link-light text-decoration-none">Portfolio</Link></li>
              <li><Link to="/contact" className="link-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Réseaux</h6>
            <div className="d-flex gap-3 fs-4">
              <a className="link-light" href="https://github.com/username" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a className="link-light" href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <p className="mb-0 small">© {year} John Doe — Tous droits réservés.</p>
          <p className="mb-0 small">
            <Link to="/mentions-legales" className="link-light text-decoration-none">Mentions légales</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
