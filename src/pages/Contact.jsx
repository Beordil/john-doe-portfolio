import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    // Validation HTML5 + classes Bootstrap
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    // Ici tu pourrais envoyer vers un backend ou un service (EmailJS, etc.)
    setSent(true);
    form.reset();
    form.classList.remove("was-validated");
  }

  return (
    <div className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="fw-bold mb-3">Contact</h1>
      <p className="text-secondary mb-4">
        Dis-moi en quoi je peux t’aider. Je réponds rapidement.
      </p>

      {sent && (
        <div className="alert alert-success" role="alert">
          Merci ! Votre message a bien été envoyé (simulation).
        </div>
      )}

      <form noValidate onSubmit={onSubmit} className="needs-validation">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              minLength={2}
              placeholder="Votre nom"
            />
            <div className="invalid-feedback">Nom requis (2 caractères min).</div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              placeholder="vous@exemple.com"
            />
            <div className="invalid-feedback">Email valide requis.</div>
          </div>

          <div className="col-12">
            <label className="form-label">Sujet</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              required
              placeholder="Sujet du message"
            />
            <div className="invalid-feedback">Sujet requis.</div>
          </div>

          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="6"
              required
              minLength={10}
              placeholder="Votre message…"
            />
            <div className="invalid-feedback">
              Message requis (10 caractères min).
            </div>
          </div>

          <div className="col-12 d-flex gap-3 align-items-center">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-send me-2" />
              Envoyer
            </button>
            <span className="text-secondary small">
              * Les champs sont requis
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
