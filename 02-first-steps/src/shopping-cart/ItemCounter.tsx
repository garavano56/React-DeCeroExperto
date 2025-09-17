
interface Props {
    name: string;
    quantity?: number;
    // quantity?: number | undefined;
};

export const ItemCounter = ( { name, quantity }: Props ) => {
    
    const handleClick = () => {
        console.log(`Click en ${name}`); 
    }

    return (
        <section style = {{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}>
            <span style= {{ width: 150 }}>{ name }</span>
            <button
                onClick={ (event) => { 
                    handleClick();
                    // console.log(event);
                    // console.log(`Click ${name}`); 
                    }
                }
            >+1</button>
            <span>{ quantity }</span>
            <button>-1</button>
        </section>
    )
}
