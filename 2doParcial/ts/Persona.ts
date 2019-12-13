namespace Personas{

    export abstract class Persona{
        nombre:string;
        apellido:string;
        edad:number;
    
        constructor(nombre:string,apellido:string,edad:number)
        {
            this.nombre =nombre;
            this.apellido = apellido;
            this.edad =edad;
        }

        personaToJson(){

        }

        getNombre(){
            return this.nombre;
        }
        getApellido(){
            return this.apellido;
        }
        getEdad(){
            return this.edad;
        }

        
    }
}