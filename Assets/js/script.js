let nombre = window.document.getElementById("nombre");
let apellido= window.document.getElementById("apellido");
let error1 = document.getElementById("error1");    

let email = window.document.getElementById("email");
let edad = window.document.getElementById("edad");

let btnEnviar = document.getElementById("btnEnviar");

let nombreV = "";
let apellidoV= "";
let emailV = "";
let edadV = "";

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    
    nombreV = nombre.value;
    apellidoV = apellido.value;
    emailV = email.value;
    edadV = edad.value;

    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";

    console.log(`Nombre : ${nombreV}, Apellido : ${apellidoV}, Email : ${emailV}, Edad : ${edadV}`)

    if(nombreV === ""){
        error1.innerHTML = "Debe ingresar el nombre"
        error1.style.color = "red"
        return;
    }
    if(apellidoV === ""){
        error2.innerHTML = "Debe ingresar el apellido"
        error2.style.color = "red"
        return;
    }
    if(emailV === ""){
        error3.innerHTML = "Debe ingresar el email"
        error3.style.color = "red"
        return;
    }
    if(edadV === ""){
        error4.innerHTML = "Debe ingresar la edad"
        error4.style.color = "red"
        return;
    }

    console.log("Envio de datos");
    nombre.value ="";
    apellido.value ="";
    email.value ="";
    edad.value ="";

});