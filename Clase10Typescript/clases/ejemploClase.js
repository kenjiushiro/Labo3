var Animales;
(function (Animales) {
    function hacerRuidosDeAnimales() {
        var perrito = new Animales.Dog("Dogui");
        var gatito = new Animales.Gato("Mishi");
        perrito.makeSound();
        gatito.makeSound();
        var lista = new Array();
        lista.push(perrito);
        lista.push(gatito);
        lista.forEach(function (animal) {
            animal.makeSound();
        });
    }
    Animales.hacerRuidosDeAnimales = hacerRuidosDeAnimales;
    //document.getElementById("botonRuidos").addEventListener("click",hacerRuidosDeAnimales);
})(Animales || (Animales = {}));
