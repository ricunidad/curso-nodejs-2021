const { rejects, throws } = require('assert');
const { promises, Resolver } = require('dns');
const fs = require('fs');
const colors = require('colors');
const { h } = require('../config/yargs');

const crearArchivo = async(base = 10, hasta = h, listar = false) => {

    try {
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${index} x ${base} = ${index * base}\n`;
        }

        if (listar) {
            console.log('===================='.trap);
            console.log(`   Tabla del ${base}`.yellow);
            console.log('===================='.trap);

            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}