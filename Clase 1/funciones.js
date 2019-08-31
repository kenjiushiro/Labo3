var nombre;
var edad;
nombre = "Penji";

edad = 25;

function Mostrar()
{
    var user = document.getElementById("txtUsername").value;
    var pw = document.getElementById("txtPassword").value;
    if(user=="Penji" && pw == "qwerty")
    {
        alert("Login successful");
    }
    else
    {
        alert("Try again");
    }
}


var v;
//Cuando defino una funcion "cargar()" automaticamente se crea una variable cargar que es un puntero a la funcion

//Cuando termina de cargar la pagina, se ejecuta la funcion cargar
window.onload= cargar;

//Cargar reemplaza la funcion onClick del boton submit (Por html esta seteado para que ejecute la funcion mostrar(), despues de que carga la pagina va 
//ejecutar la funcion log())
function cargar(){
    var boton = document.getElementById("btnSubmit");
    boton.onclick = log;
    var botonReset = document.getElementById("btnReset");
    //La funcion addEventListener agrega las funciones demo1, demo2 y demo3 al boton reset, cuando pase el evento "clicK"
    botonReset.addEventListener("click",demo1);
    botonReset.addEventListener("click",demo2);
    botonReset.addEventListener("click",demo3);

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