import { memo } from "react";

interface Props {
    title: string
}

export const MyTitle = memo(({ title }: Props) => {

    console.log('MyTitle re-render');
    return <h1>{ title }</h1>
  
});
