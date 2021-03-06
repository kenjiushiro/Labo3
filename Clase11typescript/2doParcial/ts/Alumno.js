var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personas;
(function (Personas) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(nombre, apellido, legajo) {
            var _this = _super.call(this, nombre, apellido) || this;
            _this.legajo = legajo;
            return _this;
        }
        Alumno.prototype.Saludar = function () {
            return "Hola alumno " + _super.prototype.getNombre.call(this) + " " + _super.prototype.getApellido.call(this) + " " + this.legajo;
        };
        return Alumno;
    }(Personas.Persona));
    Personas.Alumno = Alumno;
})(Personas || (Personas = {}));
