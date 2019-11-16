class auto extends Vehiculo
{
    cantVentanas:number;
    constructor(ruedas:number,ventanas:number)
    {
        //Super simil base
        super(ruedas);
        this.cantVentanas = ventanas;
    }
}