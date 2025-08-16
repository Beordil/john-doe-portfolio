
import aboutImg from '../assets/john-doe-about.jpg';

export default function Home() {
  return (
    <>
      {/* =====================================================
         FR : Section HERO (bannière principale avec présentation)
         EN : HERO section (main banner with introduction)
      ====================================================== */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Bonjour, je suis John Doe</h1>
          <p className="lead">Développeur web full-stack</p>

          {/* Bouton qui ouvre la modale GitHub */}
          {/* EN: Button to open GitHub modal */}
          <button
            type="button"
            className="btn btn-light btn-hero"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* =====================================================
         FR : Section "À propos" + "Compétences"
         EN : "About me" + "Skills" section
      ====================================================== */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="card-shadow p-4 p-md-5">
            <div className="row g-4">

              {/* ------------------------------------------------
                 FR : Colonne gauche = photo + description "À propos"
                 EN : Left column = photo + "About me" description
              ------------------------------------------------- */}
              <div className="col-12 col-lg-6">
                <h5 className="mb-3">A propos</h5>
                <div className="section-blue-line mb-4"></div>

                <div className="d-flex gap-3 align-items-start mb-3">
                  <img
                    src={aboutImg}
                    alt="John Doe"
                    className="rounded shadow-sm about-photo"
                    style={{ width: 300, height: 300, objectFit: "cover" }}
                  />
                </div>

                <p className="small text-muted mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tenetur perferendis nostrum,
                  ex delectus recusandae impedit aut iure enim placeat?
                  Natus, neque at?
                </p>
                <p className="small text-muted mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, necessitatibus consectetur tenetur perferendis
                  nostrum ex delectus recusandae.
                </p>
                <p className="small text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, neque at?
                </p>
              </div>

              {/* ------------------------------------------------
                 FR : Colonne droite = liste des compétences avec barres
                 EN : Right column = list of skills with progress bars
              ------------------------------------------------- */}
              <div className="col-12 col-lg-6">
                <h5 className="mb-3">Mes compétences</h5>
                <div className="section-blue-line mb-4"></div>

                <Skill label="HTML5"  value={90} color="danger" />
                <Skill label="CSS3"   value={80} color="primary" />
                <Skill label="JAVASCRIPT" value={70} color="warning" textDark />
                <Skill label="PHP"    value={60} color="success" />
                <Skill label="REACT"  value={50} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =====================================================
   FR : Composant réutilisable qui affiche une compétence
   avec une barre de progression.
   EN : Reusable component that displays a skill
   with a progress bar.
===================================================== */
function Skill({ label, value, color = "primary", textDark = false }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between small mb-1">
        <span className="fw-semibold">{label}</span>
        <span className="text-muted">{value}%</span>
      </div>
      <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
        <div
          className={`progress-bar bg-${color} ${textDark ? "text-dark" : ""}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
