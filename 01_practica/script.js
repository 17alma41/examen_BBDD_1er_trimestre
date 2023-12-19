let lista = [JSON.parse(localStorage.getItem("lista"))]

if(lista === null){
  lista = []
}else{
  for(let i = 0; i < lista.length; i++){
    const elemento = document.createElement("p")
    elemento.innerHTML = lista[i]
    document.querySelector(".resultados").appendChild(elemento)
  }
}

function añadir(){
    const valor = document.querySelector("#input_usuario").value
    lista.push(valor)
    const elemento = document.createElement("p")
    elemento.innerHTML = valor
    document.querySelector(".results").appendChild(elemento)
    document.querySelector("#input_usuario").value = ""
}

function borrar(){
    lista = []
    document.querySelector(".results").innerHTML = ""
    localStorage.removeItem("lista")
}

function sortea(){
   const ganador = lista[Math.floor(Math.random() * lista.length)]
   const textganador = document.createElement("p")
   textganador.innerHTML = ganador
   document.querySelector(".textoganador").appendChild(textganador)
}

function teclaEnter(event){
    if(event.keyCode === 13){
        añadir();
    }

}