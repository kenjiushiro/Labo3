namespace Animales
{

    export class Dog implements Animal{
        public name;
    constructor(name:string)
    {
        this.name = name;
    }
    makeSound()
    {
        console.log("guau" + this.name);
    }
}
}