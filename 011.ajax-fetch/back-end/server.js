const express = require('express');
const cors = require("cors");
const app = express();

const configCors = {
    origin: "http://127.0.0.1:5500"
}

app.use(cors(configCors));

const clients = [
    {
        id: 1,
        name: 'Luana Lessa Sena',
        email: 'lessa@gmail.com'
    },
    {
        id: 2,
        name: 'João Pedro Saraceni',
        email: 'joao@gmail.com'
    },
    {
        id: 3,
        name: 'Mel Lessa Sena',
        email: 'mel@gmail.com' 
    }
];

app.get('/', (req, res) => {
    res.send(clients);
})

app.get('/:id', (req, res) => {
    const idClient = req.params.id;

    clients.map( function (client) {
        if(client.id == idClient ){
            res.send(client);
        }
    })
})

app.listen(8080);