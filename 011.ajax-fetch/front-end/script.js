const serverAddress = "http://localhost:8080/"

const htmlResponse = document.getElementById("response");

function getClient() {
    const id = document.getElementById("id").value;

    fetch(serverAddress + id)
        .then( response =>  response.text())
        .then( data => {
            const client = JSON.parse(data)
            htmlResponse.innerHTML = `<tr><td>${client.id}</td><td>${client.name}</td><td>${client.email}</td></tr>`
        })
        .catch( err => console.log(err))
}


function handleRequest(){
    fetch(serverAddress)
    .then( response => response.text())
    .then( data => {
        const clients = JSON.parse(data)
        clients.map(client => {
            htmlResponse.innerHTML += `<tr><td>${client.id}</td><td>${client.name}</td><td>${client.email}</td></tr>`
        })
    })
    .catch( err => console.log(err))

}

// function getClient(){
//         const id = document.getElementById("id").value;

//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function(){
//             if( this.readyState == 4 && this.status == 200){
//                 const client = JSON.parse(this.responseText)
//                 htmlResponse.innerHTML = `<tr><td>${client.id}</td><td>${client.name}</td><td>${client.email}</td></tr>`
//             }
//         }

//         xhttp.open("GET", serverAddress + id, true);
//         xhttp.send();
// }

window.onload = handleRequest();