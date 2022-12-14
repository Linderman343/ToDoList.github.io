let lista = JSON.parse(localStorage.getItem("lst"))
///cargar
console.log(a("a"))
function a(z) {
    
    document.getElementById('hechas').innerHTML = ""
    document.getElementById('pendientes').innerHTML = ""
    for (let i = 0; i < lista.length; i++) {
        lista = JSON.parse(localStorage.getItem("lst"))
        if (lista[i].estado == 'pendiente') {
            document.getElementById
            ('pendientes').innerHTML += ` <div id="caja-task">
            <input type="button"  id="listo" value="✓" onclick="ToDoList(${i})">
            ${lista[i].point} 
            <input type="button"  id="quitar" value="✗" onclick="eli(${i})">
            <br>
            </div> `
        }    
        else{
            document.getElementById('hechas').innerHTML += `
            <div id="caja-task">
            <input type="button"  id="regresar" value="⮌" onclick="ToDoList(${i})">
            ${lista[i].point} 
            <input type="button"  id="quitar" value="✗" onclick="eli(${i})"><br>
            </div>`
        }
    }
}

function ToDoList(y){
    if (lista[y].estado == 'pendiente') {
    lista[y].estado = "now"
    localStorage.setItem("lst", JSON.stringify(lista))
    console.log(a("a"))
    console.log(lista)

    } 
    else {
    localStorage.setItem("lst", JSON.stringify(lista))
    console.log(a("a"))
    console.log(lista)
    }

}
function check(Add) {
    if (Add != "") {
    lista.push({point: Add, estado:'pendiente'})
    localStorage.setItem("lst", JSON.stringify(lista))
    console.log(a("a"))
    console.log(lista)
    }
    else{
    alert("Por favor escriba el titulo de la tarea")}
    }
function eli(x){
    if (x == "Borrar todo") {
    lista.splice(x, lista.length)
    localStorage.setItem("lst", JSON.stringify(lista))
    }
    lista.splice(x, 1)
    localStorage.setItem("lst", JSON.stringify(lista))
    console.log(a("a"))
    console.log(lista)
}