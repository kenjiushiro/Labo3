function Sumar()
{   
    var num1 = document.getElementById("numero1");
    
    var num2 = document.getElementById("numero2");
    var resultado = document.getElementById("resultado");
    resultado.value = parseFloat(num1.value) + parseFloat(num2.value);
}

function SumarYGuardar()
{
    Sumar();
    var num1 = document.getElementById("numero1");
    var num2 = document.getElementById("numero2");
    var resultado = document.getElementById("resultado");
    var tablaResultados = document.getElementById("tablaResultados");

    
    var rowNueva = tablaResultados.insertRow();
    rowNueva.insertCell().appendChild(document.createTextNode(parseFloat(num1.value)));
    rowNueva.insertCell().appendChild(document.createTextNode(parseFloat(num2.value)));
    rowNueva.insertCell().appendChild(document.createTextNode(parseFloat(resultado.value)));

    //tablaResultados.innerHTML = tablaResultados.innerHTML +  "<tr><td>" + parseFloat(num1.value) + "</td><td>" + parseFloat(num2.value) + "</td><td>" + resultado.value + "</td></tr>";
}

window.onload = SetFunctions;

function SetFunctions()
{
    var botonSumar = document.getElementById("btnSumar");
    var botonSumarYGuardar = document.getElementById("btnSumarYGuardar");
    botonSumar.addEventListener("click",Sumar);
    botonSumarYGuardar.addEventListener("click",SumarYGuardar);
}