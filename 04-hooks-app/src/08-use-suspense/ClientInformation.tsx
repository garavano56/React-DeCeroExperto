
import { use, type Usable } from 'react';
import { getUserAction, type User } from './api/get-user.action';

// const userPromise = getUserAction(1);

interface Props {
    getUser: Usable<User>;      // Se ahce de esta forma si es que se quiere pasar parametro
}

export const ClientInformation = ({getUser}: Props) => {
    
    const user = use(getUser);

    // Sin el "suspense" mientras carga esos segundos queda en blanco 
    // const user = use( userPromise );   // getUserAction al async retorna una promesa. El use funcionaría acá como un await    
  
//     useEffect(() => {
//     getUserAction(id).then(console.log);
//   }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">{ user.name } - #{ user.id }</h2>
      <p className="text-white text-2xl">{ user.location }</p>
      <p className="text-white text-xl">{ user.role }</p>
    </div>
  );
};


// { id: number } → dice que las props son un objeto con una propiedad id de tipo number.