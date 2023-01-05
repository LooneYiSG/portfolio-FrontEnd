function loginAdmin(){
    document.getElementById("btn-edit-profile").style.display="block"
    document.getElementById("btn-edit-about").style.display="block"
}

function loginDisplay(enable){
    enable? document.getElementById("login").style.display="block" : document.getElementById("login").style.display="none";
}

function sendLoginData(){
    let data = new Object(); 
    data.username = document.getElementById("username").value;
    data.password = document.getElementById("password").value;
    searchLoginData(data)
}


function searchLoginData(datos){
    console.log("LOAD")
    fetch("http://127.0.0.1:5500/db/accounts.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(account => {
            if(account.username == datos.username && account.password == datos.password){
                alert("Login successful")
                loginDisplay(false)
                loginAdmin()
                console.log(account)
            }
        });
    })
    console.log("DONE")
}

function editText(id,btn){
    document.getElementById(btn).style.display="none";
    id.forEach(element => {
        document.getElementById(element).style.display="block"; 
    });
}

function setText(id,value){
    document.getElementById(id).innerText = value;
    console.log(value)
}

function doneEdit(id,btn){
    document.getElementById(btn).style.display="block";
    id.forEach(element => {
        document.getElementById(element).style.display="none"; 
    });
}
/*let JSONObject = new Object();
JSONObject.nombre = "nombre";
JSONObject.apellido = "apellido";
console.log(JSONObject)*/