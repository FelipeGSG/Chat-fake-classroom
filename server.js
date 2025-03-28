const { Socket } = require('socket.io');

// Importar o módulo express
const express = require('express');

const app = express();

// Importar o módulo http e criar um servidor
const http = require('http').createServer(app);

// Importar o módulo socket e adicionar o servidor http
const io = require('socket.io')(http)



// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public')); // Isso vai permitir servir a pasta "public" para imagens, css, etc.




// Rota para página principal
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

// Evento quando o cliente se conecta ao servidor 
io.on('connection', (socket) => {
    console.log('Usuário conectado')
    

    // Evento para cliente envia mensagem
    socket.on('chat message', (data) => io.emit('chat message', data))

    socket.on('connection', () => {
        var msgConexao = document.createElement("p")
        msgConexao.innerHTML = "Um novo usuário foi conectado"
        document.getElementById("mensagens").appendChild(msgConexao)
    })
    // Evento para o cliente se desconecta do servidor
    socket.on('disconnect', () => console.log('Usuário desconectado'))
})

// Iniciar o servidor na porta 3000
http.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 - Link http://localhost:3000')
})
