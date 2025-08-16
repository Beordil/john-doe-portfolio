export default function Contact() {
  return (
    <>
      {/* =====================================================
         FR : En-tête de la page avec titre + sous-titre
         EN : Page header with title + subtitle
      ====================================================== */}
      <section className="page-head">
        <div className="container text-center">
          <h1 className="page-title mb-2" style={{ color: "var(--ink)" }}>
            Contact
          </h1>
          <p className="page-subtitle" style={{ color: "inherit", opacity: 0.9 }}>
            Pour me contacter en vue d’un entretien ou d’une future collaboration,
            merci de remplir le formulaire de contact.
          </p>
          <div className="section-line section-line--center section-line--xl" />
        </div>
      </section>

      {/* =====================================================
         FR : Section principale contenant le formulaire + coordonnées
         EN : Main section with contact form + contact details
      ====================================================== */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">

            {/* -----------------------------------------------------
               FR : Colonne gauche = formulaire de contact
               EN : Left column = contact form
            ------------------------------------------------------ */}
            <div className="col-12 col-lg-7">
              <div className="card-shadow p-3 p-md-4">
                <h5 className="mb-2">Formulaire de contact</h5>
                <div className="section-line section-line--wide" />

                {/* Formulaire avec champs (nom, email, téléphone, sujet, message) */}
                {/* EN: Form with fields (name, email, phone, subject, message) */}
                <form className="mt-3">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                      aria-label="Votre nom"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Votre adresse email"
                      aria-label="Votre adresse email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Votre numéro de téléphone"
                      aria-label="Votre numéro de téléphone"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sujet"
                      aria-label="Sujet"
                    />
                  </div>

                  {/* Champ message (textarea plus grand) */}
                  {/* EN: Message field (larger textarea) */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Votre message"
                      aria-label="Votre message"
                      style={{ minHeight: 260 }}
                    />
                  </div>

                  {/* Bouton centré */}
                  {/* EN: Centered submit button */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* -----------------------------------------------------
               FR : Colonne droite = coordonnées + carte Google Maps
               EN : Right column = contact details + Google Maps
            ------------------------------------------------------ */}
            <div className="col-12 col-lg-5">
              <div className="card-shadow p-3 p-md-4">
                <h5 className="mb-2">Mes coordonnées</h5>
                <div className="section-line section-line--wide" />

                {/* Infos personnelles */}
                {/* EN: Personal contact info */}
                <div className="small text-muted mt-3 mb-3">
                  <div className="mb-1">John Doe</div>
                  <div className="mb-1">40 rue Laure Diebold</div>
                  <div className="mb-1">69009 Lyon, France</div>
                  <div className="mb-1">10 20 30 40 50</div>
                  <div className="mb-3">john.doe@gmail.com</div>
                </div>

                {/* Carte Google Maps intégrée */}
                {/* EN: Embedded Google Maps */}
                <div style={{ width: "100%", height: "400px" }}>
                  <iframe
                    title="Google map - 40 rue Laure Diebold, Lyon"
                    src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                    style={{ border: 0, width: "100%", height: "100%", borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
