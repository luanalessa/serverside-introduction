const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: true})); //  reconhece o objeto de solicitação (la do lado do cliente) como strings ou matrizes.
app.use(express.json());  //  reconhece o objeto de solicitação (la do lado do cliente) como um objeto JSON.

app.use(cors());

let users = [
    { 
        id: 1,
        email: 'luana@gmail.com', 
        password: '123'
    },
    { 
        id: 2,
        email: 'lessa@gmail.com', 
        password: '123'
    },
    { 
        id: 3,
        email: 'sena@gmail.com', 
        password: '123'
    }
]

app.get('/', (req, res) => {
    res.send(users);
})

app.post('/register', (req, res) => {
    const email = req.body.email; // BODY: converte o body da requisição para vários formatos
    // Aqui estamos acessando o valor da chave "email" do objeto body e atribuindo à const email que criamos
    
    const password = req.body.password;

    const checkUser = users.filter((user) => {
        if(user.email == email){
            return user;
        }
    })

    if(checkUser.length == 0){
        users.push({id : users.length + 1, email : email, password : password})
        res.sendStatus(201); // respondemos com o status de 201, que indica que um recurso foi criado com sucesso no servidor. 
        console.log(users);  // veja que o usuário foi criado na memória do servidor
    }else{
        res.sendStatus(400); // caso o usuário já exista, respondemos com o status 400 (bad request), "colocando a culpa" do erro em quem fez a requisição.
    }

})

app.listen(8080)