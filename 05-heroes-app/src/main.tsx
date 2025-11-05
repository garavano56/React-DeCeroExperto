import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroesApp } from './HeroesApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>,
)


// npm create vite@latest
// npm i

// https://ui.shadcn.com/docs/installation/vite
// npm install tailwindcss @tailwindcss/vite
// npm install -D @types/node
// npx shadcn@latest init

// RUTAS: https://reactrouter.com/start/data/installation
// npm i react-router

// Axios
// npm i axios