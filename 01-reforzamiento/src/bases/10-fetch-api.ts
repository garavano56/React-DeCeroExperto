import type { GiphyRamdomResponse } from "../data/giphy.response";

const API_KEY = 'LIlQVEnlYDQBi41GLGGI5K0A5S940Y8z';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageinsideDOM = (url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())   // response.json() retorna otra promesa. Se puede encadenar
    .then(({ data }: GiphyRamdomResponse) => { 
        
        const imageUrl = data.images.original.url;
        // console.log(imageUrl);
        createImageinsideDOM(imageUrl);
        
    })
    .catch((err)=>{
        console.error(err);
    });