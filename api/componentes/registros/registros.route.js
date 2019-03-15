'use strict';
const express = require('express');
const router =  express.Router();
const registros_api = require('./registros.api');

const fs= require("fs");

router.route('/registrar_usuario')
    .post(
        function(req, res){
            registros_api.registrar(req, res);
        }
    );

router.route('/listar_usuarios')
        .get(
            function(req, res){
                registros_api.listar_todos(req, res);
            }
        )
router.route('/imagenes')
.get(function(req, res){
    imagen.find({creator: res.locals._id},function(err,imagenes){if(err){res.redirect("/app");return;}
res.render("public/registro_padres", {imagenes: imagenes});
});
})
.post(function(req,res){
    var extension = req.body.foto.name.split(".").pop();
    var data ={
        title: req.body.title,
        creator: res.locals.user._id,
        extension: extension
    }
    var imagen = new imagenes(data);
    imagen.save(function(err){
        if(!err){
            fs.rename(req.body.foto.path, "public/imagenes/"+imagen._id+"."+extension);
            res.redirect("public/imagenes/+imagen._id")
        }else{
            console.log(imagen);
            res.render(err);
        }
    });
});
module.exports = router;