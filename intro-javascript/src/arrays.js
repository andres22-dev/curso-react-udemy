// Los arreglos son una coleccion de valores que se encuentran en una misma variable

  // Esta es solo una forma diferente de crear arreglos a la forma literal []
    // const arreglo = new Array();

  const arreglo = [1,2,3,4];

  // No es recomendable usar el push ya que este modifica el array principal
  arreglo.push(1);


  let arreglo2 = arreglo;
  arreglo2.push(5);

  //reto del profe 
    //usamos el spread para extraer el contenido del array que contiene numeros
  let arreglo3 = [...arreglo, 5];


  // Metodo map es algo que ya viene en el prototype del array y sirve para mapear
    // El array y crear un nuevo array apartir de este dependiendo de lo que 
      // Hagamos en la funcion
    //Siempre utilizaremos funciones dentro de los metodos que tambien son llamadas 
      //callbacks

    //El metodo map crea un nuevo arreglo a partir del callaback que le pasamos por
    // parametros
  const arreglo4 = arreglo3.map((numero)=>{

    return numero * 2;
  });
console.log(arreglo, arreglo3, arreglo4);