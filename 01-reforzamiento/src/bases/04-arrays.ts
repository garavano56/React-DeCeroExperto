const myArray: number[] = [1, 2, 3, 4, 5];
// const myArray: (number|string)[] = [1, 2, 3, 4, 5];    // Para especificar que se pueda ingresar numbre o string en el array

myArray.push(10);
myArray.push(11);

const myArray2 = myArray;   // La variable myArray2 apunta a la dirección de "myArray"
myArray2.push(12);          // Se modifica también myArray ya apunta a esa dirección

const myArray3 = [... myArray];   // Ahora si se clona y se puede modificar el myArray3 sin modificar otro
myArray3.push(13);

// const myarray4 = structuredClone(myArray);   // Otra forma recomendada para clonar. 

console.log({myArray, myArray2, myArray3}); 

for (const myNumber of myArray) {
    console.log(myNumber + 10);
}