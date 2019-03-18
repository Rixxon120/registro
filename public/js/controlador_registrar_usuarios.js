'use strict';


const input_nombre = document.querySelector('#txt_nombre');
const input_identificacion = document.querySelector('#txt_identificacion');
const input_nacionalidad = document.querySelector('#txt_nacionalidad');
const input_provincias = document.querySelector('#slt_provincias');
const input_cantones = document.querySelector('#slt_cantones');
const input_distritos = document.querySelector('#slt_distritos');

const input_hijos = document.querySelector('#txt_hijos');
const input_correo = document.querySelector('#txt_correo');

const boton_registrar = document.querySelector('#btn_registrar');
const input_foto= document.querySelector('#img_foto')


let validar = () => {
    let error = false;
    
    

    

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if (input_identificacion.value == '') {
        error = true;
        input_identificacion.classList.add('error_input');
    } else {
        input_identificacion.classList.remove('error_input');
    }
    if (input_nacionalidad.value == '') {
        error = true;
        input_nacionalidad.classList.add('error_input');
    } else {
        input_nacionalidad.classList.remove('error_input');
    }

   



    if (input_provincias.value == '') {
        error = true;
        input_provincias.classList.add('error_input');
    } else {
        input_provincias.classList.remove('error_input');
    }
    if (input_cantones.value == '') {
        error = true;
        input_cantones.classList.add('error_input');
    } else {
        input_cantones.classList.remove('error_input');
    }
    if (input_distritos.value == '') {
        error = true;
        input_distritos.classList.add('error_input');
    } else {
        input_distritos.classList.remove('error_input');
    }
   
    
    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }
    
    



    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        
        let nombre = input_nombre.value;
        let identificacion = input_identificacion.value;
        let nacionalidad = input_nacionalidad.value;
        
        
        let provincias = slt_provincias.value;
        let cantones = slt_cantones.value;
        let distritos = slt_distritos.value;
        let hijos = input_hijos.value;
        let correo = input_correo.value;
        let foto = input_foto.value;

        

        registrar_usuario(nombre, identificacion, nacionalidad, provincias, cantones,distritos, hijos, correo, foto);
   
    
    } else {
        swal.fire({
            type: 'warning',
            title: 'El usuario no fue registrado ',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_registrar.addEventListener('click', obtener_datos);