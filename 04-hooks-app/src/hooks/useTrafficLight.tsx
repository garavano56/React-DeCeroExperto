import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  gray: 'bg-gray-500'
}

// type TrafficLightColor = 'red' | 'yellow' | 'green';  // Si se agrega en el objeto "colors" otro valor y no acá queda desincronizado. 
type TrafficLightColor = keyof typeof colors;   // Si se agrega un valor al objeto "colors" ya lo toma correctamente

export const useTrafficLight = () => {

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


    return {
        // Props
        countDown,
        // light,
        // colors,
        
        // Computed
        percentage: (countDown / 5) * 100,
        greenLight: light === 'green' ? colors.green : colors.gray,
        redLight: light === 'red' ? colors.red : colors.gray,
        yellowLight: light === 'yellow' ? colors.yellow : colors.gray,
    }
}