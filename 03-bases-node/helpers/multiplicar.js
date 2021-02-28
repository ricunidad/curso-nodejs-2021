const { rejects, throws } = require('assert');
const { promises, Resolver } = require('dns');
const fs = require('fs');

const crearArchivo = async(base = 10) => {

    try {
        console.log('====================');
        console.log(`   Tabla del ${base}`);
        console.log('====================');

        let salida = '';

        for (let index = 1; index <= 10; index++) {
            salida += `${index} x ${base} = ${index * base}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}