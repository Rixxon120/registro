'use strict';
const mongoose = require('mongoose');

let schema_registros = new mongoose.Schema(
    {
        nombre : {type : String, required: true},
        identificacion : {type : String, required : true, unique: true},
        nacionalidad : {type : String, required: true},
        provincias : {type : String, required: true},
        cantones : {type : String, required: true},
        distritos : {type : String, required: true},
        hijos: {type: Number, required: false},
        correo : {type: String, required: true},
        foto :{type: Image, required: false}
        
    }
);

module.exports = mongoose.model('mascotas', schema_mascotas);