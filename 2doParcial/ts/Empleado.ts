namespace Personas
{
    export class Empleado extends Persona{

        private legajo:number;
        private horario:string;
    
        constructor(nombre:string,apellido:string,edad:number,legajo:number,horario:string)
        {
            super(nombre,apellido,edad);
            this.legajo = legajo;
            this.horario = horario;
        }

        getLegajo()
        {
            return this.legajo;
        }

        getHorario()
        {
            return this.horario;
        }
        
    }

    
}