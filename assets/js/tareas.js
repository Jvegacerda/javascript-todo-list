const formulario = document.querySelector("#formulario")
const inputTarea = document.querySelector("#tarea")
const listaTareas = document.querySelector("#lista-tareas")
const totalTareas = document.querySelector("#completasli")

const tareas = [
    {
    id: 1,
     texto: "Daily jefe",
     completa: false
    },
    {
    id: 2,
    texto: "Xerox cert error",
    completa: false
    },
    {
    id: 3,
    texto: "Delete printers on end users workstations",
    completa: false
    }
]


const renderTareas = ()=>{
    let html = ""
    let completasli1 = 0
    let totalli1 = 0

    tareas.forEach((tarea)=> {
        totalli1 +=1
         html += `
         <li id="${tarea.id}">         
         <span class="${tarea.completa ? 'completa' : ''}">${tarea.texto}</span>
         <i class="fa-regular fa-circle-check completar"></i>
         <i class="fa-regular fa-circle-xmark eliminar"></i>
         </li>
         `
         if (tarea.completa === false){
            completasli1 +=0
         } else (
            completasli1 +=1
         )            
    })

    listaTareas.innerHTML = html
    completasli.innerHTML = completasli1
    totalli.innerHTML = totalli1

    completarTareas()
    eliminarTareas()
}


const completarTareas = ()=> {
    const botones = document.querySelectorAll("#lista-tareas .completar")
    botones.forEach((btn) => {
        btn.addEventListener("click", ()=> {
            const index = tareas.findIndex((elemento)=> elemento.id == btn.parentNode.id)
            tareas[index].completa = !tareas[index].completa 
            renderTareas()
        })
    })
}


const eliminarTareas = ()=> {

     const botones = document.querySelectorAll("#lista-tareas .eliminar")
     botones.forEach((btn) => {
         btn.addEventListener("click", ()=> {
             const index = tareas.findIndex((elemento)=> elemento.id == btn.parentNode.id)
             tareas.splice(index, 1)
            renderTareas()
         })
     })
}


formulario.addEventListener('submit', (e)=> {
    e.preventDefault()
    const textoTarea = inputTarea.value.trim(); 

    if (textoTarea === '') {
        alert('Ingresa el nombre de la Nueva tarea.');
        return
    }
    tareas.push({
        id: Date.now(),
        texto: inputTarea.value,
        completa: false
    })
    inputTarea.value = ""
    renderTareas()   
}) 

renderTareas()