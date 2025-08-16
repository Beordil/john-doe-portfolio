
export default function ProjectCard({ project, onOpen }) {
  return (
    // 🔹 FR : Carte individuelle de projet
    // 🔹 EN : Individual project card
    <div className="card h-100 shadow-sm">

      {/* Image de couverture du projet */}
      {/* EN: Project cover image */}
      <img src={project.cover} className="card-img-top" alt={project.title} />

      {/* Corps de la carte */}
      {/* EN: Card body */}
      <div className="card-body d-flex flex-column">

        {/* Titre du projet */}
        {/* EN: Project title */}
        <h5 className="card-title mb-2">{project.title}</h5>

        {/* Liste des tags du projet */}
        {/* EN: List of project tags */}
        <div className="mb-3 d-flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="badge text-bg-light border">
              {t}
            </span>
          ))}
        </div>

        {/* Brève description du projet */}
        {/* EN: Short project description */}
        <p className="card-text flex-grow-1">{project.description}</p>

        {/* Boutons d'action (Détails, Live, Code) */}
        {/* EN: Action buttons (Details, Live, Code) */}
        <div className="d-flex gap-2">

          {/* Bouton qui ouvre une modale avec plus de détails */}
          {/* EN: Button to open a modal with more details */}
          <button className="btn btn-primary" onClick={() => onOpen(project)}>
            Détails
          </button>

          {/* Lien vers la version en ligne du projet (si disponible) */}
          {/* EN: Link to live version of project (if available) */}
          {project.link && (
            <a
              className="btn btn-outline-secondary"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}

          {/* Lien vers le dépôt GitHub ou code source (si disponible) */}
          {/* EN: Link to GitHub repo or source code (if available) */}
          {project.repo && (
            <a
              className="btn btn-outline-secondary"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
