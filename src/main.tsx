import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
// import { StrictMode } from 'react'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const splash = document.getElementById('splash-screen')
// if (splash) splash.remove()


createRoot(document.getElementById('root')!).render(
  <App />
);

