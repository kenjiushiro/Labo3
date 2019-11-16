var Animales;
(function (Animales) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.makeSound = function () {
            console.log("guau" + this.name);
        };
        return Dog;
    }());
    Animales.Dog = Dog;
})(Animales || (Animales = {}));
