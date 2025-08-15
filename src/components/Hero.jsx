export default function Hero() {
  return (
    <section className="py-5 bg-light border-bottom">
      <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
        {/* Texte */}
        <div className="flex-fill">
          <span className="badge bg-primary-subtle text-primary mb-3">Développeur Front-End</span>
          <h1 className="display-5 fw-bold mb-3">
            Bonjour, je suis <span className="text-primary">John Doe</span>.
          </h1>
          <p className="lead text-secondary mb-4">
            Je conçois des interfaces rapides, accessibles et jolies avec React, Vite et Bootstrap.
          </p>

          <div className="d-flex gap-2">
            <a href="/portfolio" className="btn btn-primary">
              <i className="bi bi-briefcase me-2" />
              Voir mes projets
            </a>
            <a href="/contact" className="btn btn-outline-primary">
              <i className="bi bi-send me-2" />
              Me contacter
            </a>
          </div>
        </div>

        {/* Visuel (optionnel) */}
        <div className="flex-fill text-center">
          {/* Utilise une image perso si tu veux : remplace l'URL ci-dessous */}
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=900&auto=format&fit=crop"
            className="img-fluid rounded-4 shadow-sm"
            alt="Illustration développeur"
          />
        </div>
      </div>
    </section>
  )
}
