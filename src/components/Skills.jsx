
// 🔹 FR : Tableau des compétences avec leur pourcentage de maîtrise
// 🔹 EN : Array of skills with their mastery percentage
const skills = [
  { label: "HTML / CSS", value: 90 },
  { label: "JavaScript (ES6+)", value: 85 },
  { label: "React", value: 80 },
  { label: "Bootstrap", value: 85 },
  { label: "Performance / SEO", value: 75 },
];

export default function Skills() {
  return (
    // 🔹 FR : Section dédiée aux compétences
    // 🔹 EN : Section dedicated to skills
    <section className="py-5 bg-light">
      <div className="container">

        {/* Titre de la section */}
        {/* EN: Section title */}
        <h2 className="section-title">Compétences</h2>
        <div className="section-underline"></div>

        {/* Grille Bootstrap pour organiser les compétences */}
        {/* EN: Bootstrap grid to organize skills */}
        <div className="row g-4">

          {/* Boucle sur chaque compétence */}
          {/* EN: Loop through each skill */}
          {skills.map((s) => (
            <div className="col-md-6" key={s.label}>
              
              {/* Nom de la compétence + pourcentage alignés */}
              {/* EN: Skill name + percentage aligned */}
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">{s.label}</span>
                <span>{s.value}%</span>
              </div>

              {/* Barre de progression Bootstrap */}
              {/* EN: Bootstrap progress bar */}
              <div
                className="progress"
                role="progressbar"
                aria-label={s.label}
                aria-valuenow={s.value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
