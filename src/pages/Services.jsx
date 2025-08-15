export default function Services() {
  const items = [
    {
      icon: "bi-lightning-charge",
      title: "Sites rapides",
      text: "Chargement instantané (Vite), optimisation d’images et code split.",
    },
    {
      icon: "bi-phone",
      title: "Responsive & accessible",
      text: "Design mobile-first, respect des bonnes pratiques d’accessibilité.",
    },
    {
      icon: "bi-gear",
      title: "Intégrations",
      text: "Formulaires, analytics, déploiement GitHub Pages ou hébergeur.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Services</h1>

      <div className="row g-4">
        {items.map((it) => (
          <div key={it.title} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="display-6 mb-2">
                  <i className={`bi ${it.icon}`} />
                </div>
                <h5 className="card-title">{it.title}</h5>
                <p className="card-text text-secondary">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
