const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = process.env.PORT || 3000;



const servidor = http.createServer((pedido, resposta) => {
    if (pedido.url === '/') {
        fs.readFile(__dirname + 'carlos/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/carlos/main.css') {
        fs.readFile(__dirname + 'carlos/main.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/carlos/script.js') {
        fs.readFile(__dirname + 'carlos/script.js', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/javascript' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/carlos/filme.json') {
        fs.readFile(__dirname + 'carlos/filme.json', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'application/json' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    //----------------------------------------------------------------------------------------------------------------------------

    if (pedido.url === '/antonio/index.html') {
        fs.readFile(__dirname + 'antonio/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    if (pedido.url === '/antonio/main.css') {
        fs.readFile(__dirname + 'antonio/main.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/antonio/script.js') {
        fs.readFile(__dirname + 'antonio/script.js', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/javascript' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    //----------------------------------------------------------------------------------------------------------------------------
    if (pedido.url === '/pedro/index.html') {
        fs.readFile(__dirname + 'pedro/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    if (pedido.url === '/pedro/filmes.html') {
        fs.readFile(__dirname + 'pedro/filmes.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    if (pedido.url === '/pedro/main.css') {
        fs.readFile(__dirname + 'pedro/main.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/pedro/main.js') {
        fs.readFile(__dirname + 'pedro/main.js', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/javascript' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
});



servidor.listen(portaDeEntrada, '0.0.0.0');