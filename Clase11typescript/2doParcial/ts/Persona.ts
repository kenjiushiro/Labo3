namespace Personas{

    export abstract class Persona{
        nombre:string;
        apellido:string;
    
        constructor(nombre:string,apellido:string)
        {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        getNombre(){
            return this.nombre;
        }

        getApellido(){
            return this.apellido;
        }


        Saludar(){
            console.log("Hola Persona");
        }
        
    }
}