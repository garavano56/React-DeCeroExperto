// npm i axios

// import axios from 'axios';
import type { GiphyResponse } from '../inerfaces/giphy.response';
import type { Gif } from '../inerfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQuery = async(query: string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 10,
        }
    })

    // console.log(response.data);
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=LIlQVEnlYDQBi41GLGGI5K0A5S940Y8z&q=${query}`);

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));

};