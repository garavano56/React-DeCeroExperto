export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = 'DC' | 'Marvel';   // Es especifico de TypeScript

export enum Owner {
  DC = 'DC',         // 0
  Marvel = 'Marvel',  // 1
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Green Lantern',
    owner: Owner.DC
  }
];

// export default heroes;    // Si quiero exportar por defecto. No se necesitan llaves despues. Y se puede poner cualquier nombre como "misHeroesFavoritos" 
                             // import misHeroesFavoritos  from "../data/heroes.data"

// Usá type si solo necesitás validar tipos.
// Usá enum si querés una colección de constantes que también estén disponibles en tiempo de ejecución.

// El código es TypeScript pero luego se transpila y se genera todo código JavaScript