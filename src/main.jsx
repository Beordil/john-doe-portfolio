// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// Styles Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Styles perso
import "./styles/globals.css"; // à créer juste après

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);