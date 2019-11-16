// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string,string] = [batman,superman];
var villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerzas
{

  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  fuerzaBatman = 1,
  fuerzaAcuaman = 0
}

// Retorno de funciones
var activar_batiseñal = function():string{
  return "activada";
}

var pedir_ayuda = function(){
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let largo_tipo = function()
{
  var poder = "100";
  var largoDelPoder = poder.length;
  console.log( largoDelPoder );
}
