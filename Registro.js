

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña") ;
const botonR = document.getElementById("botonR") ;


let nombreU = nombre.value;
let correoU = correo.value;
let contraseñaU = contraseña.value;

let datos = [];

botonR.addEventListener("click",function () {
 

    let usuario ={
        nombre:nombre.value,
        correo:correo.value,
        contraseña:contraseña.value
    }

  datos.push(usuario);
localStorage.setItem ("usuario", JSON.stringify(datos))

alert ("Se ha registrdo exitosamente")

})



