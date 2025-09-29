import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-indigo/theme.css"; // or pick another theme
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css";


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
)
