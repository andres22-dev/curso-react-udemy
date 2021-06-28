
// antes de es6

const nombre = 'Fernando';
const apellido = 'Herrera';


const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);


// Con ES6 se incluyeron los template strings que nos permiten
  // Utilizar de manera mas eficiente los strings en conjunto con variables

const otroNombre = 'Felipe';
const otroApellido = 'Pinchao';

const otroNombreCompleto = `este es el resultado al utilizar template strings

  ${otroNombre}  poder utilizar espacios grandes
  ${otroApellido} y muchas variables con facilidad sin concatenar
`

console.log(otroNombreCompleto);