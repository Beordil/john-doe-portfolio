
// 🔹 FR : Composant fonctionnel "About" qui affiche la section À propos
// 🔹 EN : Functional component "About" that displays the About section
export default function About() {
  return (
    // 🔹 FR : Section avec une marge verticale (py-5 = padding vertical)
// 🔹 EN : Section with vertical padding (py-5 = vertical spacing)
    <section className="py-5">
      <div className="container">
        {/* 🔹 FR : Titre principal de la section */}
        {/* 🔹 EN : Main section title */}
        <h2 className="section-title">À propos</h2>

        {/* 🔹 FR : Ligne décorative sous le titre */}
        {/* 🔹 EN : Decorative line under the title */}
        <div className="section-underline"></div>

        {/* 🔹 FR : Mise en page en grille Bootstrap (2 colonnes alignées verticalement) */}
        {/* 🔹 EN : Bootstrap grid layout (2 columns vertically aligned) */}
        <div className="row g-4 align-items-center">
          
          {/* 🔹 FR : Colonne gauche avec une image portrait */}
          {/* 🔹 EN : Left column with a portrait image */}
          <div className="col-md-5">
            <img
              src="https://placehold.co/420x420"
              alt="Portrait"
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>

          {/* 🔹 FR : Colonne droite avec description et compétences */}
          {/* 🔹 EN : Right column with description and skills */}
          <div className="col-md-7">
            <p className="mb-3">
              {/* 🔹 FR : Texte de présentation */}
              {/* 🔹 EN : Introduction text */}
              Je suis un développeur front-end passionné par React, l’accessibilité et les performances.
              J’aime transformer des maquettes en expériences web fluides et pixel-perfect.
            </p>

            {/* 🔹 FR : Liste des compétences clés */}
            {/* 🔹 EN : List of key skills */}
            <ul className="list-unstyled">
              <li className="mb-2">✔️ Intégration de maquettes (Figma → React/Bootstrap)</li>
              <li className="mb-2">✔️ SPA React (router, états, composants réutilisables)</li>
              <li className="mb-2">✔️ Optimisation Core Web Vitals & SEO technique</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
