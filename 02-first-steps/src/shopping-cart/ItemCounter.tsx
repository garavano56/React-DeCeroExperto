import { useState } from "react";

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';     // Instalar la extensión "React CSS MODULES"

interface Props {
    name: string;
    quantity?: number;
    // quantity?: number | undefined;
};

export const ItemCounter = ( { name, quantity }: Props ) => {
    
    const [count, setCount] = useState<number>(quantity ??  0);   // Si viene undefined toma el valor 0

    // const handleClick = () => {
    //     console.log(`Click en ${name}`); 
    // }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return; 
        setCount(count - 1);
    }

    return (
        <section 
            className= { styles.itemRow }

            // className="item-row"

            // style = {{
            //     display: 'flex',
            //     alignItems: 'center',
            //     gap: 10,
            //     marginTop: 10
            // }}
        >
            <span 
                className= { styles['item-text'] }
                // className="item-text"
                style= {{ 
                    color:  count === 1 ? 'red' : 'black'           
                }}
            >{ name }</span>
            <button
                onClick={ handleAdd }
                // onClick={ (event) => { console.log(event); console.log(`Click ${name}`); } }
            >+1</button>
            <span>{ count }</span>
            <button onClick={ handleSubtract } >-1</button>
        </section>
    )
}
