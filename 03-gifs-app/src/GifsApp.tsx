// import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
// import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
// import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
// import type { Gif } from "./gifs/inerfaces/gif.interface"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

  // const [gifs, setGifs] = useState<Gif[]>([])
  // const [previousTerms, setPreviousTerms] = useState<string[]>([])

  // const handleTermClicked = (term: string) => {
  //     console.log("Hiciste clic en:", term);
  // };

  // const handleSearch = async(query: string = '') => {

  //   query = query.trim().toLowerCase();

  //   if (query.length === 0) return;

  //   // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
  //   if (previousTerms.includes(query)) return;

  //   // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
  //   // 1° Forma de hacerlo
  //   // const currentTerms = previousTerms.slice(0, 6);  // Corta hasta los 7 elementos
  //   // currentTerms.unshift(query);
  //   // setPreviousTerms(currentTerms);

  //   // 2° Forma más facil
  //   setPreviousTerms([query, ...previousTerms].splice(0, 7));  // splice - Sí modifica el array original.
    
  //   const gifs = await getGifsByQuery(query);
  //   console.log(gifs);
  //   setGifs(gifs);

  // }

  return (
    <>
      {/* Header */}
      <CustomHeader 
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar Gifs" onQuery={ handleSearch }/>

      {/* Búsquedas previas */}
      <PreviousSearches searches={ previousTerms } onLabelClicked={ handleTermClicked }  />

      {/* Gifs */}
      <GifList gifs={ gifs }  />
    </>
  );
};
