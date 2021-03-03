const { crearArchivo } = require('./helpers/multiplicar')

console.clear();


const [, , arg3 = 'base=5'] = process.argv;
const [, base = 1] = arg3.split('=');

// console.log(base);








//var base = 2;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))