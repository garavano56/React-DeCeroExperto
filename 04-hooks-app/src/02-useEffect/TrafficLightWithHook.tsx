
import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse'
}

// type TrafficLightColor = 'red' | 'yellow' | 'green';  // Si se agrega en el objeto "colors" otro valor y no acá queda desincronizado. 
type TrafficLightColor = keyof typeof colors;   // Si se agrega un valor al objeto "colors" ya lo toma correctamente

export const TrafficLightWithHook = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countDown, setCountDown] = useState(5);

  // Countdown effect
  useEffect(() => {
      if (countDown === 0) return;

      const intervalId = setInterval( ()=> {
          setCountDown( (prev) => prev - 1 );
      } , 1000);
       
      return () => {
          clearInterval(intervalId);
      } 

   }, [countDown])
    
  // Change light color effect
  useEffect(() => {
      if (countDown > 0) return;

      setCountDown(5);

      if (light === 'red') {
          setLight('green');
          return;
      }

      if (light === 'yellow') {
          setLight('red');
          return;
      }

      if (light === 'green') {
          setLight('yellow');
          return;
      }
  }, [countDown, light]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin">Semáforo con UseEffect</h1>
        <h2 className="text-white text-xl">countDown: { countDown }</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(countDown / 5) * 100}%` }}
          ></div>
        </div>

        <div 
          className={ `w-32 h-32
            ${ light === 'red' ? colors[light] : 'bg-gray-500' } 
            rounded-full` }
        ></div>

        <div 
          className={ `w-32 h-32
            ${ light === 'yellow' ? colors[light] : 'bg-gray-500' } 
            rounded-full` }
        ></div>
   
        <div 
          className={ `w-32 h-32
            ${ light === 'green' ? colors[light] : 'bg-gray-500' } 
            rounded-full` }
        ></div>

      </div>
    </div>
  );
};


//* Línea de tiempo (ejemplo empezando en 5)
//? Render 1 (countDown=5) → React ejecuta el efecto → crea intervalId=A.
//? +1s → intervalo A hace setCountDown(4) → React re-render.
//? Antes de correr el efecto otra vez, React llama el cleanup del efecto anterior → clearInterval(A).
//? React vuelve a ejecutar el efecto con countDown=4 → crea intervalId=B.
//? Se repite: cada tick limpia el anterior y crea uno nuevo.
//? Cuando llega a 0:
//? último tick pone countDown=0 → re-render,
//? React llama el cleanup (limpia el intervalo vigente),
//? el efecto corre con countDown===0 y hace return temprano, no crea un nuevo intervalo.
//? Resultado: no queda ningún intervalo activo.
//* Resumen: el return (cleanup) se ejecuta siempre antes de que el efecto vuelva a correr por un cambio en las dependencias, y también cuando el componente se desmonta.