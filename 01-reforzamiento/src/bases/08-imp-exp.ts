import { heroes, Owner, type Hero } from '../data/heroes.data';
// import { heroes  as MisheroesFavoritos }  from "../data/heroes.data";  // Si lo quiero renombrar.

const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`No existe un heroe con el id ${ id }`)
    // }

    return hero;
};

// console.log(getHeroById(2));     // Busqueda por un Id de Heroe

// -- TAREA ---


export const getHeroesByOwner = (owner: Owner): Hero[] => {
    
    const heroesByOwner = heroes.filter( (hero) => { return  hero.owner === owner } )
    // const heroesByOwner = heroes.filter( (hero) => hero.owner === owner )   // Resumido
    return heroesByOwner;
};