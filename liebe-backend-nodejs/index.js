// Importación de módulos.
var express = require('express');
var app = express();
var cors = require('cors');

var database = require('./modules/database');
var usuariosRouter = require('./routes/usuarios-routes');
var bodyParser = require('body-parser');

//Asignación de todas las funcionalidades del módulo Express a la variable app.


// Empleo de middlewares.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuarios', usuariosRouter);

// Prueba para saber si el servidor recibe correctamente las peticiones.
app.get('/', function(req, res){
    res.send('Petición recibida correctamente');
})






app.listen('8888', function(){
    console.log('Servidor levantado correctamente');
});