const main = document.querySelector("main")
const SteamVerde = await fetch("../cayo/main.json")
const API = await SteamVerde.json()

API.forEach(exe);
function exe(CriaçãoCartas) {
    console.log(CriaçãoCartas)
    const card = document.createElement("div")
    card.classList.add("cartas")

    const titulo = document.createElement("h2")
    titulo.classList.add("titulo")
    titulo.textContent = CriaçãoCartas.titulo

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const dataDeLancamento = document.createElement("p")
    dataDeLancamento.classList.add("data-de-lancamento")
    dataDeLancamento.textContent = CriaçãoCartas["data-de-lancamento"]

    const categoria = document.createElement("h4")
    categoria.classList.add("categoria")
    categoria.textContent = CriaçãoCartas.categoria
    
    card.appendChild(titulo)
    card.appendChild(capa)
    card.appendChild(dataDeLancamento)
    card.appendChild(categoria)
    main.appendChild(card)
}

const sommenu = new Audio('./Alpha.mp3');
document.addEventListener('DOMContentLoaded', () => {
sommenu.play();
});

const hoversom = new Audio('./img/hoverbutton.mp3');
hoversom.preload = 'auto';

const divElement = document.querySelector('body');
const childElements = divElement.querySelectorAll('*');

childElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        
        if (hoversom.paused) {
            hoversom.play();
        } else {
            hoversom.currentTime = 0;
        }
    });
});


document.getElementById('alterarcor').addEventListener('click', function() {
    const body = document.body;
    const capa = document.querySelector('.capa');

    if (body.style.backgroundImage === 'url("./img/giphy.webp")') {
        body.style.backgroundImage = 'url("./img/dark.webp")';
        if (capa) {
            capa.style.backgroundImage = 'url("./img/dark.webp")';
        }
    } else {
        body.style.backgroundImage = 'url("./img/giphy.webp")';
        if (capa) {
            capa.style.backgroundImage = 'url("./img/giphy.webp")';
        }
    }
})