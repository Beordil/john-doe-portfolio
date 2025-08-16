
// ============================================================
// FR : Import de l'image utilisée comme bannière en haut de la page
// EN : Import of the image used as the banner at the top of the page
// ============================================================
import bannerImg from "../assets/banner.jpg"; // <-- image de bannière

export default function Services() {
  return (
    <>
      {/* =========================================================
         FR : Section bannière (hero) avec une image de fond
         EN : Banner (hero) section with a background image
      ========================================================== */}
      <section
        className="section-hero"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
        aria-label="Bannière Services"
      ></section>

      {/* =========================================================
         FR : Titre + sous-titre centrés sous la bannière
         EN : Title + subtitle centered below the banner
      ========================================================== */}
      <div className="container text-center my-5">
        <h1 className="page-title mb-2 text-dark">Mon offre de services</h1>
        <p className="page-subtitle text-dark">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className="section-line section-line--center" />
      </div>

      {/* =========================================================
         FR : Section contenant les 3 cartes de services
         EN : Section containing the 3 service cards
      ========================================================== */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* =====================================================
               FR : Carte 1 - UX Design
               EN : Card 1 - UX Design
            ====================================================== */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="feature-card h-100">
                {/* Icône */}
                <div className="feature-icon">
                  <i className="bi bi-brush"></i>
                </div>
                {/* Titre */}
                <h3 className="feature-title">UX Design</h3>
                {/* Texte */}
                <p className="feature-text">
                  L’UX Design consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc...) 
                  en plaçant l’utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur 
                  la plus fluide et agréable possible.
                </p>
              </article>
            </div>

            {/* =====================================================
               FR : Carte 2 - Développement Web
               EN : Card 2 - Web Development
            ====================================================== */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="feature-card h-100">
                {/* Icône */}
                <div className="feature-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                {/* Titre */}
                <h3 className="feature-title">Développement web</h3>
                {/* Texte */}
                <p className="feature-text">
                  Le développement de sites web consiste à créer des sites internet en utilisant des langages de 
                  programmation (HTML, CSS, JavaScript, PHP, etc...) et des frameworks (Bootstrap, React, Angular, etc...).
                </p>
              </article>
            </div>

            {/* =====================================================
               FR : Carte 3 - Référencement (SEO)
               EN : Card 3 - SEO
            ====================================================== */}
            <div className="col-12 col-md-6 col-lg-4">
              <article className="feature-card h-100">
                {/* Icône */}
                <div className="feature-icon">
                  <i className="bi bi-search"></i>
                </div>
                {/* Titre */}
                <h3 className="feature-title">Référencement</h3>
                {/* Texte */}
                <p className="feature-text">
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web 
                  pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc...). 
                  L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>
              </article>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
