var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.personaToJson = function () {
        };
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        Persona.prototype.getApellido = function () {
            return this.apellido;
        };
        Persona.prototype.getEdad = function () {
            return this.edad;
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
