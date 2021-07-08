 /*
  // Otras formas de hacer exportaciones 
   // export defaut [{ejemplo: 'a'}, {}] => estamos exportando algo literal y no algo que

  export default [{ nombre: andres}];

    // tiene un espacio en memoria como lo es una variable 
  // Y como estamos importandolo de forma literal lo podremos llamr de cualquier forma
    // sucede porque podremos llamarlo como sea al momento de importarlo

  import cualquierNombre from './data/heroes';

  // Tambien podremos hacer export default desde la ultima linea del archivo

  export default nombreData;

  // Exportaciones individuales y Exportaciones por defecto

  // Si combinamos exportacion default y la importacion normal al momento de importar
    //debemos indicar las llaves a la importacion que no sea default
      // export const noDefault = ['DC', 'Marvel'];
  
    
  import hero, {noDefault} from './data/heroes'

  //otra manera de importar y exportar individualmente

  export {
    heroes, 
    owners
  }

  import { heroes, owners} from './data/heroes';

  // De esta forma tambien podremos especificarle si queremos que sea por defecto

  export {

    heroes as default,
    noDefault
  }

  //entonces deberiamos corregir su importacion ya que una es default y la otra no

  import heroes, {noDefault} from './data/heroes';


  */