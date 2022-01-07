const serverAddress = "http://localhost:8080/"  
const htmlResponse = document.getElementById('response');

const handleRequest = () => {
    fetch(serverAddress)
        .then(response => response.text())
        .then(data => {
            const clients = JSON.parse(data);
            console.log(clients);
            clients.map( client => {
                htmlResponse.innerHTML += `<tr><td>${client.id}</td>`
                                        + `<td>${client.name}</td>`
                                        + `<td>${client.email}</td></tr>`
            })
        })
        .catch(err => console.log(err))
}


const getClient = () => {
    const id = document.getElementById('id').value;

    fetch(serverAddress + `${id}`)
        .then( resposta => resposta.text())
        .then( data => {
            const client = JSON.parse(data);
            console.log(client)
            htmlResponse.innerHTML = `<tr><td>${client.id}</td>`
                                        + `<td>${client.name}</td>`
                                        + `<td>${client.email}</td></tr>`
        })
        .catch(err => console.log(err))
}

// const handleRequest = () => {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             const clients = JSON.parse(this.responseText)
//             clients.map( client => {
//                 htmlResponse.innerHTML += `<tr><td>${client.id}</td>`
//                                         + `<td>${client.name}</td>`
//                                         + `<td>${client.email}</td></tr>`
//             })

//         }
//     }
//     xhttp.open("GET", serverAddress, true); 
//     xhttp.send();
// }

window.onload = handleRequest();
