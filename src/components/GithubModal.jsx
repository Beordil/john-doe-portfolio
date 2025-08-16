
import { useGitHub } from "./GithubContext";

// 🔹 FR : Composant de la modale affichant le profil GitHub
// 🔹 EN : Modal component displaying the GitHub profile
export default function GitHubModal() {
  // 🔹 FR : Récupération du profil, de l’état de chargement et d’erreur depuis le contexte
  // 🔹 EN : Retrieve profile, loading state and error from context
  const { profile, loading, error } = useGitHub();

  // 🔹 FR : Gestion des données avec fallback (valeurs par défaut si non fournies)
  // 🔹 EN : Handle data with fallbacks (default values if not provided)
  const name = profile?.name || "John Doe";
  const htmlUrl = profile?.html_url || "https://github.com/";
  const location = profile?.location || "";
  const bio =
    profile?.bio ||
    "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.";
  const publicRepos = profile?.public_repos ?? 0;
  const followers = profile?.followers ?? 0;
  const following = profile?.following ?? 0;
  const avatar =
    profile?.avatar_url ||
    "https://avatars.githubusercontent.com/u/9919?s=200&v=4";

  return (
    // 🔹 FR : Structure principale de la modale Bootstrap
    // 🔹 EN : Main structure of the Bootstrap modal
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content modal-dark rounded-3 shadow-lg">
          
          {/* ---------- HEADER ---------- */}
          {/* FR : En-tête sombre avec le titre et le bouton de fermeture */}
          {/* EN : Dark header with title and close button */}
          <div className="modal-header modal-dark__header">
            <h5 className="modal-title" id="githubModalLabel">
              Mon profil GitHub
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* ---------- BODY ---------- */}
          {/* FR : Corps de la modale qui gère 3 cas (chargement, erreur, données) */}
          {/* EN : Modal body handling 3 states (loading, error, data) */}
          <div className="modal-body">
            {/* Cas 1 : Chargement */}
            {/* Case 1 : Loading */}
            {loading && (
              <div className="text-center py-4">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Chargement…</span>
                </div>
              </div>
            )}

            {/* Cas 2 : Erreur */}
            {/* Case 2 : Error */}
            {!loading && error && (
              <div className="alert alert-danger mb-0">{error}</div>
            )}

            {/* Cas 3 : Données récupérées */}
            {/* Case 3 : Data loaded */}
            {!loading && !error && (
              <div className="row g-4 align-items-start">
                {/* --------- Avatar --------- */}
                {/* FR : Colonne gauche avec l’image de profil */}
                {/* EN : Left column with profile picture */}
                <div className="col-12 col-md-6 text-center">
                  <img
                    src={avatar}
                    alt={name}
                    className="github-avatar-xl rounded-3 shadow"
                  />
                </div>

                {/* --------- Infos --------- */}
                {/* FR : Colonne droite avec les infos GitHub (nom, bio, stats) */}
                {/* EN : Right column with GitHub info (name, bio, stats) */}
                <div className="col-12 col-md-6">
                  <ul className="list-group list-group-flush list-group-dark">
                    <li className="list-group-item">
                      <i className="bi bi-person-badge me-2" />
                      <a
                        href={htmlUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-light text-decoration-underline"
                      >
                        {name}
                      </a>
                    </li>

                    <li className="list-group-item">
                      <i className="bi bi-geo-alt me-2" />
                      {location || <span className="text-muted">—</span>}
                    </li>

                    <li className="list-group-item">
                      <i className="bi bi-info-square me-2" />
                      {bio}
                    </li>

                    <li className="list-group-item">
                      <i className="bi bi-box-seam me-2" />
                      Repositories : {publicRepos}
                    </li>

                    <li className="list-group-item">
                      <i className="bi bi-people me-2" />
                      Followers : {followers}
                    </li>

                    <li className="list-group-item">
                      <i className="bi bi-person-check me-2" />
                      Following : {following}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* ---------- FOOTER ---------- */}
          {/* FR : Pied de la modale avec le bouton Fermer */}
          {/* EN : Modal footer with Close button */}
          <div className="modal-footer modal-dark__footer">
            <button
              type="button"
              className="btn btn-outline-light"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
