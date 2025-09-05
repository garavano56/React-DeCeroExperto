interface Person {
    fistName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    fistName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

// Significa que la variable de spiderman apunta al mismo espacio en memoria que ironman
// const spiderman = ironman;

// Si quiero hacer un Clon se debe utilizar el operador spread
// Inconveniente: Solo lo hace para el 1° nivel.  Por ej: address sigue apuntando al mismo. Tener cuidado
const spiderman = { ...ironman };

// Si se quieren clonar todos los niveles se debe usar el método: structuredClone
// const spiderman.structuredClone(ironman)

spiderman.fistName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'Miami'  

console.log(ironman, spiderman);

// Nota: Las interfaces son solo de typescript - Cuando el código pasa a Javascript no se genera
//       ninguna linea de código. Es sólo para controlar el tipo de dato.
//       Arriba del objeto presionando (Ctrl + .) aparece la opción "Add missing properties"
//       const spiderman: Person = {  }   // Presionarlo arriba de spiderman para que aparezca
