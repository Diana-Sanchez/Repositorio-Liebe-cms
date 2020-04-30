// Importación de módulos.
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/database');

//Asignación de todas las funcionalidades del módulo Express a la variable app.
var app = express();

// Empleo de middlewares.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Prueba para saber si el servidor recibe correctamente las peticiones.
app.get('/', function(req, res){
    res.send('Petición recibida correctamente');
})






app.listen('8888', function(){
    console.log('Servidor levantado correctamente');
});