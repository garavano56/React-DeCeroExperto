import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ( { placeholder = 'Buscar', onQuery }:Props ) => {

  const [query, setQuery] = useState('');

   // Se ejecuta cuando se termina de escribir. 
  useEffect( () => {     
    const timeoutId = setTimeout( () => {
      onQuery(query)
    }, 700 )
    // onQuery(query);

    return () => {    // Se ejecuta siempre que se desmonta y cuando cambia la función callback onQuery
      clearTimeout(timeoutId);    // El return se ejecuta justo antes de que el efecto se ejecute de nuevo (porque cambió alguna dependencia) y cuando el componente se desmonta.
    };
  }, [query, onQuery]);

  const handleSearch = () => { 
    onQuery(query); 
    // setQuery('');
  }

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
  }

  return (
    <div className="search-container">
        <input 
          type="text" 
          placeholder={ placeholder }
          // value={ query }
          onChange={ (event) => setQuery( event.target.value ) }
          onKeyDown={ handleKeydown }
        />
        <button onClick={ handleSearch }>Buscar</button>
    </div>
  )
}
