import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap CSS + Icônes + ton CSS global
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/globals.css'

// IMPORTANT : JS de Bootstrap (pour le burger menu)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AppRouter from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
