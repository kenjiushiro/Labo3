namespace Personas{
    $("document").ready(Cosa);
    
    console.log("asd");
    var lista:Array<Persona> = new Array<Persona>();
    
    
    export function agregar()
    {
        let nombre = String($("#txtNombre").val());
        let apellido = String($("#txtApellido").val());
        let identificador = String($("#txtId").val());
        let wachin:Persona;
        
        if($("#selectTipo").val() == 1){
            wachin = new Profesor(nombre,apellido,identificador);
        }
        else{
            wachin = new Alumno(nombre,apellido,identificador);
        }
        if wachin isinstanceof para saber de quetipo es
        alert(wachin.Saludar());
        lista.push(wachin);
        
        let nombreTd = document.createTextNode(wachin.getNombre());
        let apellidoTd = document.createTextNode(wachin.getApellido());
        $("#botonAlumno").on("click",wachin.Saludar);
    }
    
    export function Modificar()
    {
        console.log("asd");
    }
    
    export function CambiarTipoIdentificador()
    {
        if($("#selectTipo").val() == 1){
            $("#lblId").text("CUIL");
        }   
        else
        {
            $("#lblId").text("Legajo");
        }
    }
    
    
    export function Cosa()
    {
        $("#selectTipo").change(CambiarTipoIdentificador);
        $("#btnSubmit").click(agregar);
    }
}
