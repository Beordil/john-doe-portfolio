import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold mb-3">
                Développeur Front-end <span className="text-primary">React</span>
              </h1>
              <p className="lead text-secondary">
                Je conçois des interfaces rapides, accessibles et élégantes avec
                React, Vite et Bootstrap.
              </p>
              <div className="d-flex gap-3 mt-3">
                <Link to="/portfolio" className="btn btn-primary btn-lg">
                  <i className="bi bi-briefcase me-2" />
                  Voir mes projets
                </Link>
                <Link to="/contact" className="btn btn-outline-secondary btn-lg">
                  <i className="bi bi-chat-dots me-2" />
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ratio ratio-16x9 rounded shadow-sm bg-white">
                {/* Image illustrative libre (optionnel) */}
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
                  alt="Développement front-end"
                  className="object-fit-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">À propos</h2>
          <div className="section-underline"></div>
          <div className="row g-4 align-items-center">
            <div className="col-md-7">
              <p className="mb-2">
                Passionné par l’UI/UX et la performance web, j’aide les
                entreprises à livrer des interfaces modernes, accessibles et
                optimisées.
              </p>
              <p className="mb-0">
                Stack : <strong>React</strong>, <strong>Vite</strong>,{" "}
                <strong>Bootstrap</strong>, <strong>React Router</strong>.
              </p>
            </div>
            <div className="col-md-5">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                  Performance <span className="badge text-bg-primary">A</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Accessibilité <span className="badge text-bg-primary">A</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  SEO <span className="badge text-bg-primary">A</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
