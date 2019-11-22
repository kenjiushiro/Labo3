
namespace Personas{

    var lista:Array<Persona> = new Array<Persona>();


export function agregar()
{
    let nombre = String($("#txtNombre").val());
    let apellido = String($("#txtApellido").val());
    let legajo = String($("#txtLegajo").val());

    let wachin:Persona = new Alumno(nombre,apellido,legajo);
    lista.push(wachin);

    let nTd = document.createTextNode(wachin.getNombre);

}
    
    
    
    $("#botonAlumno").on("click",wachin.Saludar);
}

export function Cosa()
{

}