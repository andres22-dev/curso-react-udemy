//API 

const apiKey = "mfP8yojOggNQRU4diXODyVNIS3OoIvOk";
const apiUrl = "api.giphy.com/v1/gifs/random";

const getImagenPromesa = () => new Promise((resolve, reject) => resolve('htttps://xd.com'))

// Async Await
  // Utilizaremos async antes de definir la funcion de flecha y esto convierte a la funcion en una promesa
    // que esta devolviendo un valor que en este caso es un string de una imagen
  // Async va de la mano con Await pero se puede utilizar en solitario async cuando necesitamos retornar 
    // Una promesa desde nuestra funcion
  //Await nos ayuda a trabar todo el codigo como si fuera sincrono

const getImageAsyncAwait = async () => 'htttps://xd.com';
getImagenPromesa()
  	.then(console.log);

getImageAsyncAwait()
  .then(console.log);

  // Utilizando async await con una api
    //await significa esperar a que una ejecucion se termine para pasar a la siguiente

  // Para el manejo de errores en async await se hace con try catch el cual nos dice
    // Que nos dice que ejecute el primer bloque de codigo y si falla ejecute el error

  const getGifToApi = async (urlApi) => {

  try {

    const response = await fetch(urlApi);
    const {data} = await response.json;
    const {url} = data.images.original;
    const containerImg = document.createElement('img');
    containerImg.src = url;
    document.body.appendChild(containerImg);

  } catch(error) {
    console.error(error);
  }
    
  }


  getGifToApi(`${apiUrl}?api_key=${apiKey}`);