import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './Apps/App.jsx'
import MainApp from './Apps/MainApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
