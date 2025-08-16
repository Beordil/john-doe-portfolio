
import React from "react";
import ReactDOM from "react-dom/client";

// =============================
// BOOTSTRAP
// FR : Importation de Bootstrap (styles CSS + JS pour les composants interactifs).
// EN : Import Bootstrap (CSS styles + JS for interactive components).
// =============================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// FR : Importation des icônes Bootstrap Icons
// EN : Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// =============================
// STYLES GLOBAUX
// FR : Importation de tes propres styles (fichier globals.css).
// EN : Import your custom styles (globals.css file).
// =============================
import "./styles/globals.css";

// =============================
// COMPOSANT PRINCIPAL
// FR : Importation de App.jsx (le point d'entrée de ton application).
// EN : Import App.jsx (the entry point of your application).
// =============================
import App from "./App.jsx";

// =============================
// MONTAGE DE L’APPLICATION
// FR : Création de la racine React (root) et rendu du composant <App />.
//      StrictMode est activé pour aider à détecter les problèmes.
// EN : Create the React root and render the <App /> component.
//      StrictMode is enabled to help detect potential issues.
// =============================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
