
// No es recomendable hacer funciones con la palabra clave, ya que al
  // asignarle un valor con el nombre de dicha funcion este podra ser cambiado 
function saludar(nombre){
  return `Hola, ${nombre}`;
}

// saludar = 30 


console.log(saludar('goku')); // esto imprimiria 30 ya que su valor cambio y no es la funcion


// funcion anonima

const saludar2 = function(nombre){

  return `Hola, ${nombre}`;
}

saludar2()


// arrow function


const arrowFunction = (nombre) => {

  return `Hola, ${nombre}`;

}

arrowFunction('Luffy');


// arrow function escrita en una sola linea, cuando solo queremos hacer que 
  // nuestra funcion retorne algo


  const arrowTwo = (nombre) =>  `Hola, ${nombre}`;

  arrowTwo('Zoro');


// arrow function sin () en los parametros

const arrowThree = nombre => `Hola, ${nombre}`;

arrowThree('Sanji');



// Tema ha entender con las funciones
  // No se puede retornar un objeto sin el cuerpo total de la funcion y sin el return

const getUser = () => {

  return {

    uid: 'ABC123',
    username : 'andres22'
  }
}

console.log(getUser());

// Para poder indicar a la funcion que vamos a retornar algo sin return 
  // Lo hacemos con los parentesis, indican en este caso que estoy retornando
    // Esto objeto de manera implicita.

  const getUser2 = () => 

    ({
  
      uid: 'ABC123',
      username : 'andres22'
    })

    getUser2()

    // Ejercicio
      // 1. Tranformen a una funcion de flecha
      // 2.  Retornar un objeto implicito
      // 3 . Pruebas

    function getUsuarioActivo(nombre){
      return {

        uid: 'ABC567',
        username: nombre
      }
    };

    const usuarioActivo = getUsuarioActivo('Fernando');
    console.log(usuarioActivo);


    // tarea lista 
    const getUserActivate = nombre => 
      ({
        uid: 'gdg837',
        username: nombre
      })

      const userA = getUserActivate('Andres');
      console.log(userA);



