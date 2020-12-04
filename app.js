const colors = require('colors');
const { crearArchivo, listarArchivo } = require('./funciones/funciones');
const argv = require('./config/yargs').argv;


(function app() {

    const PARAM = argv._[0];
    const BASE = argv.base;
    const LIMITE = argv.limite;

    switch(PARAM) {
        case 'listar':
            listarArchivo(BASE, LIMITE);
        break;
        case 'crear':
            crearArchivo(BASE, LIMITE)
        .then(archivo => console.log(`Se ha creado la`, colors.green(archivo)))
        .catch(err => console.log(err));
        break;
        default:
            console.log('Se ha especificado una opción incorrecta');
        break;
    }
})()



