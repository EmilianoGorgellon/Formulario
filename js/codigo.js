
const inputs = document.querySelectorAll("#formulario input")
let button = document.getElementById("button")

// inputs.addEventListener('click', () =>{
//     console.log("input")
// });
const expresionesRegulares = {
    "nombre": /^[a-zA-Z\s]{3,25}$/,
    "usuario": /^[a-zA-Z0-9\.\-\_]{4,16}$/,
    "email" : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/, 
    "password": /^.{4,16}$/
}
const validarCampos = {
    "nombre": false,
    "usuario": false,
    "email": false,
    "password": false,
    "password2": false
}
const validacion = (e) =>{
    if (e.target.name === 'nombre'){
        validacionNow(e.target.value, expresionesRegulares.nombre , e.target.name );
        
    } else if (e.target.name === 'usuario'){
        validacionNow(e.target.value, expresionesRegulares.usuario, e.target.name)
    } else if (e.target.name === 'email'){
        validacionNow(e.target.value, expresionesRegulares.email, e.target.name)
    } else if (e.target.name === 'password'){
        validacionNow(e.target.value, expresionesRegulares.password, e.target.name)
    } else if (e.target.name === 'password2'){
        validacionPassword()
    } 
}
const validacionNow = (input_valor, expresionReg, input_name) =>{
    if (expresionReg.test(input_valor)){
        document.querySelector(`#formulario--${input_name} i`).classList.replace("fa-times-circle", "fa-check-circle");
        document.querySelector(`#formulario--${input_name} i`).classList.replace("formulario--icon-error-activo", "formulario--icon-check-activo");
        document.querySelector(`#formulario--${input_name} p`).classList.replace("formulario--msj-error-activo", "formulario--msj-error-inactivo");
        validarCampos[input_name] = true;
    } else {
        document.querySelector(`#formulario--${input_name} i`).classList.remove("formulario--icon-check-activo");
        document.querySelector(`#formulario--${input_name} i`).classList.remove('fa-check-circle');
        document.querySelector(`#formulario--${input_name} p`).classList.remove("formulario--msj-error-inactivo");
        document.querySelector(`#formulario--${input_name} i`).classList.add('fa-times-circle');
        document.querySelector(`#formulario--${input_name} i`).classList.add("formulario--icon-error-activo");
        document.querySelector(`#formulario--${input_name} p`).classList.add("formulario--msj-error-activo");
        validarCampos[input_name] = false;
    }
}

const validacionPassword = () =>{
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    if (password === password2){
        document.querySelector(`#formulario--password2 i`).classList.replace("fa-times-circle", "fa-check-circle");
        document.querySelector(`#formulario--password2 i`).classList.replace("formulario--icon-error-activo", "formulario--icon-check-activo");
        document.querySelector(`#formulario--password2 p`).classList.replace("formulario--msj-error-activo", "formulario--msj-error-inactivo");
        validarCampos.password2 = true;
    } else {
        document.querySelector(`#formulario--password2 i`).classList.remove("formulario--icon-check-activo");
        document.querySelector(`#formulario--password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#formulario--password2 p`).classList.remove("formulario--msj-error-inactivo");
        document.querySelector(`#formulario--password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#formulario--password2 i`).classList.add("formulario--icon-error-activo")
        document.querySelector(`#formulario--password2 p`).classList.add("formulario--msj-error-activo")
        validarCampos.password2 = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);
})
  
button.addEventListener('click', () =>{
    if (validarCampos.nombre && validarCampos.usuario && validarCampos.email && validarCampos.password && validarCampos.password2){
        document.getElementById('button').type = "submit";
        alert("Formulario enviado correctamente")
    } else {
        document.getElementById("error").classList.remove("error-desactivado");
        document.getElementById("error").classList.add("error")
    }
   
})