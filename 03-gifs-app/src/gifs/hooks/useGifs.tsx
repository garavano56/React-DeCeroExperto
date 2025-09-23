import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../inerfaces/gif.interface";

// 1° Forma - Como se vuelve a renderizar y no es un Hook como el useState. La variable se pierde siempre. Por lo tanto se saca afuera o se usa el hook useRef
// const gifsCache: Record<string, Gif[]> = {};       

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    
    // 2° forma
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        // 1° forma
        // if (gifsCache[term]) {
        //     setGifs(gifsCache[term]);
        //     return;
        // }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    };

    const handleSearch = async(query: string = '') => {

        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
        if (previousTerms.includes(query)) return;

        // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
        // 1° Forma de hacerlo
        // const currentTerms = previousTerms.slice(0, 6);  // Corta hasta los 7 elementos
        // currentTerms.unshift(query);
        // setPreviousTerms(currentTerms);

        // 2° Forma más facil
        setPreviousTerms([query, ...previousTerms].splice(0, 7));  // splice - Sí modifica el array original.
        
        const gifs = await getGifsByQuery(query);
        // console.log(gifs);
        setGifs(gifs);

        // gifsCache[query] = gifs;
        gifsCache.current[query] = gifs;
        console.log(gifsCache);

    }

    return {
        // Properties
        gifs,

        // Methods
        handleSearch,
        handleTermClicked,
        previousTerms
    }
}
