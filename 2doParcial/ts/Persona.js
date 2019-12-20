var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.Nombre = nombre;
            this.Apellido = apellido;
            this.Edad = edad;
        }
        Persona.prototype.personaToJson = function () {
            return JSON.stringify(this);
        };
        Persona.prototype.getNombre = function () {
            return this.Nombre;
        };
        Persona.prototype.getApellido = function () {
            return this.Apellido;
        };
        Persona.prototype.getEdad = function () {
            return this.Edad;
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
