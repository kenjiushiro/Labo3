namespace Vehiculos{

    export abstract class Vehiculo{
        id:number;
        marca:string;
        modelo:string;
        precio:number;
    
        constructor(id:number,marca:string,modelo:string,precio:number)
        {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        getId(){
            return this.id;
        }
        getMarca(){
            return this.marca;
        }
        getModelo(){
            return this.modelo;
        }
        getPrecio(){
            return this.precio;
        }

        
    }
}