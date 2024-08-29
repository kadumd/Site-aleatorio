document.addEventListener('DOMContentLoaded', () => {
    const filmList = document.getElementById('film-list');

    const fetchFilms = async() => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/films');
            const data = await response.json();
            displayFilms(data.results);
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
        }
    };

    const displayFilms = (films) => {
        filmList.innerHTML = '';
        films.forEach(film => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <h3>${film.title}</h3>
                <p><strong>Data de lançamento:</strong> ${film.release_date}</p>
                <p><strong>Diretor:</strong> ${film.director}</p>
                <p><strong>Produtor:</strong> ${film.producer}</p>
                <a href="film-detail.html?id=${film.url}" class="button">Ver Detalhes</a>
            `;
            filmList.appendChild(card);
        });
    };

    fetchFilms();
});


const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = process.env.PORT || 3000;

//rapaz, não entendi porra nenhuma que Pedro quis dizerkkkkk só dei um Ctrl C e Ctrl V e tamo junto, se tiver errado eu apago depois

const servidor = http.createServer((pedido, resposta) => {
    if (pedido.url === '/') {
        fs.readFile(__dirname + 'frontend/view/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('SPIRILININIBILININI!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/filmes') {
        fs.readFile(__dirname + 'frontend/view/filmes.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('SPIRILININIBILININI!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/index.css') {
        fs.readFile(__dirname + 'frontend/view/css/index.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('SPIRILININIBILININI!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    if (pedido.url === '/css/filmes.css') {
        fs.readFile(__dirname + 'frontend/view/css/filmes.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('SPIRILININIBILININI!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/database/listaDeAnimes.json') {
        fs.readFile(__dirname + 'database/films.json', (erro, dadosDoArquivo) => {
            if (erro) {
                console.log(erro)
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('SPIRILININIBILININI!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
});

servidor.listen(portaDeEntrada, '0.0.0.0');