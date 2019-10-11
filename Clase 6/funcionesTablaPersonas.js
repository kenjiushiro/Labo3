window.onload = SetFunctions;
var lineaNro = 0;
window.addEventListener("load",getPersonas);

function SetFunctions()
{
    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.addEventListener("click",Guardar);
    var botonMostrar = document.getElementById("mostrarFormBtn");   
    botonMostrar.addEventListener("click",Mostrar);
    var botonOcultar = document.getElementById("btnOcultar");
    btnOcultar.addEventListener("click",Ocultar);
    var formPersona = document.getElementById("formPersona");
    //getPersonas();
}

function getPersonas(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:3000/personas");
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200  )
            //console.log("Tenemos respuesta",xhttp.responseText);
            var listaPersonas = JSON.parse(xhttp.responseText);
            //console.log(listaPersonas);
            listaPersonas.forEach(function(persona) {
                GuardarPersona(persona);
              });
    }
    //GET
    /*
    xhttp.open("GET","http://localhost:3000/loginUsuario?usr=" + user + "&pass=" + password,true);
    xhttp.send();
    */

//     //POST
//     xhttp.open("POST","http://localhost:3000/loginUsuario");
//     //El setRequestHeder setea el tipo de valor que se le va a pasar y el formato
//     xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
//     xhttp.send("usr=" + user + "&pass=" + password);
}


function Mostrar()
{
    var formPersona = document.getElementById("formPersona");
    if (formPersona.hidden)
        formPersona.hidden = false;
    else
        formPersona.hidden = true;
}

function Ocultar()
{
    var formPersona = document.getElementById("formPersona");
    formPersona.hidden = true;
}

function AltaPersona(persona){
    var xhttp = new XMLHttpRequest();
    document.getElementById("loadingIcon").hidden = false;
    xhttp.open("POST","http://127.0.0.1:3000/nuevaPersona");
    //El setRequestHeder setea el tipo de valor que se le va a pasar y el formato
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(JSON.stringify(persona));
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200  )
        {
            document.getElementById("loadingIcon").hidden = true;
            console.log(JSON.parse(xhttp.responseText));
        }
    }
      
}

function AppendToRow(texto,classElemento){
    var tdNuevo = document.createElement("td");
    var textoNuevo = document.createTextNode(texto);
    if(classElemento!=undefined){
        tdNuevo.className = classElemento;
    }
    tdNuevo.appendChild(textoNuevo);
    return tdNuevo;

}


function GuardarPersona(persona){
    var tabla = document.getElementById("tbodyPersonas");
    var rowNueva = tabla.insertRow();
    //var persona = {};
    
    rowNueva.className = "filaPersona";

    for (var objetoJson in persona) {
        rowNueva.appendChild(AppendToRow(persona[objetoJson],objetoJson));
    }

    
    var botonBorrar = document.createElement("a");
    var botonModificar = document.createElement("a");
    var nuevaCelda = document.createElement("td");


    botonBorrar.text = "Borrar";
    botonBorrar.setAttribute("href","");
    botonBorrar.className = "btnBorMod";
    
    botonModificar.text = "Modificar";
    botonModificar.setAttribute("href","");
    botonModificar.className = "btnBorMod";

    nuevaCelda.appendChild(botonBorrar);
    nuevaCelda.appendChild(botonModificar);
    
    botonBorrar.addEventListener("click",Borrar);
    botonModificar.addEventListener("click",Modificar);
    rowNueva.insertCell().appendChild(nuevaCelda);

}


function Guardar(e)
{   
    e.preventDefault();
    var tabla = document.getElementById("tbodyPersonas");
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    var telefono = document.getElementById("txtTelefono");
    var fechaDeNacimiento = document.getElementById("txtFecha");
    
    console.log(JSON.stringify(persona))
    
    // tabla.innerHTML = tabla.innerText + "<tr><td>" + nombre.value  +"</td><td>" + apellido.value + "</td><td> borrar </td></tr>";
    if(nombre.value == "")
    nombre.className = "conError";
    else
    nombre.className = "sinError";
    
    if(apellido.value == "")
    apellido.className = "conError";
    else
    apellido.className = "sinError";
    
    if(telefono.value == "")
    telefono.className = "conError";
    else
    telefono.className = "sinError";
    
    if(fechaDeNacimiento.value == "")
    fechaDeNacimiento.className = "conError";
    else
    fechaDeNacimiento.className = "sinError";
    
    
    
    if (apellido.value != "" && nombre.value != "" && telefono.value != "" && fechaDeNacimiento.value != "")
    {
        var persona  = {"nombre":nombre.value,"apellido":apellido.value,"fecha":fechaDeNacimiento.value, "telefono":telefono.value}
        console.log(persona.nombre);
        GuardarPersona(persona);
        AltaPersona(persona);
    }
    
}

function Modificar(e){
    e.preventDefault();

    console.log(e.target.parentNode.innerText);

    Mostrar();

}

function ModificarFila()
{

}

function Borrar(e)
{   
    // Muestra el evento que pasa al hacerse el click
    // alert(e);
    //Deshabilita el evento por default que se lanza al clickear el boton <a> (el href refreshea la pagina, esto hace que lo ignore)
    e.preventDefault();
    //e.target me trae el elemento que produjo el evento (el tag a con href)
    //Una vez que se ignora puedo sacar el padre del tag a (td) con parentNode
    //Si lo repito consigo al padre del padre
    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.innerHTML = "";
}