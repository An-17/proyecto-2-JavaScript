

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña") ;
const botonR = document.getElementById("botonR") ;

const datos = JSON.parse(localStorage.getItem("usuario")) || [];

botonR.addEventListener("click",function () {
 

    let usuario ={

        nombre:nombre.value,
        correo:correo.value,
        contraseña:contraseña.value

    }

    
    datos.push(usuario)
    


 localStorage.setItem ("usuario", JSON.stringify(datos))



 window.location.href="/proyecto-2-JavaScript/login.html"

})



