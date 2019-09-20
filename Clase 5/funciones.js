window.onload = cargar;

function cargar(){
    var boton = document.getElementById("btnSubmit");
    boton.addEventListener("click",EnviarClicked)
    var botonReset = document.getElementById("btnReset");
    
}

function EnviarClicked(e){
    e.preventDefault();
    
    var xhttp = new XMLHttpRequest();
    var user = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200  )
            console.log("Tenemos respuesta",xhttp.responseText);
    }
    xhttp.open("GET","http://localhost:3000/loginUsuario?usr=" + user + "&pass=" + password,true);
    xhttp.send();
}

function demo1()
{
    alert("ola");
}

function demo2()
{
    alert("ke");
}

function demo3()
{
    alert("ase");
}


function log(){
    var a = document.getElementById("txtUsername");
    alert(a.value);
}

function Sumar(num1,num2)
{
    console.log(num1+num2);
}

Sumar(1,2);