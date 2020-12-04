const fs = require('fs');

const crearTabla = (base, limite) => {
    let output = '';
    for( let i = 1; i <= limite; i++ ) {
        output += `${base} * ${i} = ${base * i}\n`;
    }
    return output;
}

const listarArchivo = (base, limite) => {
    console.log(crearTabla(base, limite))
}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        const output = crearTabla(base, limite);
        const tabla = `tabla-del-${base}.txt`;

        fs.writeFile(`./tablas/(${tabla})`, output, (err) => {
            if(err) reject(err);
            else resolve(tabla)
        })
    })   
}

module.exports = {
    crearArchivo,
    listarArchivo,
}