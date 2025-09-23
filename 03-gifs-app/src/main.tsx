import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GifsApp } from './GifsApp'

import './index.css'
// import { MyCounterApp } from './counter/components/MyCounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    {/* <MyCounterApp /> */}
    <GifsApp />
  </StrictMode>
)

// React Developer Tools
// https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

// npm run build
// Instalo con "npm install --global http-server"
// Ejecuto el servidor con: "http-server . -o /index.html"