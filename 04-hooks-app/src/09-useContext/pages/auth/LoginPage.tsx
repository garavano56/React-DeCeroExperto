
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router';

export const LoginPage = () => {

  const [userId, setUserId] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ userId });
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={ handleSubmit } >
        <Input type="number" placeholder="ID del usuario" 
          value= { userId }
          onChange={ event => setUserId(event.target.value) }
        />
        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost" className="">
          Volver a la página principal
        </Button>
      </Link>
    </div>
  );
};