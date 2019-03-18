'use strict';

const tabla = document.querySelector('#tbl_usuarios tbody');

let mostrar_datos = () =>{
    let usuarios=listar_usuarios();    
    for(let i=0;i<usuarios.length; i++){console.log('aqui');
let fila =tabla.insertRow();//crea el tr de la tabla

fila.insertCell().innerHTML=usuarios[i]['nombre'];
fila.insertCell().innerHTML=usuarios[i]['identificacion'];
fila.insertCell().innerHTML=usuarios[i]['nacionalidad'];
fila.insertCell().innerHTML=usuarios[i]['provincias'];
fila.insertCell().innerHTML=usuarios[i]['cantones'];
fila.insertCell().innerHTML=usuarios[i]['distirtos'];
fila.insertCell().innerHTML=usuarios[i]['hijos'];
fila.insertCell().innerHTML=usuarios[i]['correo'];
fila.insertCell().innerHTML=usuarios[i]['foto'];




};
};


mostrar_datos();