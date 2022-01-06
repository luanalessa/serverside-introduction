const urlServidor = "http://localhost:8080" 

const span = document.getElementById("resposta")

function fazerRequisicao() {
    fetch(urlServidor) // manda uma requisição http para o servidor e espera a resposta
        .then(resposta => resposta.text() // converte a resposta para texto ou pode ser para JSON
            .then(texto => span.innerHTML = texto) // após convertida, a resposta do servidor é renderiza no elemento span
        ) 
        .catch(erro => console.log(erro)) // em caso de erro, imprime no console.

        // ps: O fetch retorna uma Promise (promessa de 'resposta'),
        // por isso usamos o then e o catch juntos.
        // Ah, mas por quê? Bem esses dois são como o Cris e Greg ou Bruno e Marrone ou Scooby Doo e Salsicha, sempre andam juntos.
        // E basicamente se algo der errado na resposta do servidor, o catch vai 'segurar as pontas' pro then, sendo o salvador da patria e evitando que sua aplicaçãon quebre.
}