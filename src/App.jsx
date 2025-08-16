
// FR : Importation des modules nécessaires (React Router, React, etc.)
// EN : Import required modules (React Router, React, etc.)
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";

// FR : Importation des composants principaux (Navbar + Footer)
// EN : Import main components (Navbar + Footer)
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// FR : Importation des différentes pages du site
// EN : Import the different website pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";

// FR : Importation du contexte GitHub et de la modale associée
// EN : Import GitHub context and associated modal
import { GitHubProvider } from "./components/GitHubContext.jsx";
import GitHubModal from "./components/GithubModal.jsx";

/**
 * FR : Un composant wrapper qui applique un padding vertical (`py-4`)
 *      UNIQUEMENT sur les pages qui n’ont pas de bannière (hero).
 * EN : A wrapper component that applies vertical padding (`py-4`)
 *      ONLY on pages that don’t have a banner (hero).
 */
function MainWrapper({ children }) {
  const location = useLocation();

  // FR : Liste des routes qui ont déjà une bannière (collées au header).
  // EN : List of routes that already have a banner (stuck to the header).
  const routesSansPadding = useMemo(
    () => ["/", "/services", "/portfolio"],
    []
  );

  // FR : Si la route actuelle est dans la liste, pas de padding.
  // EN : If current route is in the list, no padding applied.
  const noPadding = routesSansPadding.includes(location.pathname);

  // FR : Application conditionnelle de la classe "py-4".
  // EN : Conditionally apply "py-4" class.
  return <main className={noPadding ? "" : "py-4"}>{children}</main>;
}

/**
 * FR : Composant principal de l’application.
 *      - Fournit le contexte GitHub
 *      - Configure le routeur
 *      - Affiche Navbar, Footer et les pages
 *      - Rend la modale GitHub une seule fois
 *
 * EN : Main application component.
 *      - Provides GitHub context
 *      - Configures the router
 *      - Displays Navbar, Footer and pages
 *      - Renders GitHub modal only once
 */
export default function App() {
  return (
    <GitHubProvider>
      <Router>
        {/* FR : Barre de navigation persistante | EN : Persistent navigation bar */}
        <Navbar />

        {/* FR : Wrapper qui gère le padding selon la route | EN : Wrapper managing padding based on route */}
        <MainWrapper>
          <Routes>
            {/* FR : Définition des routes et des pages associées
                EN : Defining routes and their associated pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
          </Routes>
        </MainWrapper>

        {/* FR : Pied de page affiché sur toutes les pages | EN : Footer displayed on all pages */}
        <Footer />

        {/* FR : Modale GitHub, rendue une seule fois (accessible depuis toutes les pages)
            EN : GitHub modal, rendered once (accessible from all pages) */}
        <GitHubModal />
      </Router>
    </GitHubProvider>
  );
}
