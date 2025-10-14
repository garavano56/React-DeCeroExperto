import React from "react";

interface Props {
  subtitle: string;
  callMyAPI: () => void;
}

// Al renderizarse la función "callMyAPI" se crea en otro espacio en memoria. Por lo tanto se vuelve a ejecutar.
// Para que no pase usamos el useCallback para memorizar la función
export const MySubTitle = React.memo(({ subtitle, callMyAPI }: Props) => {
    console.log('MySubTitle re-render');

    console.log('Tarea super pesada');

    return (
    <>
        <h6 className="text-2xl font-bold">{subtitle}</h6>

        <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
            onClick={ callMyAPI }
        >Llamar a función
        </button>
    </>
    );
});