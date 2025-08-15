export default function About() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        <div className="section-underline"></div>

        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <p className="mb-3">
              Développeur front-end passionné, j’adore transformer des maquettes en expériences web
              soignées et performantes. Mon stack actuel : <strong>React</strong>, <strong>Vite</strong>,
              <strong> Bootstrap</strong>, <strong>JavaScript/TypeScript</strong>.
            </p>
            <p className="mb-0">
              Je travaille proprement (accessibilité, sémantique, SEO de base) et je privilégie le
              code simple et maintenable.
            </p>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light rounded-4 border">
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2" /> Intégration responsive</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2" /> Routing & SPA avec React Router</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2" /> Optimisations (vite, images, lazy)</li>
                <li className="mb-0"><i className="bi bi-check2-circle text-success me-2" /> Collaboration Git/GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
