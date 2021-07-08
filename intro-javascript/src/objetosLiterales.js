
// Los objetos literales tambien son conocidos como diccionarios de datos
  // dependiendo del lenguaje de programacion con el que se este trabajando
const persona = {

  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,


};

// Para acceder al valor de un objeto lo hacemos atraves del . + key
console.log(persona.nombre);

// Estamos agregando un objeto dentro de otro con la siguiente expresion

console.log({persona});

// En es6 se establecio que si el key del objeto representa lo mismo que su valor
  // Se ponga solo uno y este se pondra su valor y asi implicitamente se ponga
    // por si mismo sin necesidad de expresarlo normalmente 

// console.log({persona:persona})
  console.log({persona}); // asi se deberia hacer 

  //Podremos utilizar console.table(persona) para visualizar de una forma
    // mas bonita el objeto
  console.table(persona);


  const otraPersona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {

      ciudad: 'New York',
      zip: 1232343,
      lat: 78.2323,
      lng: 34.999,

    }
  }

  console.log(otraPersona);


  // Si asigno un objeto a una nueva variable, lo que sucede es que se hace una copia
    // del mismo espacio en memoria, esto quiere decir que si hacemos cambio
      // del key en uno se vera reflejado en el otro tambien


    const persona2 = otraPersona;
    persona2.nombre = 'Peter';

    console.log(otraPersona);  // { nombre: "Peter"}
    console.log(persona2);  // { nombre: "Peter"}

// En conclusion no se debe nunca asignar un objeto a un nuevo espacio en memoria
  // Ya que se copia su referencia


  // Para corregir esta situacion del mismo punto de referencia
    // Se creo en ES6 el Spread  Operator  ...
      // Para hacer un clon de las mismas propiedades que tiene un objeto

    const persona3 = { ...otraPersona};
    console.log(persona3);

    //Entonces si lo hacemos asi el punto de referencia sera distinto
      // Y al hacer la reasignacion del valor este sera individual