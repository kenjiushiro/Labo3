namespace Personas
{
    export class Empleado extends Persona{

        private Legajo:number;
        private Horario:string;
    
        constructor(nombre:string,apellido:string,edad:number,legajo:number,horario:string)
        {
            super(nombre,apellido,edad);
            this.Legajo = legajo;
            this.Horario = horario;
        }

        empleadoToJson():string{
            return JSON.stringify(this);
        }

        getLegajo()
        {
            return this.Legajo;
        }

        getHorario()
        {
            return this.Horario;
        }
        
    }

    
}