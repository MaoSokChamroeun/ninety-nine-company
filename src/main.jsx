import React from 'react'        
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
