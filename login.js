let usuarios = JSON.parse(localStorage.getItem("usuario"))

 
 const correoL = document.getElementById("correoL");
 const contraseñaL = document.getElementById("contraseñaL");
 const boton = document.getElementById("boton");

 boton.addEventListener("click", function () {
const validUsuario = usuarios.find (usuarios => usuarios.correoL == correoL && usuarios.contraseñaL == contraseñaL) 


    

window.location.href = "/proyecto-2-JavaScript/tareas.html"
 })


 
 