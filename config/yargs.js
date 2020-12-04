const argv = require('yargs')
.command('listar', 'Lista la tabla de multiplicar', {
    base: {
        required: true,
        alias: 'b',
    }
})
.command('crear', 'Escribe en un archivo la tabla con la base especificada', {
    limite: {
        default: 10,
        alias: 'l'
    } 
})
.help()
.argv

module.exports = { argv }