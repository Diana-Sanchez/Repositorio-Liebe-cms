var mongoose = require('mongoose');
// Declaración de las variables necesarias para hacer la conexión con la base de datos en Liebe.

let bd='liebedb';
let port='27017';
let host = 'localhost';
let usuario = 'liebeAdmin';
let password = 'DYSC2122'; 

class Database{
    constructor(){
        this.conectar();
    };
    conectar(){
        mongoose.connect(`mongodb://${usuario}:${password}@${host}:${port}/${bd}`)
        .then(result=>console.log('Conexión realizada con la base de datos'))
        .catch(result=>console.log('La conexión a la base de datos no es posible'));
    };
}

module.exports = new Database();