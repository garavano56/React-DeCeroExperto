
const API_KEY = 'LIlQVEnlYDQBi41GLGGI5K0A5S940Y8z';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
    .then((response) => response.json())   // response.json() retorna otra promesa. Se puede encadenar
    .then((data) => { 
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.body.append(imgElement);
    })
    .catch((err)=>{
        console.error(err);
    });