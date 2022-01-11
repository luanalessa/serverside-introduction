const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const configCors = {
    origin: "http://127.0.0.1:5500"
}

app.use(cors(configCors));

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
    const email = req.body.email;
    const password = req.body.password;

    const checkUser = users.filter((user) => {
        if(user.email == email){
            return user;
        }
    })

    if(checkUser.length == 0){
        users.push({id : users.length + 1, email : email, password : password})
        res.sendStatus(200);
    }else{
        res.sendStatus(400)
    }

})

app.listen(8080)