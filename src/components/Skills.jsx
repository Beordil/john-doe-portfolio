const skills = [
  { label: 'React', level: 85 },
  { label: 'JavaScript', level: 90 },
  { label: 'Bootstrap', level: 80 },
  { label: 'HTML/CSS', level: 95 },
]

export default function Skills() {
  return (
    <section className="py-5 bg-light border-top">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <div className="section-underline"></div>

        <div className="row g-4">
          {skills.map((s) => (
            <div className="col-md-6" key={s.label}>
              <div className="d-flex justify-content-between mb-1">
                <strong>{s.label}</strong>
                <span className="text-secondary">{s.level}%</span>
              </div>
              <div className="progress" role="progressbar" aria-label={s.label} aria-valuenow={s.level} aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
