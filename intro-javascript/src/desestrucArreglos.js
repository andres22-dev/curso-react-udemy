const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Esta forma de extraer datos de un array es la menos dinamica
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Desestructuracion de arreglos :
  // Truco con teclas para poder cambiar una variable en todos lados
    // Que este escrita hacemos hover en la variable y precionamos f2
      // Y asi remplazaremos esa variable en todos lados que este

  // En si no importa el nombre de la const para poder obtener el dato del array
    // Pondremos una coma para obviar esa posicion y obtner la que deseamos
const  [p1] = personajes; // Goku
const [, p2] = personajes; // Vegeta
const [, ,p3] = personajes; // Trunks

console.log(p1, p2, p3);


// funcion que retorna un arreglo

const retornaArreglo = () => {

  return ['ABC', 123];

}

// Como retorna un arreglo esta funcion podremos usar la desestructuracion
  // asignando la funcion a las constantes

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);


// Tarea

const state = (valor) => {
  return [ valor, () => { console.log('Hola Mundo')} ]
}

const arr = state('Goku');

console.log(arr); // imprime goku y el cuerpo de la funcion

// accedemos a la posicion uno del array que retona nuestra funcion y la invocamos
arr[1](); // Nos arroja hola mundo porque es el valor que retorna la funcion
            // Que esta en la posicion 1 del array que retorna la funcion state

  //Tarea
  // 1. El primer valor del arr se llamara nombre
  // 2. se llamara setNombre

  const taskFunction = (nombre, setNombre) => {

    return [nombre, setNombre = () => { console.log(`este es el ${nombre}`)}]

  }

  // Es mucho mas facil desestructurarlo por parte de las comas que atraves de la posicion
    // Como cuando el valor que necesitamos es una funcion

  const [array, setNombre] = taskFunction();

  console.log(array, setNombre());
