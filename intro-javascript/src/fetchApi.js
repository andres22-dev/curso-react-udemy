const apiKey = "mfP8yojOggNQRU4diXODyVNIS3OoIvOk";
const apiUrl = "api.giphy.com/v1/gifs/random	";
//fetch retorna una promesa por lo tanto podremos anidar la funcion .then  y demas para 
  //trabajar con eso que devuelve esa promesa
const peticion = fetch(`${apiUrl}?api_key=${apiKey}`);


  //Forma de recibir la respuesta poco practica

peticion.then((resp) => {
  // para poder trabajar con la respuesta de la promesa tendremos que convertirla en un json 
    //para hacer uso de ella
    resp.json().then(data => {
      console.log(data);
    })
});
  //Forma mas eficiente

    peticion
      .then( resp => resp.json())
      .then( ({data}) => { 
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
      })
      .catch(console.warn);