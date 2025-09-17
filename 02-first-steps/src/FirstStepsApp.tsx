import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemInCart {
  productoName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productoName: 'Nintendo Switch 2', quantity: 1 }, 
  { productoName: 'Pro Controller', quantity: 2}, 
  { productoName: 'Super Smash', quantity: 3 },
  { productoName: 'Super Mario', quantity: 3 } 
];

export const FirstStepsApp = () => {
  return (
    <>
        <h1>Carrito de compras</h1>

        { 
            itemsInCart.map( ( { productoName, quantity } ) => (
               <ItemCounter key={ productoName } name={ productoName } quantity={ quantity } />
            ))
        }

        {/* <ItemCounter name="Nintendo Switch 2" quantity={ 1 } />
        <ItemCounter name="Pro Controller" quantity={ 2 }  />
        <ItemCounter name="Super Smash" quantity={ 3 }  />
        <ItemCounter name="Super Mario" quantity={ 3 }  /> */}

    </>
  )
}
