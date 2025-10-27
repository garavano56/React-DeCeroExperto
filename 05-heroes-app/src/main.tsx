import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <Button>Hola de nuevo</Button>
  </StrictMode>,
)


// npm create vite@latest
// npm i

// https://ui.shadcn.com/docs/installation/vite
// npm install tailwindcss @tailwindcss/vite
// npm install -D @types/node
// npx shadcn@latest init

