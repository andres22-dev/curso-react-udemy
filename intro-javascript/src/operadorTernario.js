const activo = true;

let mensaje = '';


  if(activo){

    mensaje = 'activo';

  }else{ 
    
    mensaje ='inactivo';

  }

  //Operador Ternario sirve para simplificar condicinal y lo podremos poner dentro de una variable


  const mensaje2 = (activo) ? 'activo' : 'inactivo';

  const mensaje3 = !activo && 'Activo'; //false porque no se cumplen las dos condiciones 

  console.log(mensaje2);