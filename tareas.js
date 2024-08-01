const crear = document.getElementById("crear") //boton agregar tareas

const tareas = document.getElementById("tareas") // div tarea

const eventos = document.getElementById("eventos") // div eventos

const seleccionar =document.getElementById ("seleccionar")

const etiquetaPi = document.getElementById("palabra") // input

const evento = document.getElementById ("evento") // opcion del select

const borrar = document.getElementById("borrar") // h3

const etiquetaE = document.getElementById ("editar") //h3



let listaEvento = []


let list=[]
console.log(list);


crear.addEventListener("click",function () { 

    console.log(list);
const input1 = etiquetaPi.value;
const opciones = seleccionar.value;  
const input2 = evento.value;



if (opciones === "tarea") {


  
    if (input1 === " " && input2 === " ") {
        
        alert ("Dato incorrecto")
        
    } else {
        
    
console.log(list);
    
     const etiquetaP = document.createElement("p")
    const etiquetaB = document.createElement ("button")
    const etiquetaE = document.createElement ("button")
   
    let task=input1+ " " +input2; /////
     etiquetaP.innerText = task;
     list.push(task);

     console.log(list);
     localStorage.setItem("listaTarea", JSON.stringify (list));
     tareas.appendChild (etiquetaP) /////

     etiquetaB.innerHTML = "Eliminar"
     tareas.appendChild (etiquetaB)

     etiquetaE.innerHTML = "Editar"
    
    tareas.appendChild (etiquetaE)

     etiquetaB.addEventListener("click", function () {
        
        let eliminarLista = JSON.parse(localStorage.getItem("listaTarea"))||[]
      
        let listaActualizada = eliminarLista.filter(tarea => tarea != etiquetaP.textContent)
   
        localStorage.setItem("listaTarea", JSON.stringify(listaActualizada));


        etiquetaB.remove()
        etiquetaP.remove()
        etiquetaE.remove()
    

        alert("Se eliminó corrctamente")
    
        
     });
     
     etiquetaE.addEventListener("click", function () {
        const modificar = document.createElement ("input")
        const guardar = document.createElement ("button")
        const valor = etiquetaP.textContent
        etiquetaP.appendChild (modificar)

        guardar.innerHTML = "guardar"
        etiquetaP.appendChild (guardar)

        guardar.addEventListener ("click", function () {
            let listaEditar = JSON.parse(localStorage.getItem("listaTarea"))||[]
            console.log(listaEditar);
            console.log(etiquetaP);
        
            for (let index = 0; index < listaEditar.length; index++) {

                console.log(listaEditar);
                console.log(listaEditar[index]);
                console.log(modificar.value);
                if (listaEditar[index]=== valor) {
                    

              console.log(listaEditar);
                    listaEditar[index] = modificar.value
                }
                
            }
            console.log(listaEditar);
            localStorage.setItem("listaTarea", JSON.stringify(listaEditar));
            etiquetaP.innerHTML=modificar.value
            
           
        })


     
       
        })
        
     }
    }else {
   


        
        if (input1 === " " && input2 === " ") {
            alert ("Dato incorrecto")
            
        } else {
            
        
    
        
         const etiquetaP = document.createElement("p")
        const etiquetaB = document.createElement ("button")
        const etiquetaE = document.createElement ("button")

       
        let evento2 = input1+ " " +input2;
         etiquetaP.innerText = evento2;
         listaEvento.push(evento2);
         localStorage.setItem("listaEvento", JSON.stringify(listaEvento));
         eventos.appendChild (etiquetaP)
    
         etiquetaB.innerHTML = "Eliminar"
         eventos.appendChild (etiquetaB)
    
         etiquetaE.innerHTML = "Editar"
         eventos.appendChild (etiquetaE)
    
         etiquetaB.addEventListener("click", function () {

            let eliminarLista2 = JSON.parse(localStorage.getItem("listaEvento"))|| []  

            let listaActualizada2 = eliminarLista2.filter(eventos => eventos != etiquetaP.textContent)
   
            localStorage.setItem("listaEvento", JSON.stringify(listaActualizada2));

            
            etiquetaB.remove()
            etiquetaP.remove()
            etiquetaE.remove()
            
    
            alert("Se eliminó corrctamente")
        
            
         });
         
         etiquetaE.addEventListener("click", function () {
            const modificar = document.createElement ("input")
            const guardar = document.createElement ("button")
            etiquetaP.appendChild (modificar)
    
            guardar.innerHTML = "guardar"
            etiquetaP.appendChild (guardar)
    
            guardar.addEventListener ("click", function () {
                etiquetaP.innerHTML=modificar.value
                
               
            });
    
    
         
           
            });
            
         }

     }
    })

///////////////////////////////////////////////
function traerTareas() {
    let listaT = JSON.parse(localStorage.getItem("listaTarea"))||[]
    for (let index = 0; index < listaT.length; index++) {
     const etiquetaP = document.createElement("p")
        list[index]= listaT[index];
        etiquetaP.innerText = list[index];
        tareas.appendChild (etiquetaP)
        
     const etiquetaB = document.createElement ("button")
       list[index] = etiquetaB[index];
        etiquetaB.innerHTML = "Eliminar";
        tareas.appendChild (etiquetaB)
        
     etiquetaB.addEventListener ("click", function () {


    let eliminarLista = JSON.parse(localStorage.getItem("listaTarea"))||[]
      
     let listaActualizada = eliminarLista.filter(tarea => tarea != etiquetaP.textContent)

     localStorage.setItem("listaTarea", JSON.stringify(listaActualizada));





        etiquetaB.remove()
        etiquetaP.remove()
        etiquetaE.remove()
        
    

        alert("Se eliminó corrctamente")
        
     }) 
 
     const etiquetaE = document.createElement ("button")
     list[index] = etiquetaE[index];
     etiquetaE.innerHTML = "Editar"
     tareas.appendChild (etiquetaE)

     etiquetaE.addEventListener("click", function () {
        const modificar = document.createElement ("input")
        const guardar = document.createElement ("button")
        const valor = etiquetaP.textContent
        etiquetaP.appendChild (modificar)

        guardar.innerHTML = "guardar"
        etiquetaP.appendChild (guardar)

        guardar.addEventListener ("click", function () {
            let listaEditar = JSON.parse(localStorage.getItem("listaTarea"))||[]
            console.log(listaEditar);
            console.log(etiquetaP.textContent);
            for (let index = 0; index < listaEditar.length; index++) {

                console.log(listaEditar);
                if (listaEditar[index]=== valor) {

              console.log(listaEditar);
                    listaEditar[index] = modificar.value
                }
                
            }
            console.log(listaEditar);
            localStorage.setItem("listaTarea", JSON.stringify(listaEditar));
            etiquetaP.innerHTML=modificar.value
            
           
        })





            etiquetaP.innerHTML=modificar.value



     
        
        });

    }; 



    
        };
    


traerTareas()
 

function traerEvento() {

    let listaE = JSON.parse (localStorage.getItem("listaEvento")) || []
    for (let index = 0; index < listaE.length; index++) {
        const etiquetaP = document.createElement ("p")
        listaEvento[index] = listaE[index];
        etiquetaP.innerText = listaEvento [index];
        eventos.appendChild(etiquetaP)
       

        const etiquetaB = document.createElement ("button")
        listaEvento[index] = etiquetaB[index];
         etiquetaB.innerHTML = "Eliminar";
         eventos.appendChild (etiquetaB)
         
      etiquetaB.addEventListener ("click", function () {

        let eliminarLista2 = JSON.parse(localStorage.getItem("listaEvento"))|| []  

         let listaActualizada2 = eliminarLista2.filter(eventos => eventos != etiquetaP.textContent)

         localStorage.setItem("listaEvento", JSON.stringify(listaActualizada2));

         etiquetaB.remove()
         etiquetaP.remove()
         etiquetaE.remove()
         
     
 
         alert("Se eliminó corrctamente")
         
      }) 
  
      const etiquetaE = document.createElement ("button")
      list[index] = etiquetaE[index];
      etiquetaE.innerHTML = "Editar"
      eventos.appendChild (etiquetaE)
 
      etiquetaE.addEventListener("click", function () {
         const modificar = document.createElement ("input")
         const guardar = document.createElement ("button")
         eventos.appendChild (modificar)
 
         guardar.innerHTML = "guardar"
         eventos.appendChild (guardar)
 
         guardar.addEventListener ("click", function () {
             etiquetaP.innerHTML=modificar.value
      
         
         });
 
     }); 
 

        
  

    
    }
    
}
traerEvento()
















