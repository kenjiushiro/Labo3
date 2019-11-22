"use strict";
exports.__esModule = true;
var Personas;
(function (Personas) {
    var lista = new Array();
    function agregar() {
        var nombre = String($("#txtNombre").val());
        var apellido = String($("#txtApellido").val());
        var legajo = String($("#txtLegajo").val());
        var wachin = new Alumno(nombre, apellido, legajo);
        lista.push(wachin);
        var nTd = document.createTextNode(wachin.getNombre);
    }
    Personas.agregar = agregar;
    $("#botonAlumno").on("click", wachin.Saludar);
})(Personas || (Personas = {}));
function Cosa() {
}
exports.Cosa = Cosa;
