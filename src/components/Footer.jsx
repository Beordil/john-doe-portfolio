export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <h6 className="text-uppercase">John Doe</h6>
            <small>Adresse / Tél / Mail</small>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase">Liens</h6>
            <ul className="list-unstyled mb-0">
              <li><a className="link-light text-decoration-none" href="#">GitHub</a></li>
              <li><a className="link-light text-decoration-none" href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase">Dernières réalisations</h6>
            <small>À venir…</small>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="mb-0 small text-center">© {new Date().getFullYear()} John Doe — Tous droits réservés.</p>
      </div>
    </footer>
  )
}
