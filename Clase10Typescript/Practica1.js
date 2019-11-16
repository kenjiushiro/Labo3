// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerzas;
(function (Fuerzas) {
    Fuerzas[Fuerzas["fuerzaFlash"] = 5] = "fuerzaFlash";
    Fuerzas[Fuerzas["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    Fuerzas[Fuerzas["fuerzaBatman"] = 1] = "fuerzaBatman";
    Fuerzas[Fuerzas["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
})(Fuerzas || (Fuerzas = {}));
// Retorno de funciones
var activar_batiseñal = function () {
    return "activada";
};
var pedir_ayuda = function () {
    console.log("Auxilio!!!");
};
// Aserciones de Tipo
var largo_tipo = function () {
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
};
