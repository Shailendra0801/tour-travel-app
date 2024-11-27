import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { FeatureProvider } from './context/feature.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <FeatureProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FeatureProvider>
    </AuthContextProvider>
  </StrictMode>,
)
