namespace Personas{

    export abstract class Persona{
        nombre:string;
        apellido:string;
    
        constructor(nombre:string,apellido:string)
        {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        
        Saludar(){
            console.log("Hola Persona");
        }
        
    }
}