let inputPrincipal = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")
let lista

class Item {
    constructor(tarea) {
        this.crearDiv(tarea) 
    }
    crearDiv(tarea) {
        let inputItem = document.createElement("input")
        inputItem.setAttribute("type", "text")
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = inputPrincipal.value
        let div = document.createElement("div")
        div.classList.add("item")
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML= "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML= "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        container.appendChild(div)

        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            } else {
                botonEditar.innerHTML= "<i class='fas fa-lock'></i>"
            }
            inputItem.toggleAttribute("disabled")
        botonRemover.addEventListener("click", function (){
            div.remove()
        })
            
        })
    }
}

function chequearInput () {
    if (inputPrincipal.value !== ""){
       lista = new Item(inputPrincipal.value)
        inputPrincipal.value = ""
    }
}

botonAgregar.addEventListener("click", function (tarea) {
    chequearInput()
    inputPrincipal.textContent = ""
})