const express = require("express"); 
const app = express();

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
app.get("/", (req, res) => {
    res.send(produto)
})

// rota para buscar os produtos pelo id
app.get("/:idDaUrl", (req, res) => {
    const idProduto = req.params.idDaUrl; // usa o params para buscar pela url (atenção para o nome da variavel depois dos ':' na rota)
    const resposta = produto.filter( elemento => elemento.id == idProduto) // filtra os produtos com aquele id
    
    res.send(resposta) // envia a resposta pro servidor.
  
})

app.listen(8080) 