namespace Personas
{
    export class Alumno extends Persona{
        legajo:string;
        constructor(nombre:string,apellido:string,legajo:string) {
            super(nombre,apellido);
            this.legajo = legajo;
        }
        
        Saludar(){
            console.log("Hola alumno " + super.nombre);
        }
        
    }

    export function Modificar()
    {
        console.log("asd");
    }
}