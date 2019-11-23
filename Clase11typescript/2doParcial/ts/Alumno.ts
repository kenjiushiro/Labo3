namespace Personas
{
    export class Alumno extends Persona{
        legajo:string;
        constructor(nombre:string,apellido:string,legajo:string) {
            super(nombre,apellido);
            this.legajo = legajo;
        }
        
        Saludar(){
            return "Hola alumno " + super.getNombre() + " " + super.getApellido() + " " + this.legajo;
        }
        
    }

    
}