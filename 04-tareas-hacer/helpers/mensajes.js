require('colors');

const mostrarMenu = () => {

    return new Promise((resolve => {
        console.clear();
        console.log('======================='.yellow);
        console.log(' Seleccione una opción'.yellow);
        console.log('======================='.yellow);

        console.log(`${'1.'.yellow } Crear Tarea`);
        console.log(`${'2.'.yellow } Listar tareas`);
        console.log(`${'3.'.yellow } Listar tareas completadas`);
        console.log(`${'4.'.yellow } Listar tareas pendientes`);
        console.log(`${'5.'.yellow } Conpletar tarea(s)`);
        console.log(`${'6.'.yellow } Borrar Tarea`);
        console.log(`${'0.'.yellow } Salir\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    }));


}

const pausa = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${ 'ENTER'.yellow } para continuar\n`, (opt) => {
            readLine.close();
            resolve(true);
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}