namespace Animales
{
    
    export class Gato implements Animal{
        public name;
        constructor(name:string)
        {
            this.name = name;
        }
        makeSound()
        {
            console.log("miau" + this.name);
        }
        
    }
}