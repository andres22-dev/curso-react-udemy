import { getHeroeById } from "./importExport";
// Promesas 
  // Las promesas tienen una forma muy simple de explicarse es sencillo
    // Como su nombre lo dice es la promesa de que algo sucedera, no se sabe cuando, pero sucedera.

    //Esta promesa puede que se cumpla o no, satisfactoria o que devuelva algo que indique que
      //la promesa no se cumplio xd

      //Las promesas por naturaleza son sincronas, primero se ejecuta todo el codigo que
        // es sincrono y luego el que es asincrono osea el resultado de las promesas

      //Las promesas reciben un callback como parametro y este callback como estandar tiene 
        // dos parametros resolve y reject
          // resolve se ejecutara cuando la promesa efectivamente haya sido resuelta
          // de lo contrario se ejecutara reject
    /*
  const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroeById(2);
      
      resolve(heroe); // con esto indicamos que cuando la tarea termine llame al resolve en este caso
    }, 2000);
  });

  // Tambien podremos anidar funciones cuando la promesa se cumpla o no necesariamente 
    // .then funcionara cuando la promesa se haya ejecutado correctamente
    // .catch se ejecutara cuando la promesa sea erronea
    // .finally se ejecutara despues del then o del catch ya sea que se haya ejecutado uno u otro
      //Tambien recibira un callback por parametro

    // atraves de los parametros del callback resolve o reject podremos pasar informacion
      // al .then .catch y a finally atraves de sus mismos parametros
  promesa.then((hero) => {
    console.log('Then de la promesa'+hero);
  })
  .catch(err => console.warn(err));
  */

  // Haremos una funcion la cual podamos pasarle el id del heroe por parametro para eso
    // Hacemos que la funcion retorne una promesa explicitamente con el return despues de indicar new promise
      // O retornando la constante que guarda la funcion en la ultima linea
        // Si no hacemos esto no podremos utilizar ninguna funcion a la promesa
  const  getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const heroe = getHeroeById(2);

        if (heroe === undefined) {
          reject(new Error())
        } else {
          resolve(heroe);
        } // con esto indicamos que cuando la tarea termine llame al resolve en este caso
      }, 2000);
    });
  
  }

  getHeroeByIdAsync(4)
  .then(heroe => console.log('Heroe', heroe))
  .catch(error => console.warn(error));

  // Tambien podremos utilizar el primer argumento que manda resolve o reject de manera implicita
    // Esto quiere decir que no tenemos que utilizarlo dentro como parametro en una funcion
      // Si no que se obviaria y este se pondria de manera automatica
getHeroeByIdAsync(5)
  .then(console.log)
  .catch(console.warn)
  