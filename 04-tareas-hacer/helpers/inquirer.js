const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [{
            value: '1',
            name: `${'1.'.yellow } Crear Tarea`
        },
        {
            value: '2',
            name: `${'2.'.yellow } Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.yellow } Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.yellow } Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.yellow } Conpletar tarea(s)`
        },
        {
            value: '6',
            name: `${'6.'.yellow } Borrar Tarea`
        },
        {
            value: '0',
            name: `${'0.'.yellow } Salir`
        }
    ]
}]

const inquirerMenu = async() => {
    console.clear();
    console.log('======================='.yellow);
    console.log(' Seleccione una opción'.yellow);
    console.log('======================='.yellow);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const pausa = async() => {
    await inquirer.prompt([{
        type: 'input',
        name: 'confirm',
        message: `\nPresione ${ 'ENTER'.yellow } para continuar\n`
    }]);

    return true;
}

module.exports = {
    inquirerMenu,
    pausa
}