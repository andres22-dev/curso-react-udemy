const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

console.log(persona.nombre);

// extrayendo de una forma mas facil los datos del objeto

// dentro del objeto pongo el key del valor dentro del objeto que quiero extraer
const { nombre } = persona;

//aqui imprimiriamos ese valor
console.log(nombre);

// Si por casualidad tenemos una variable igual al key del valor de un objeto
  // Podremos hacer lo siguiente y se asignara otro nombre a nuestra variable
    // Tener presentre que ya no podremos hacer uso del primer key disponible
      // ya que se lo estamos asignando a la constante 

  const {nombre:nombre2} = persona;
  console.log(nombre2);

  // tambien podria hacer esto

  const { nombre:nombre3, edad, clave} = persona;

  console.log(nombre3, edad, clave)

  // podriamos desestructurarlo en desorden esto no importaria

  const {clave:clav1, edad:edad1, nombre:nombre4} = persona;


  // Otros ejemplos


  const retornaPersona = (usuario) => {
    //console.log(usuario) primera manera
    const {edad, clave, nombre} = usuario;
    console.log(edad, clave, nombre);
  }

  retornaPersona(persona); // imprime el objeto
  // La segunda forma imprimiria solo los datos del objeto sin {}


  // Tambien podremos hacer desestructuracion desde los parametros de la funcion

    // Una de las ventajas de utilizar la desestructuracion es que podremos utilizar
      // valores por defecto 

      // Eejemplo rango no existe en nuestro objeto pero como le estamos poniendo un
        // valor por defecto este se pondria
  const returnPerson = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad);
    return {
      nombreClave: clave,
      anios: edad,
      latlang: {
        lat: 14.1232,
        lng: 12.233
      }
    }
  }
  // Para desestructurar el objeto que retorna la funcion podremos hacerlo
   // desde la misma variable a la que se lo asignamos 
    // const {nombreClave, anios} = returnPerson(persona)

  const avenger =  returnPerson(persona);

  // Para desestructurar valores de un objeto que estan en otro objeto
   // Hacemos lo que haciamos cuando queriamos cambiar el nombre de la variable
    // cuando en un caso hipotetico habian otras con el mismo nombre
      // objeto latlang:{valores del objeto que queremos extraer}

  const {nombreClave, anios, latlang:{lat, lng}} = returnPerson(persona);

  // Ahora podremos obtener esos valores de ese objeto, pero ya no podremos
    // usar el objeto que los rodeaba
  console.log(lat, lng)
  console.log(avenger);

// pienso que asi xd tambien se podria


console.log(avenger.nombreClave);

const {nombreClave:nombre33, anios:anios2} = avenger;
console.log(nombreClave, anios);