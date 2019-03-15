'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');

let mostrar_datos = () =>{
    let usuarios=listar_usuarios();    
for(let i=0;i<mascotas.length;i++){
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=mascotas[i]['nombre'];
fila.insertCell().innerHTML=mascotas[i]['identificacion'];
fila.insertCell().innerHTML=mascotas[i]['nacionalidad'];
fila.insertCell().innerHTML=mascotas[i]['provincias'];
fila.insertCell().innerHTML=mascotas[i]['cantones'];
fila.insertCell().innerHTML=mascotas[i]['distirtos'];
fila.insertCell().innerHTML=mascotas[i]['hijos'];
fila.insertCell().innerHTML=mascotas[i]['correo'];
fila.insertCell().innerHTML=mascotas[i]['foto'];




};
};


mostrar_datos();