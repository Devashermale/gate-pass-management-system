import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/Authcontext.jsx'
 import { UserContextProvider } from './context/Usercontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AuthContextProvider>
        <UserContextProvider>
              <App />
        </UserContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
