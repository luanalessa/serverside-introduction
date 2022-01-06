const urlServidor = "http://localhost:8080"  // url do servidor com a porta que você escolheu!

const span = document.getElementById("resposta") // capturando onde vai ser exibido a resposta do servidor

function fazerRequisicao(){
    const id = document.getElementById("idProduct").value; // capturando o input

    // Tá, aqui começa a parte ruim, mas que nem é tão ruim depois que voce entende.
    const xhttp = new XMLHttpRequest(); // aqui você ta instanciando ou simplesmente pegando um funcionalidade para fazer as requisições HTTP pro servidor
   
    // Depois de instanciar o objeto XMLHttpajsklasjdkdfjnk você precisa dizer a ele o que fazer
    // então você indica uma função pra manipular o processamento do servidor através da propriedade onreadystatechange
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // lembra que o status 200 é de sucesso? Então, se houver sucesso na requisição a gente faz o que quiser com a resposta
            const response = JSON.parse(this.responseText) // aqui eu to 'parseando' a resposta, ou seja analisando a string JSON e costruindo um objeto.
            span.innerHTML =  JSON.stringify(response); // e aqui eu to voltando pra string e exibindo na tela

            // esse role todo de objeto pra string vai elimitar os caracteres e deixar a resposta legivel pro navegador.
            // outra opção é só usar JSON.parse e tratar a exibição da resposta, manipulando o objeto com um map.
        }
    };


    // Por ultimo, depois de declarar o que vai ser feito com a resposta do servidor (dentro da função) 
    // você faz a requisição, chamando os metodos open e send.
    xhttp.open("GET", `${urlServidor}/${id}`, true); // esse aqui é a real requisiçao, onde é preciso informar o metodo, a rota do servidor e dizer se é assincrono ou não (deixa true por enquanto)
    xhttp.send(); // aqui voce ta enviando a requisição pro servidor, no caso do metodo POST, enviamos parametros dentro do send.
}