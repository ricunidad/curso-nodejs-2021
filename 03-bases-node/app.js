const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

var base = 2;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))