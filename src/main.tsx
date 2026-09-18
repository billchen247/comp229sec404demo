import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Vite exposes the deploy base path as `import.meta.env.BASE_URL`. It always
// ends with a slash ("/" or "/repo-name/"), but react-router's `basename`
// must NOT end with a slash — so we strip the trailing "/" here. The
// `|| '/'` fallback covers the case where BASE_URL is exactly "/".
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
