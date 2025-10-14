
import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubTitle } from './ui/MySubtitle';

// Si se encuentra acá afuera. no es necesario memorizar la función con memo. No se va a renderizar. 
// const handleMyApiCall = () => {
//     console.log('Llamar a mi API');
// }

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');      // 'setTitle' is assigned a value but never used
  const [subTitle, setSubTitle] = useState('Mundo'); // 'setSubTitle' is assigned a value but never used

  // Cuando se renderiza ésta función apunta cada vez a un espacio de memoria diferente
  // Por eso la memorizamos con el useCallaback
  const handleMyAPI = useCallback( () => {
    console.log('Llamar a mi API', subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} callMyAPI={ handleMyAPI }/>

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={ () => setTitle('Hello, ' + new Date().getTime()) }
        >Cambiar título
      </button>

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={ () => setSubTitle('World') }
        >Cambiar subtítulo
      </button>
    </div>
  );
};