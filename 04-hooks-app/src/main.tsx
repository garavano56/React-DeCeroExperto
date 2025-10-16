import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'

import { Toaster } from 'sonner'

import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'
import { MemoHook } from './06-memos/MemoHook'
import { MemoCounter } from './06-memos/MemoCounter'
import { InstagromApp } from './07-useOptimistic/InstagromApp'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}

    <Suspense fallback={(   // Puede ser un componente
        <div className='bg-gradient flex flex-col'>
          <h1 className='text-2xl'>Cargando</h1>
        </div>
      )} >
      <ClientInformation getUser={ getUserAction(1000) } />
    </Suspense>
    
  </StrictMode>,
)

// Instalación 
// https://ui.shadcn.com/docs/installation/vite

// https://zod.dev/
// npm install zod

// https://www.npmjs.com/package/canvas-confetti
// npm install --save canvas-confetti

// https://sonner.emilkowal.ski/  (Toast)
// npm install sonner