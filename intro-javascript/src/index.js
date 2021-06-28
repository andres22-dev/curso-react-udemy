
// Variables y Constantes

  // Es importante aclarar que var no debe ser utilizado, debido a que es una mala practica
    // Tambien porque causa muchos errores en nuestro desarrollo ya que es algo
      // que tiene un contexto muy amplio y interfiere en el codigo.

// Const y Let

  // Las constantes son un tipo de espacio en memoria al cual no podremos reasignar su valor
    // Ya que este sera unico y no puede ser reasignado
const constante = 'const';

// Las variables de tipo let pueden ser reasignadas y su scope al contrario del de var es reducido.
let  variTypeLet = 'let';


//Siempre utilizar Const por encima de let es la mejor practica posible ya que constante nos asegura 
  //que este dato que almacenamos en memoria no cambie y que no ocurra algun error.


  console.log(constante, variTypeLet);


// Una vez declaramos una variable ya no debemos hacerlo nuevamente ya que esto daria error
  // Lo que tendriamos que hacer seria reasignar su valor, sin utilizar la palabra reservada let nuevamente

  let valorDado = 5;
  //let valorDado = 4; asi no!

  valorDado = 4; //asi si

  console.log('no reasignarlo asi : '+ valorDado);


// Score en variables
  //Significa que las variables utilizadas solo existiran donde son ejecutadas, esto quiere decir en 
    // dado bloque de codigo y no podremos utilizar variables en bloques de los que no hacen parte.


  if(true){
    let valorDado = 6;

    console.log(valorDado); // 6

  }
  console.log(valorDado); // 4


// Esto tambien aplicaria a las constantes declarariamos una const fuera de un scope y tambien dentro
  // Y no seria reasignarla si no que ambas constantes hacen parte de contextos diferentes

  const estoyGlobalOLocal = 'aqui arriba';
  
  if(true){
    const estoyGlobalOLocal = 'aqui encapsulado';
    console.log(estoyGlobalOLocal); //aqui encapsulado 

  }

  console.log(estoyGlobalOLocal); //aqui arriba