namespace Personas{

    
    class Profesor extends Persona{
        cuil:string;
        constructor(nombre:string,apellido:string,cuil:string){
            super(nombre,apellido);
            this.cuil = cuil;
        }
        
        Saludar(){
            console.log("Hola profesor " + super.nombre);
        }

    }
}