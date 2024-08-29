//API----------------------------------------------------------------
const main = document.querySelector("main")
const pegando = await fetch("../carlos/filme.json")
const API = await pegando.json()

API.forEach(exe);
function exe(ola) {
    console.log(ola)
    const card = document.createElement("div")
    card.classList.add("cartas")

    const titulo = document.createElement("h2")
    titulo.classList.add("titulo")
    titulo.textContent = ola.titulo

    const dataDeLancamento = document.createElement("p")
    dataDeLancamento.classList.add("data-de-lancamento")
    dataDeLancamento.textContent = ola["data-de-lancamento"]

    card.appendChild(titulo)
    card.appendChild(dataDeLancamento)
    main.appendChild(card)
}


//memes-------------------------------------------------------------------
const gif = document.querySelector(".shrek")
const img = document.querySelector(".otario")

function loop (){
    setInterval(() => {

    setTimeout(() => {
    gif.style.display = "flex"
    }, 1000);

    }, 2000);
}
loop()


function loop2 (){
    setInterval(() => {

    setTimeout(() => {
    img.style.display = "flex"
    }, 1000);

    }, 4000);
}
loop2()



function detectar (){
    gif.remove()
}

gif.addEventListener("click", detectar)


function detectar2 (){
    img.remove()
}

img.addEventListener("click", detectar2)