// Funciones Básicas
function sumar(a:number, b:number ):number{
  return a + b;
}

var contar = function( heroes:string[] ){
  return heroes.length;
}
var superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

contar(superHeroes);

//Parametros por defecto
function llamarBatman(llamar?:boolean){
  if( llamar != undefined)
  {
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ){
  return personas.join(", ");
}


// Tipo funcion
var noHaceNada = function(numero, texto, booleano, arreglo )
{

}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco = function(noHaceNada)
{

};
