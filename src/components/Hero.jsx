
export default function Hero() {
  return (
    // 🔹 FR : Section principale "Hero" (bannière d’accueil avec titre et boutons)
    // 🔹 EN : Main "Hero" section (homepage banner with title and buttons)
    <section className="hero">
      <div className="hero-inner">
        {/* Titre principal */}
        {/* FR : Texte de bienvenue avec nom et rôle */}
        {/* EN : Welcome text with name and role */}
        <h1>Bonjour, je suis John Doe</h1>
        <p className="lead">Développeur web full-stack</p>

        {/* Boutons d’action */}
        {/* FR : Liens/boutons pour naviguer vers la section "À propos" ou ouvrir la modale GitHub */}
        {/* EN : Action buttons to navigate to "About" section or open the GitHub modal */}
        <div className="d-flex gap-2 justify-content-center">
          {/* Bouton qui descend vers la section "about" */}
          {/* EN: Button that scrolls to "about" section */}
          <a className="btn btn-light btn-hero" href="#about">
            En savoir plus
          </a>

          {/* Bouton qui ouvre la modale GitHub */}
          {/* EN: Button that opens the GitHub modal */}
          <button
            type="button"
            className="btn btn-outline-light btn-hero"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
          >
            Voir mon profil GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
