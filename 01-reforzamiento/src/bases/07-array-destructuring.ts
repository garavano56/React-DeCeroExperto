
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, , p3 ] = characterNames;

console.log({ p1, p3 });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
};

const [ letters, numbers ] = returnsArrayFn();

console.log( letters, numbers );


// TAREA
console.log("----- TAREA -----"); 
const useState = (value: String) => {
    return [
        value, 
        (newValue: string) => console.log(newValue)
    ] as const
} 

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"