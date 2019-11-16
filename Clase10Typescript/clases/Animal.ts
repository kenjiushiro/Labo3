namespace Animales
{

    //El export es como un public, para que se pueda ver desde afuera
    //Si es clase uso extends
    //export abstract class Animal
    //Si es interface uso implements
    export interface Animal
    {
        name:string;
        makeSound();
    }
    
}