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
    var Profesor = /** @class */ (function (_super) {
        __extends(Profesor, _super);
        function Profesor(nombre, apellido, cuil) {
            var _this = _super.call(this, nombre, apellido) || this;
            _this.cuil = cuil;
            return _this;
        }
        Profesor.prototype.Saludar = function () {
            console.log("Hola profesor " + _super.prototype.nombre);
        };
        return Profesor;
    }(Personas.Persona));
})(Personas || (Personas = {}));
