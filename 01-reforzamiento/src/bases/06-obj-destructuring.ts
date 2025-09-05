const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const name = person.name
// const age = person.age;
// const key = person.key;

const { key, name: ironmanName, age } = person;     // Se cambia el nombre a "ironmanName" para no chocar con el mismo nombre

console.log({ key, ironmanName, age });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ( { key, name, age, rank }: Hero ) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    }
}

const { 
    rank,
    keyName, 
    user
    // user: {name} 
    } = useContext( person );

const { name } = user;

console.log( { rank, keyName, name } );