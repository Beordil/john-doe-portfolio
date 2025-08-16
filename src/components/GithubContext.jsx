// src/components/GitHubContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

// 🔹 FR : Création d’un contexte React pour partager les données GitHub dans toute l’app
// 🔹 EN : Create a React context to share GitHub data across the app
const GitHubCtx = createContext();

// 🔹 FR : Fournisseur du contexte GitHub (GitHubProvider)
// Il récupère les infos du profil GitHub via l’API publique et les rend disponibles aux composants enfants.
// 🔹 EN : GitHub context provider (GitHubProvider)
// Fetches GitHub profile info from the public API and makes it available to child components.
export function GitHubProvider({ children, username = "github-johndoe" }) {
  // 🔹 FR : État pour stocker le profil utilisateur GitHub
  // 🔹 EN : State to store the GitHub user profile
  const [profile, setProfile] = useState(null);

  // 🔹 FR : État pour indiquer si le chargement est en cours
  // 🔹 EN : State to indicate if data is still loading
  const [loading, setLoading] = useState(true);

  // 🔹 FR : État pour stocker une éventuelle erreur
  // 🔹 EN : State to store any potential error
  const [error, setError] = useState("");

  // 🔹 FR : Hook useEffect → récupère le profil GitHub à l’initialisation
  // 🔹 EN : useEffect hook → fetch GitHub profile when component mounts
  useEffect(() => {
    let alive = true; // FR : Sécurité pour éviter de modifier l’état après démontage
                      // EN : Safety flag to avoid updating state after unmount

    (async () => {
      try {
        // FR : Requête à l’API GitHub
        // EN : Fetch request to GitHub API
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        // FR : Conversion de la réponse en JSON
        // EN : Convert response to JSON
        const data = await res.json();

        // FR : Si le composant est encore monté, on met à jour l’état
        // EN : If component is still mounted, update the state
        if (alive) setProfile(data);
      } catch (e) {
        // FR : Gestion d’erreur → message utilisateur
        // EN : Error handling → user-friendly message
        if (alive) setError("Impossible de charger le profil GitHub.");
      } finally {
        // FR : Fin du chargement
        // EN : End loading
        if (alive) setLoading(false);
      }
    })();

    // FR : Nettoyage lors du démontage du composant
    // EN : Cleanup when component unmounts
    return () => {
      alive = false;
    };
  }, [username]);

  // FR : Fournit les valeurs (profil, chargement, erreur) à tous les composants enfants
  // EN : Provide (profile, loading, error) values to all child components
  return (
    <GitHubCtx.Provider value={{ profile, loading, error }}>
      {children}
    </GitHubCtx.Provider>
  );
}

// 🔹 FR : Hook personnalisé pour consommer le contexte GitHub
// 🔹 EN : Custom hook to consume GitHub context
export function useGitHub() {
  return useContext(GitHubCtx);
}
