namespace Personas{

    
    export class Profesor extends Persona{
        cuil:string;
        constructor(nombre:string,apellido:string,cuil:string){
            super(nombre,apellido);
            this.cuil = cuil;
        }
        
        Saludar(){
            return "Hola profesor " + super.getNombre() + " " + super.getApellido() + " " + this.cuil;
        }

    }
}