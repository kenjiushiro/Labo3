window.onload = SetFunctions;
var lineaNro = 0;

function SetFunctions()
{
    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.addEventListener("click",Guardar);
    var botonMostrar = document.getElementById("mostrarFormBtn");   
    botonMostrar.addEventListener("click",Mostrar);
    var botonOcultar = document.getElementById("btnOcultar");
    btnOcultar.addEventListener("click",Ocultar);
    var formPersona = document.getElementById("formPersona");
    
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



function Guardar(e)
{   
    var tabla = document.getElementById("tbodyPersonas");
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    
    // tabla.innerHTML = tabla.innerText + "<tr><td>" + nombre.value  +"</td><td>" + apellido.value + "</td><td> borrar </td></tr>";
    if(nombre.value == "")
        nombre.className = "conError";
    else
        nombre.className = "sinError";
    
    if(apellido.value == "")
        apellido.className = "conError";
    else
        apellido.className = "sinError";
    
    
    if (apellido.value != "" && nombre.value != "")
    {
        var rowNueva = tabla.insertRow();
        rowNueva.className = "filaPersona";
        // var nombre = document.createTextNode(nombre.value);
        // var apellido = document.createTextNode(apellido.value);
        var nombreTd = document.createElement("td"); 
        var apellidoTd = document.createElement("td");
        
        nombreTd.innerText = nombre.value;
        nombreTd.className = "nombre";
        nombreTd.id = "nombre" + lineaNro;
        // nombreTd.setAttribute("name","nombre");

        apellidoTd.innerText = apellido.value;
        apellidoTd.className = "apellido";
        apellidoTd.id = "apellido" + lineaNro;
        // apellidoTd.setAttribute("name","apellido");

        rowNueva.appendChild(nombreTd);
        rowNueva.appendChild(apellidoTd);
        
        var botonBorrar = document.createElement("a");
        var botonModificar = document.createElement("a");
        var nuevaCelda = document.createElement("td");


        botonBorrar.text = "Borrar";
        botonBorrar.href = "";
        botonBorrar.className = "btnBorMod";
        
        botonModificar.text = "Modificar";
        botonModificar.href = "";
        botonModificar.className = "btnBorMod";

        nuevaCelda.appendChild(botonBorrar);
        nuevaCelda.appendChild(botonModificar);
        
        //Cuando se haga click se pasa el parametro event (para evitar el refresh por el href)
        //botonBorrar.onclick = Borrar;
        botonBorrar.addEventListener("click",Borrar);
        botonModificar.addEventListener("click",Modificar);
        rowNueva.insertCell().appendChild(nuevaCelda);

        nombre.value = "";
        apellido.value = "";
        lineaNro++;
        var formPersona = document.getElementById("formPersona");
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