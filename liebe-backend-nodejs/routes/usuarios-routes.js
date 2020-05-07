var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

// Creación de un nuevo usuario y envío a la base de datos
router.post('/', function(req, res){
    let u = new usuario(
        {
            nombre: req.body.nombre,
            apellido:req.body.apellido,
            correo:req.body.correo,
            rol: req.body.rol,
            password: req.body.password
        }
    );
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Obtener un usuario desde la base de datos.
router.get('/:id', function(req, res){
    usuario.find({_id:req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

// Obtener todos los usuarios desde la base de datos.
router.get('/', function(req, res){
    usuario.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

// Actualizar un usuario.
router.put('/:id', function(req, res){
    usuario.update(
        {
            _id:req.params.id
        },
        {
            nombre: req.body.nombre,
            apellido:req.body.apellido,
            correo:req.body.correo,
            rol: req.body.rol,
            password: req.body.password
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Eliminar usuario.
router.delete('/:id', function(req, res){
    usuario.remove(
        {
            _id: req.params.id
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

// Exportación del objeto router.
module.exports = router;