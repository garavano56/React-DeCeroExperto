import type { GiphyRamdomResponse } from "../data/giphy.response";

const API_KEY = 'LIlQVEnlYDQBi41GLGGI5K0A5S940Y8z';

const createImageinsideDOM = (url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getRandomGipUrl = async(): Promise<string> => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    // const data = ( await response.json() ) as GiphyRamdomResponse;
    const { data }: GiphyRamdomResponse = await response.json();   // Para que no sea data.data lo desestructuro

    return data.images.original.url;
};

getRandomGipUrl().then( (url) => createImageinsideDOM(url) );

//*  getRandomGipUrl().then( createImageinsideDOM() );   // Optimizado - Mando la función como referencia  