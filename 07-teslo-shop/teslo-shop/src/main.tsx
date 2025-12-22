import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TesloShopApp } from './TesloShopApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TesloShopApp />
  </StrictMode>,
)

// npm create vite@latest

// Instalación de react-router
// https://reactrouter.com/start/declarative/installation
// npm i react-router 

// Instalación de Shadcn y tailwind
// https://ui.shadcn.com/docs/installation/vite (Seguir las indicación para instalar las 2)
// npm install tailwindcss @tailwindcss/vite
// npm install -D @types/node
// npx shadcn@latest init
// npx shadcn@latest add button

// Google Font
// https://fonts.google.com/selection/embed

// Uso de Caché
// https://tanstack.com/query/latest/docs/framework/react/installation
// npm i @tanstack/react-query axios     // Agregué axios también
// https://tanstack.com/query/latest/docs/framework/react/devtools
// npm i @tanstack/react-query-devtools


// Se usó la IA --> https://lovable.dev/
// Se usó la IA --> https://bolt.new/   (Panel administrativo)


