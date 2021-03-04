const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

console.clear();

// console.log(process.argv);
console.log(argv);




// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 1] = arg3.split('=');

// console.log(base);








//var base = 2;

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))