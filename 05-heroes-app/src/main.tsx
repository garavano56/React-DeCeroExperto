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

// Query a http
// https://tanstack.com/query/latest/docs/framework/react/installation
// npm i @tanstack/react-query
// https://tanstack.com/query/latest/docs/framework/react/quick-start
// npm i -D @tanstack/eslint-plugin-query
// https://tanstack.com/query/latest/docs/framework/react/devtools
// npm i @tanstack/react-query-devtools

//* Crear Interface a partir de JSON
// 1° - Copiar el Json por cual se quiere crear la Interface.
// 2° - Crear el Archivo donde va a estar la Interface
// 3° - Presionar: Ctrl + Shift + P
// 4° - Escribir la extensión: "Paste JSON as Code" y hacerle Click (Si no existe agregarla)
// 5° - Escribir el nombre de la Interface que se quiera crear. y "Enter"