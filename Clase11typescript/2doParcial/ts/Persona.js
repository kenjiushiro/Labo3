var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        Persona.prototype.Saludar = function () {
            console.log("Hola Persona");
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
