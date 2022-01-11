
# <p align = "center"> Server-Side Introduction </p>
<p align = "center">
<img src="https://img.shields.io/badge/author-luanalessa-blue?style=flat-square" />
<img src="https://img.shields.io/badge/author-jpgsaraceni-blue?style=flat-square" />
 <img src="https://img.shields.io/github/languages/count/luanalessa/serverside-introduction?color=blue&style=flat-square" />

</br>

## Como rodar o servidor

Clone o repositório:

```shell
git clone https://github.com/luanalessa/serverside-introduction.git
```

Na sua máquina (não virtual), **dentro da pasta backend**, instale as dependências:

```shell
npm install
```

Inicialize o servidor:

```shell
npm start
```

Você pode também fazer tudo isso em um comando:

```shell
git clone https://github.com/luanalessa/serverside-introduction.git && cd serverside-introduction/000.simple-api/backend && npm install && npm start
```

## Como rodar o front para consumir a API

Abra o arquivo `index.html` (que está na pasta `frontend`) com o seu navegador.


## [Métodos HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

Toda requisição HTTP é acompanhada por seu método. São palavras que expressam (quando utilizadas corretamente) o propósito daquela requisição. Aqui abordamos, por enquanto, os métodos GET (utilizado para **buscar** informações do servidor) e POST (utilizado para **enviar (postar)** informações ao servidor). A utilização dos métodos HTTP pode ser entendida do ponto de vista do front e do back:

### No Front

Quem faz a requisição define o seu método. No caso do Fetch, o método padrão é GET. Quando queremos fazer uma requisição com outro método, precisamos especificar nos parâmetros.

É importante ficarmos atento a algumas convenções sobre os métodos, que devem ser implementados no servidor e seguidos pelo front ao montar uma requisição. Por exemplo, requisições GET não devem conter payload (body). 

### No Back

No servidor, precisamos configurar de que forma vamos tratar cada tipo de requisição. No caso do express, utilizamos métodos do objeto app (`app.get()`, `app.post()`, etc) para tratar cada tipo de requisição. 

## [Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Cada resposta a uma requisição HTTP vem acompanhada de um código de status. Os status 2XX (sendo o mais comum 200, de sucesso) indicam que a requisição foi bem sucedida. Os status de 4XX (sendo o mais comum 400, de requisição ruim) indicam que o cliente pode corrigir a requisição e tentar de novo. Os status de 5XX (sendo o mais comum 500, de error interno do servidor) indicam que o problema ocorreu no servidor, e não depende do cliente corrigir.

Os status devem ser gerados em cada rota do back, e devem ser semanticamente significativos. 

Ao contrário dos métodos HTTP, os status devem ser **gerados pelo back** e devidamente **consumidos pelo front** (dependendo do status da resposta o front decide o que fazer).
