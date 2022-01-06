const express = require("express"); 
const cors = require("cors");

const app = express();
app.use(cors());


const configCors = {
    origin: false 
};

const produto = [
	{
	 "id": 1,
	 "nome": "Produto A" 
	}, {
	 "id": 3,
	 "nome": "Produto B"
 	}, {
 	 "id": 6,
 	 "nome": "Produto C"
 	}, {
 	 "id": 3, 
 	 "nome": "Produto D" 
}] 

// rota para todos os produtos
app.get("/", cors(configCors), (req, res) => {
    res.send(produto)
})

// rota para buscar os produtos pelo id
app.get("/:id", (req, res) => {
    const idProduto = req.params.id; // usa o params para buscar pela url (atenção para o nome da variavel depois dos ':' na rota)
    const resposta = produto.filter( elemento => elemento.id == idProduto) // filtra os produtos com aquele id
	console.log(req.params.id)

    res.send(resposta) // envia a resposta pro servidor.
  
})

app.listen(8080) 