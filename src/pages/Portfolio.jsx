
// ============================================================
// FR : Import des images nécessaires pour la bannière et projets
// EN : Import required images for the banner and projects
// ============================================================
import bannerImg from "../assets/banner.jpg";   // ✅ image bannière en haut de la page

import freshFoodImg from "../assets/portfolio/fresh-food.jpg";
import restaurantImg from "../assets/portfolio/restaurant-japonais.jpg";
import spaImg from "../assets/portfolio/espace-bien-etre.jpg";
import seoImg from "../assets/portfolio/seo.jpg";
import coderImg from "../assets/portfolio/coder.jpg";
import screensImg from "../assets/portfolio/screens.jpg";

export default function Portfolio() {
  // ==========================================================
  // FR : Tableau contenant les projets affichés dans la grille
  // EN : Array containing the projects displayed in the grid
  // ==========================================================
  const projects = [
    {
      img: freshFoodImg,
      title: "Fresh Food",
      caption: "Site de vente de produits frais en ligne",
      btn: "Voir le site",
      stackNote: "Site réalisé avec : PHP et MySQL",
    },
    {
      img: restaurantImg,
      title: "Restaurant Akira",
      caption: "Site de vente de produits frais en ligne",
      btn: "Voir le site",
      stackNote: "Site réalisé avec : WordPress",
    },
    {
      img: spaImg,
      title: "Espace bien-être",
      caption: "Site de vente de produits frais en ligne",
      btn: "Voir le site",
      stackNote: "Site réalisé avec : LARAVEL",
    },
    {
      img: seoImg,
      title: "SEO",
      caption: "Amélioration du référencement d’un site e-commerce.",
      btn: "Voir le site",
      stackNote: "Utilisation des outils : SEO",
    },
    {
      img: coderImg,
      title: "Création d'une API",
      caption: "Création d’une API RESTFUL publique.",
      btn: "Voir le site",
      stackNote: "PHP · SYMFONY",
    },
    {
      img: screensImg,
      title: "Maquette d'un site web",
      caption: "Création du prototype d’un site.",
      btn: "Voir le site",
      stackNote: "Réalisé avec : FIGMA",
    },
  ];

  return (
    <>
      {/* =========================================================
         FR : Bannière bleue collée au header (aucun texte dedans)
         EN : Blue banner attached to the header (no text inside)
      ========================================================== */}
      <section
        className="section-banner"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bannerImg})`,
        }}
        aria-label="Bannière Portfolio"
      />

      {/* =========================================================
         FR : Titre + sous-titre affichés sous la bannière
         EN : Title + subtitle displayed below the banner
      ========================================================== */}
      <section className="page-head">
        <div className="container text-center">
          <h1 className="page-title mb-2" style={{ color: "var(--ink)" }}>
            Portfolio
          </h1>
          <p className="page-subtitle" style={{ color: "inherit", opacity: 0.9 }}>
            Voici quelques-unes de mes réalisations.
          </p>
          <div className="section-line section-line--center section-line--xl" />
        </div>
      </section>

      {/* =========================================================
         FR : Grille responsive des projets (3 colonnes en desktop)
         EN : Responsive project grid (3 columns on desktop)
      ========================================================== */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {projects.map((p, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                {/* Carte projet */}
                <article className="portfolio-card h-100 d-flex flex-column">
                  {/* Image du projet */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-100 portfolio-thumb"
                  />

                  {/* Contenu principal */}
                  <div className="p-3 p-md-3 text-center">
                    <h3 className="portfolio-title">{p.title}</h3>
                    <p className="portfolio-caption mb-3">{p.caption}</p>
                    <button type="button" className="btn btn-primary btn-sm">
                      {p.btn}
                    </button>
                  </div>

                  {/* Note technique (stack utilisée) */}
                  <div className="mt-auto px-3 pb-3 pt-2">
                    <div className="portfolio-note small text-muted text-center">
                      {p.stackNote}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
