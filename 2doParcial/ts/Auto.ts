namespace Vehiculos{

    
    export class Auto extends Vehiculo{
        cantidadPuertas:number;
    
        constructor(id:number,marca:string,modelo:string,precio:number,cantidadPuertas:number)
        {
            super(id,marca,modelo,precio);
            this.cantidadPuertas = cantidadPuertas;
        }
        
        getCantidadPuertas(){
            return this.cantidadPuertas;
        }
    }
}