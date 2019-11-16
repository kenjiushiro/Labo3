namespace Animales
{
    export function hacerRuidosDeAnimales()
    {
        
        var perrito:Dog = new Dog("Dogui");
        var gatito:Gato = new Gato("Mishi");
        perrito.makeSound();
        gatito.makeSound();
        
        var lista:Array<Animal> = new Array<Animal>();
        lista.push(perrito);
        lista.push(gatito);
        
        lista.forEach(function(animal){
            animal.makeSound();
        });
        
    }
    
    //document.getElementById("botonRuidos").addEventListener("click",hacerRuidosDeAnimales);
}