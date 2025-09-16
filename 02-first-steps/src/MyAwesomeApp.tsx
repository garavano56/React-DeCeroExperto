import type { CSSProperties } from "react";

const firstName = 'Alejandro';
const lastName = 'Garavano';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá'
};

// Por el IntelliSense se debe aclarar el Tipo --> sCSSProperties
const myStyles: CSSProperties = {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: isActive ? 10 : 5
};

export const MyAwesomeApp = () => {

    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>
            <p> {favoriteGames.join(', ')} </p>

            {/* Los valores booleanos no generan nada de código. Se muestran con isActive.toString() */}
            <h1> {isActive ? 'Activo' : 'No activo' } </h1>

            <p 
                style = { myStyles }
            > 
                { JSON.stringify(address) } 
            </p>
        </>
    );
}