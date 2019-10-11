window.addEventListener("load",SetFunctions);
window.addEventListener("load",getPersonas);
var lineaVieja;

function SetFunctions(){
    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.addEventListener("click",Guardar);
    var botonMostrar = document.getElementById("mostrarFormBtn");   
    botonMostrar.addEventListener("click",Mostrar);
    var botonOcultar = document.getElementById("btnOcultar");
    btnOcultar.addEventListener("click",Ocultar);
    var formPersona = document.getElementById("formPersona");

    //getPersonas();
}

function Mostrar()
{
    var form = document.getElementById("formPP");
    if (form.hidden)
        form.hidden = false;
    else
        form.hidden = true;

    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.removeEventListener("click",Modificar);
    botonGuardar.value = "Guardar";
    botonGuardar.addEventListener("click",Guardar);

}

function Ocultar()
{
    var form = document.getElementById("formPP");
    form.hidden = true;
}

function Post(e){
    console.log("Submit clickeado");
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    var user = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;

    var loadingIcon = document.getElementById("loading-icon");

    loadingIcon.hidden= false;
    loadingIcon.style.visibility = 'visible';
    //POST
    xhttp.open("POST","http://localhost:1337/login");

    //El setRequestHeder setea el tipo de valor que se le va a pasar y el formato
    //xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    var loginData  = {"email":user,"password":password};
    xhttp.send(JSON.stringify(loginData));
    
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200){

            //console.log("Tenemos respuesta",xhttp.responseText);
            var respuesta =JSON.parse(xhttp.responseText)
            loadingIcon.style.visibility = 'hidden';
            loadingIcon.hidden=true;
            console.log(respuesta.autenticado=="si");

            if(respuesta.autenticado == "si"){
                window.location.href  = './index.html';
            }
        }
    }
}


// Agregar row a tabla 
function GuardarItem(item){
    var tabla = document.getElementById("tbodyTabla");
    var rowNueva = document.createElement("tr");
    //var persona = {};
    
    rowNueva.className = "filaPersona";

    for (var objetoJson in item) {
        rowNueva.appendChild(AppendToRow(item[objetoJson],objetoJson));
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
    return rowNueva;

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


//Validacion de parametros y creacion de objeto json
function Guardar(e)
{   
    e.preventDefault();
    var tabla = document.getElementById("tbodyTabla");

    var item  = LeerObjeto();
    if (item != ""){
        console.log(item);
        tabla.appendChild(GuardarItem(item));
        AltaItem(item);
    }

    
}

function Validar(elemento){
    if(elemento.value == "")
        elemento.className = "conError";
    else    
        elemento.className = "sinError";
}


function Modificar(e){
    e.preventDefault();
    
    lineaVieja = e.target.parentNode.parentNode.parentNode;
    var lineaNueva;
    Mostrar();
    
    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.removeEventListener("click",Guardar);
    botonGuardar.addEventListener("click",ModificarFila);
    botonGuardar.value = "Modificar";
    

   

}

function ModificarFila(e)
{
    var item  = LeerObjeto();
    if (item != ""){
        console.log(item);
        lineaVieja.replaceWith(GuardarItem(item));
        AltaItem(item);
    }
}

function LeerObjeto(){
    var tabla = document.getElementById("tbodyTabla");
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    var telefono = document.getElementById("txtTelefono");
    var fechaDeNacimiento = document.getElementById("txtFecha");
    
    Validar(nombre);
    Validar(apellido);
    Validar(telefono);
    Validar(fechaDeNacimiento);
    
    if (apellido.value != "" && nombre.value != "" && telefono.value != "" && fechaDeNacimiento.value != "")
    {
        var persona  = {"nombre":nombre.value,"apellido":apellido.value,"fecha":fechaDeNacimiento.value, "telefono":telefono.value}
        return persona;
    }
    
    return "";


}


function Borrar(e)
{   
    e.preventDefault();
    var linea = e.target.parentNode.parentNode.parentNode;
    linea.remove();
}






















//Post con json
function AltaItem(itemJson){
    var xhttp = new XMLHttpRequest();

    document.getElementById("loadingIcon").hidden = false;
    xhttp.open("POST","http://127.0.0.1:3000/nuevaPersona");
    //El setRequestHeder setea el tipo de valor que se le va a pasar y el formato
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhttp.send(JSON.stringify(itemJson));
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200  )
        {
            document.getElementById("loadingIcon").hidden = true;
            console.log(JSON.parse(xhttp.responseText));
        }
    }
      
}

//GET con json
function getPersonas(){
    var tabla = document.getElementById("tbodyTabla");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:3000/personas");
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200  )
            //console.log("Tenemos respuesta",xhttp.responseText);
            var listaItems = JSON.parse(xhttp.responseText);
            //console.log(listaPersonas);
            listaItems.forEach(function(item) {
                tabla.appendChild(GuardarItem(item));
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
