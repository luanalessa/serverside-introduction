const express = require("express") // importa o framework express, que vai montar seu servidor
const cors = require("cors") // importa o pacote cors, para podermos configurar as origins das quais aceitaremos requisições.
// se você não utilizar esse pacote é bem capaz que seu navegador acabe bloqueando na requisição por motivos de : "CORS policy"

const app = express() // coloca o express pra rodar
app.use(cors()) // diz para o express usar o middleware cors (como se fosse um ajudante)

const configCors = {
    origin: false // isso desabilita o cors
}

let valor = "oi" // criar uma variável na memória do servidor para enviar como resposta pro cliente :)



 // framework.metodoGET.('rota', configurações-opcionais, função de request-response) => é o que significa a linha a baixo
app.get("/", cors(configCors), (req, res) => {
    valor = valor + "i" // toda vez que chegar uma requisição nessa rota vamos melhorar o nivel de animação do nosso 'oi'
    res.send(valor) // envia o valor atual da variável 'valor'
})

// servidor escuta a porta 8080, ou seja, espera requisições chegarem
app.listen(8080) 