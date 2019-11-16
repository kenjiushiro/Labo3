var Animales;
(function (Animales) {
    var Gato = /** @class */ (function () {
        function Gato(name) {
            this.name = name;
        }
        Gato.prototype.makeSound = function () {
            console.log("miau" + this.name);
        };
        return Gato;
    }());
    Animales.Gato = Gato;
})(Animales || (Animales = {}));
