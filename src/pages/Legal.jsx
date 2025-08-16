// src/pages/Legal.jsx
export default function Legal() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold text-center">Mentions légales</h1>
      <div className="mx-auto" style={{maxWidth: 920}}>
        <p className="text-muted text-center mb-4">
          Dernière mise à jour : {new Date().toLocaleDateString()}
        </p>

        <div className="accordion" id="legalAccordion">
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                1. Éditeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p><strong>Nom :</strong> John Doe</p>
                <p><strong>Adresse :</strong> 123 Rue Exemple, 75000 Paris</p>
                <p><strong>Email :</strong> contact@johndoe.dev</p>
                <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
                <p><strong>Statut :</strong> Entrepreneur individuel (à adapter)</p>
                <p><strong>SIREN/SIRET :</strong> 000 000 000 00000 (à adapter)</p>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                2. Hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p><strong>Nom :</strong> GitHub, Inc. (GitHub Pages)</p>
                <p><strong>Adresse :</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</p>
                <p><strong>Site :</strong> https://pages.github.com/</p>
              </div>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                3. Propriété intellectuelle
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p>Le contenu de ce site (textes, images, logos, code) est protégé. Toute reproduction est soumise à autorisation préalable.</p>
              </div>
            </div>
          </div>

          {/* Données personnelles */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                4. Données personnelles (RGPD)
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p>Les données envoyées via le formulaire de contact sont utilisées pour répondre à vos demandes. Vous pouvez exercer vos droits (accès, rectification, suppression) à l’adresse : contact@johndoe.dev.</p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                5. Cookies
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p>Ce site n’utilise pas de cookies de suivi. (Adapter si vous en ajoutez.)</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                6. Contact
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p>Pour toute question sur ces mentions : contact@johndoe.dev</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 small text-muted">
          ⚠️ Exemple générique — à personnaliser selon ta situation (statut, SIRET, etc.).
        </p>
      </div>
    </div>
  );
}
