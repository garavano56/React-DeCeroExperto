
import { use } from 'react';
import { getUserAction } from './api/get-user.action';

export const ClientInformation = () => {
  
    const user = use( getUserAction(1) );
  
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