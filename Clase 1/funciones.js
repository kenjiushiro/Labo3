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

function Sumar(num1,num2)
{
    console.log(num1+num2);
}

Sumar(1,2);