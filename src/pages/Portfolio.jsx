import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-2">Portfolio</h1>
      <p className="text-secondary mb-4">
        Une sélection de projets récents. Cliquez sur <strong>Détails</strong> pour en savoir plus.
      </p>

      <div className="row g-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.id ?? i} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
