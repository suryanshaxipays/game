import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Context from './Context/Game_data_context.jsx'


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
)
