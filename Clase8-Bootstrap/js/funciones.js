// this se refiere al scope global
// var asd = "asd";
// this.asd retorna "asd"

var person1 = 
{
    nombre: "Carlos",
    apellido: "Lopez"
}

var printName = function()
{
    console.log(this.nombre +  ' ' + this.apellido);
}

printName(person1);//nombre no retorna nada oprque esta dentro de person1
//con la funcion apply cambio el this por el entorno que le paso
printName.apply(person1);

// $(document).ready(function()
// {
//     alert("ASD");
// });

$("#divRojo").fadeIn(3000);

//Peticiones con ajax
$.ajax(
    {
        url: "127.qwdq0.0.1qwdqwd:8080/laldqwdqwda",//Url
        type: "POST",//Tipo de peticion
        data://Objeto a pasar
        {
            nombre:"Jorgito",
            apellido:"Perez",
            objeto:
            {
                var1: "valor1",
                var2:"var2"
            },
            fecha:"11/11/2011"
        },
        success:function(result)//Funcion a ejecutar cuando recibo respuesta
        {
            console.log(result);
        },
        error:function(error)//Funcion a ejecutar cuando explota el sv
        {
            console.log(error);
        },
        contentType:'application/json',
        statusCode:
        {
            404:function()
            {
                alert("asdasd");
            }
        }
    }

)