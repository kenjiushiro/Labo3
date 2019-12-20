namespace Personas{

    export abstract class Persona{
        Nombre:string;
        Apellido:string;
        Edad:number;
    
        constructor(nombre:string,apellido:string,edad:number)
        {
            this.Nombre =nombre;
            this.Apellido = apellido;
            this.Edad =edad;
        }

        personaToJson():string{
            return JSON.stringify(this);
        }

        getNombre(){
            return this.Nombre;
        }
        getApellido(){
            return this.Apellido;
        }
        getEdad(){
            return this.Edad;
        }

        
    }
}