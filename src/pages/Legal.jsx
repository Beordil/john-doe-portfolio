
export default function Legal() {
  return (
    <div className="container py-4">
      {/* =====================================================
         FR : Titre principal de la page Mentions légales
         EN : Main title of the Legal Notice page
      ====================================================== */}
      <h1 className="fw-bold text-center">Mentions légales</h1>

      {/* Conteneur centralisé avec largeur max */}
      {/* EN: Centered container with max width */}
      <div className="mx-auto" style={{ maxWidth: 920 }}>
        <div className="section-line section-line--center section-line--xl mb-4" />

        {/* =====================================================
           FR : Accordéon contenant les différentes sections légales
           EN : Accordion containing the different legal sections
        ====================================================== */}
        <div className="accordion" id="legalAccordion">

          {/* -----------------------------------------------------
             FR : Section 1 - Éditeur du site
             EN : Section 1 - Website Publisher
          ------------------------------------------------------ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p><strong>John Doe</strong></p>
                <p>
                  <i className="bi bi-geo-alt me-2"></i>
                  40 rue Laure Diebold, 69009 Lyon, France
                </p>
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  10 20 30 40 50
                </p>
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  john.doe@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------
             FR : Section 2 - Hébergeur
             EN : Section 2 - Hosting provider
          ------------------------------------------------------ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p><strong>alwaysdata</strong></p>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>
                  <i className="bi bi-globe me-2"></i>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------
             FR : Section 3 - Crédits
             EN : Section 3 - Credits
          ------------------------------------------------------ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#legalAccordion"
            >
              <div className="accordion-body">
                <p>
                  Ce site a été réalisé par <strong>John Doe</strong>, étudiant au{" "}
                  <a
                    href="https://www.centre-europeen-formation.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Centre Européen de formation
                  </a>.
                </p>
                <p>
                  <em>
                    Les images utilisées sur ce site sont libres de droits et ont été
                    obtenues sur le site{" "}
                    <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">
                      Pixabay
                    </a>.
                  </em>
                </p>
                <p>
                  La favicon de ce site a été fournie par{" "}
                  <a
                    href="https://www.flaticon.com/fr/icones-gratuites/john-doe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    John Doe Icons créés par Freepik - Flaticon
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
