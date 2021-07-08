// para poder trabajr con los datos de otro archivo hacemos lo siguiente
  // es opcional poner la ruta del archivo con .js o no

import { heroes } from './data/heroes';

  // Para poder utilizar estos datos debemos tener en cuenta que debemos exportarlo
    // desde el archivo de donde vamos a traer los datos 
      // ruta facil para hacer import imp  TAB PATH TAB nombre Importacion
      // otra solo escribiendo el nombre de lo que importaremos


    // Metodo find
      //Este metodo recibe por parametro un callback el cual evalua una condicion
        // La cual arrojara un resultado dependiendo de lo que el find devuelva
  console.log(heroes);

  export const getHeroeById = (id) => heroes.find((heroe)=> heroe.id === id);

  console.log(getHeroeById(2)); // devolvera el heroe con el id que le mandamos por parametro


const getHeroesByOwner = (owner) => heroes.find((owner)=> owner.owner === owner);

console.log(getHeroesByOwner('Marvel'));

  // Metodo Filter
    // Este metodo recibe por parametro un callback el cual evalua una condicion
      // A diferencia del find este devuelve todos los elementos que coincidan 
const getHeroByOwnWithFilter = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroByOwnWithFilter('DC'));