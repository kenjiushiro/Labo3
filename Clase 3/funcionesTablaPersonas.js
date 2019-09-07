window.onload = SetFunctions;

function SetFunctions()
{
    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.addEventListener("click",Guardar);
}

function Guardar()
{
    var tabla = document.getElementById("tbodyPersonas");
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    
    // tabla.innerHTML = tabla.innerText + "<tr><td>" + nombre.value  +"</td><td>" + apellido.value + "</td><td> borrar </td></tr>";
    if(nombre.value == "")
    {
        nombre.className = "conError";
    }
    else
    {
        nombre.className = "sinError";
    }
    
    if(apellido.value == "")
    {
        apellido.className = "conError";
    }
    else
    {
        apellido.className = "sinError";
    }
    
    
    if (apellido.value != "" && nombre.value != "")
    {
        
        var rowNueva = tabla.insertRow();
        rowNueva.insertCell().appendChild(document.createTextNode(nombre.value));
        rowNueva.insertCell().appendChild(document.createTextNode(apellido.value));
        
        var botonBorrar = document.createElement("a");
        botonBorrar.text = "Borrar";
        botonBorrar.href = "";
        //Cuando se haga click se pasa el parametro event (para evitar el refresh por el href)
        //botonBorrar.onclick = Borrar;
        botonBorrar.addEventListener("click",Borrar);
        rowNueva.insertCell().appendChild(botonBorrar);

        nombre.value = "";
        apellido.value = "";
    }
    
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
    e.target.parentNode.parentNode.innerHTML = "";
}