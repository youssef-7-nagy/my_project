import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './store/Store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {Store}>
    <BrowserRouter>
  
    <App />
   
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
