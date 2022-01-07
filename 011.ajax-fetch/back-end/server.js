const express = require('express');
const cors = require("cors");

const app = express();

const configCors = {
    origin: false
};

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

app.get('/',  (req, res) => {
    res.send(clients);
});

app.get('/:id',  (req, res) => {
    const id = req.params.id;
    clients.map((client) => {
        if(client.id == id) res.send(client);
    })

})
app.listen(8080);