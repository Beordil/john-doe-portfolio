/* eslint-disable react/prop-types */
export default function ProjectCard({ project, index }) {
  const modalId = `projectModal-${project.id || index}`;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          style={{ objectFit: "cover", height: 180 }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>

          <div className="mb-3 d-flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="badge text-bg-light border">
                {t}
              </span>
            ))}
          </div>

          <p className="text-secondary small flex-grow-1">{project.description}</p>

          <div className="d-flex gap-2 mt-2">
            <a href={project.link} target="_blank" className="btn btn-primary btn-sm" rel="noreferrer">
              <i className="bi bi-box-arrow-up-right me-1" />
              Live
            </a>
            <a href={project.repo} target="_blank" className="btn btn-outline-secondary btn-sm" rel="noreferrer">
              <i className="bi bi-github me-1" />
              Code
            </a>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm ms-auto"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Détails
            </button>
          </div>
        </div>
      </div>

      {/* Modale de détail */}
      <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{project.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded mb-3"
              />
              <p className="mb-0">{project.description}</p>
            </div>
            <div className="modal-footer">
              <a href={project.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                Voir le site
              </a>
              <a href={project.repo} target="_blank" className="btn btn-outline-secondary" rel="noreferrer">
                Voir le code
              </a>
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
