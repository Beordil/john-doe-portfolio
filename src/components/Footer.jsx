
// 🔹 FR : Composant fonctionnel Footer qui affiche le pied de page du site
// 🔹 EN : Functional component Footer that displays the website footer
export default function Footer() {
  return (
    // 🔹 FR : Élément <footer> avec classes Bootstrap pour style sombre et marges
    // 🔹 EN : <footer> element with Bootstrap classes for dark style and spacing
    <footer className="site-footer bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          
          {/* 🔹 FR : Colonne 1 - Informations personnelles et réseaux sociaux */}
          {/* 🔹 EN : Column 1 - Personal information and social media links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            {/* 🔹 FR : Icônes vers réseaux sociaux (GitHub, Twitter, LinkedIn) */}
            {/* 🔹 EN : Social media icons (GitHub, Twitter, LinkedIn) */}
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* 🔹 FR : Colonne 2 - Liens de navigation utiles */}
          {/* 🔹 EN : Column 2 - Useful navigation links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Liens utiles</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Me contacter</a></li>
              <li><a href="/mentions-legales" className="text-light text-decoration-none">Mentions légales</a></li>
            </ul>
          </div>

          {/* 🔹 FR : Colonne 3 - Liste des dernières réalisations */}
          {/* 🔹 EN : Column 3 - List of latest projects */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Mes dernières réalisations</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Fresh Food</a></li>
              <li><a href="#" className="text-light text-decoration-none">Restaurant Akira</a></li>
              <li><a href="#" className="text-light text-decoration-none">Espace bien-être</a></li>
              <li><a href="#" className="text-light text-decoration-none">SEO</a></li>
              <li><a href="#" className="text-light text-decoration-none">Création d'une API</a></li>
              <li><a href="#" className="text-light text-decoration-none">Maquette d’un site</a></li>
            </ul>
          </div>
        </div>

        {/* 🔹 FR : Bas du footer avec copyright dynamique */}
        {/* 🔹 EN : Footer bottom section with dynamic copyright */}
        <div className="text-center border-top border-secondary pt-3 mt-3 small">
          © {new Date().getFullYear()} John Doe - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
