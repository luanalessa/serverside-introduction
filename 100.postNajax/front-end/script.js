const serverAddress = "http://localhost:8080/"

const htmlResponse = document.getElementById("response");


function getUsers(){

    fetch(serverAddress)
    .then( response =>  response.text())
    .then( data => {
        const clients = JSON.parse(data)
        htmlResponse.innerHTML = "";
        clients.map(client => {
            htmlResponse.innerHTML += `<tr><td>${client.id}</td><td>${client.email}</td></tr>`
        })
    })
    .catch( err => console.log(err))
}


function registerUser(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // const user = { email : `${email}`, password : `${password}` };

    // const xhttp = new XMLHttpRequest();
    // xhttp.open("POST", serverAddress + `register`, true);
    // xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // xhttp.onload = function () {
    //     if (xhttp.readyState == 4 && xhttp.status == 200){
    //         console.log(this.responseText);
    //     }
    // }
    // xhttp.send(JSON.stringify(user));

    const options = {
        method: 'POST',
        body: JSON.stringify({ email : `${email}`, password : `${password}` }),
        headers: { 'Content-Type': 'application/json' }
      }

    fetch(serverAddress + "register", options)
    .then( response =>  response.text())
    .then( data => {
        console.log(data)
    })
    .catch( err => console.log(err))

}


