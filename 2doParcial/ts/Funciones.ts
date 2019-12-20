
namespace Personas
{
    $("document").ready(InicializarBotones);

    var lista:Array<Persona> = new Array<Persona>();
    var listaFiltrada:Array<Persona> = new Array<Persona>();
    var currentLegajo:number;
    var listaCampos:Array<string> = ["Nombre","Apellido","Edad","Legajo","Horario"];
    var listaCamposFiltrada:Array<string>;

    var formDisplayed:boolean;
    var formModificarDisplayed:boolean;
    var filtrosDisplayed:boolean;
    var indexAModificar:number;
    
    export function InicializarBotones()
    {
        $("#btnSubmit").click(agregarEmpleado);
        $("#formulario").hide();
        $("#formFiltros").hide();
        $("#formModificar").hide();

        formDisplayed = false;

        $("#btnMostrarForm").click(MostrarForm);
        $("#btnMostrarFiltros").click(MostrarFiltros);
        $("#btnCancelar").click(CancelarModificar);
        $("#btnModificar").click(ModificarItem);
        $("#btnFiltrar").click(filtrarPorHorario);
        $("#btnPromedioEdad").click(PromedioEdadPorHorario);

        listaCampos.forEach(campos => {
            $("#check" + campos).change(FiltrarListaCampos);
        });
        FiltrarListaCampos();

        MostrarEmpleados();
    }

    export function FiltrarListaCampos()
    {
        listaCamposFiltrada = listaCampos.filter(function (campo) {
        return $("#check" + campo).is(":checked");
        });
        MostrarEmpleados();
    }

    export function CancelarModificar()
    {
        $("#formModificar").hide();
    }

    export function agregarEmpleado()
    {
        let e:Empleado;
        let legajo:number = Number($("#txtLegajo").val());
        let nombre:string = String($("#txtNombre").val());
        let apellido:string = String($("#txtApellido").val());
        let edad:number = Number($("#txtEdad").val());

        let horario:string;
        let valSelectHorario:number;

        valSelectHorario = Number($("#selectHorario").val());

        if(valSelectHorario == 1)
            horario = "Mañana";
        else if(valSelectHorario == 2)
            horario = "Tarde";
        else
            horario = "Noche";

        console.log(nombre,apellido,edad,legajo,horario)
        e = new Empleado(nombre,apellido,edad,legajo,horario);
        

        $("#txtLegajo").val("");
        $("#txtNombre").val("");
        $("#txtApellido").val("");
        $("#txtEdad").val("");

        lista.push(e);
        CargarLista();
        console.log(lista);

    }
    export function ModificarItem()
    {
        let e:Empleado;
        let legajo:number = Number($("#txtLegajoModificar").val());
        let nombre:string = String($("#txtNombreModificar").val());
        let apellido:string = String($("#txtApellidoModificar").val());
        let edad:number = Number($("#txtEdadModificar").val());

        let horario:string;
        let valSelectHorario:number;

        valSelectHorario = Number($("#selectHorarioModificar").val());

        if(valSelectHorario == 1)
            horario = "Mañana";
        else if(valSelectHorario == 2)
            horario = "Tarde";
        else
            horario = "Noche";

        console.log(nombre,apellido,edad,legajo,horario)
        e = new Empleado(nombre,apellido,edad,legajo,horario);
        

        $("#txtLegajoModificar").val("");
        $("#txtNombreModificar").val("");
        $("#txtApellidoModificar").val("");
        $("#txtEdadModificar").val("");

        
        lista[indexAModificar]= e;
        CargarLista();
        CancelarModificar();
    }

    export function MostrarFiltros()
    {
        if(!filtrosDisplayed)
        {
            filtrosDisplayed = true;
            $("#formFiltros").show();
        }
        else
        {
            filtrosDisplayed = false;
            $("#formFiltros").hide();
        }
    }

    export function MostrarForm()
    {
        if(!formDisplayed)
        {
            formDisplayed = true;
            $("#formulario").show();
        }
        else
        {
            formDisplayed = false;
            $("#formulario").hide();
        }
    }

  

    
    export function MostrarEmpleados()
    {   
        CargarLista();
        CargarListaFiltrada();
    }

    export function filtrarPorHorario()
    {

        let valSelectHorario:number;
        let horario:string;

        valSelectHorario = Number($("#selectFiltroHorario").val());

        if(valSelectHorario == 1)
            horario = "Mañana";
        else if(valSelectHorario == 2)
            horario = "Tarde";
        else
            horario = "Noche";


        listaFiltrada = lista.filter(function (empleado) {
            if(empleado instanceof Empleado)
            {
                return empleado.getHorario() == horario;
            }
          });
        CargarListaFiltrada();
    }

    export function PromedioEdadPorHorario()
    {
        let cantidad:number;
        let promedio:number;
        let filtro;

        if ($("#selectHorarioPromedio").val() == 1)
            filtro = "Mañana";
        else if($("#selectHorarioPromedio").val() == 2)
            filtro = "Tarde";
        else
            filtro = "Noche";

        cantidad =0;

        let totalEdad:number = lista.reduce(function (accumulator, empleado) {
            if(empleado instanceof Empleado && empleado.getHorario() == filtro)
            {
                cantidad++;
                return accumulator + empleado.getEdad();
            }
            else
                return accumulator;
        }, 0);

        promedio = totalEdad/cantidad;

        $("#outputPromedio").val(promedio);
    }


    export function CargarListaFiltrada()
    {
        $("#divListaFiltrada").html("");
        let tablaEmpleados =document.createElement("table");
        tablaEmpleados.setAttribute("class","table table-stripped");
        $("#divListaFiltrada").append(tablaEmpleados);
        let headerTabla = document.createElement("thead");
        let bodyTabla = document.createElement("tbody");
        let tableRow = document.createElement("tr");

        let td ;

        listaCamposFiltrada.forEach(campo => {
            td =  document.createElement("td");
            td.innerText = campo;
            tableRow.appendChild(td);
        });

        
        tablaEmpleados.appendChild(headerTabla);
        tablaEmpleados.appendChild(bodyTabla);
        headerTabla.appendChild(tableRow);
        
        listaFiltrada.forEach(function (empleado) {

            tableRow = document.createElement("tr");
            bodyTabla.appendChild(tableRow);
            if (empleado instanceof Empleado)
            {
                listaCamposFiltrada.forEach(campo => {
                    td = document.createElement("td");
                    td.innerText = JSON.parse(empleado.empleadoToJson())[campo];
                    tableRow.appendChild(td);
                });

            }
        }); 
    }


    export function CargarLista()
    {
        $("#divLista").html("");
        let tablaEmpleados =document.createElement("table");
        tablaEmpleados.setAttribute("class","table table-stripped");
        $("#divLista").append(tablaEmpleados);
        let headerTabla = document.createElement("thead");
        let bodyTabla = document.createElement("tbody");
        let tableRow = document.createElement("tr");
        let b:Element;
        let m:Element;
        let td;

     

        listaCamposFiltrada.forEach(campo => {
            td =  document.createElement("td");
            td.innerText = campo;
            tableRow.appendChild(td);
        });


        td = document.createElement("td");
        td.innerText = "Acciones";
        tableRow.appendChild(td);

        tablaEmpleados.appendChild(headerTabla);
        tablaEmpleados.appendChild(bodyTabla);
        headerTabla.appendChild(tableRow);
        
        lista.forEach(function (empleado) {

            if (empleado instanceof Empleado){
                tableRow = document.createElement("tr");
                bodyTabla.appendChild(tableRow);

                listaCamposFiltrada.forEach(campo => {
                    td = document.createElement("td");
                    td.innerText = JSON.parse(empleado.empleadoToJson())[campo];
                    tableRow.appendChild(td);
                });

                td = document.createElement("td");
                td.setAttribute("class","column");
                b = document.createElement("a");
                b.setAttribute("id",String(empleado.getLegajo()));
                b.setAttribute("class","btn");
                b.innerHTML = "Borrar";
                b.addEventListener("click",eliminarEmpleado);
                
                m = document.createElement("a");
                m.setAttribute("id",String(empleado.getLegajo()));
                m.setAttribute("class","btn");
                m.innerHTML = "Modificar";
                m.addEventListener("click",modificarEmpleado);
                
                td.appendChild(b);
                td.appendChild(m);

                tableRow.appendChild(td);
            }
        }); 
    }

    export function modificarEmpleado(e)
    {   
        let auxEmpleado:Empleado = new Empleado("asd","asd",2,2,"asd");
        let empleadoAModificar:Persona = lista.reduce(function(retorno:Empleado,empleado){
            if (empleado instanceof Empleado)
            {
                if (empleado.getLegajo() == e.target.id)
                {
                    indexAModificar = lista.indexOf(empleado)
                    return empleado;
                }
            }
            return retorno;
        },auxEmpleado);

        if(empleadoAModificar instanceof Empleado)
        {
            if(empleadoAModificar.getLegajo() == e.target.id)
            {
                $("#txtLegajoModificar").val(empleadoAModificar.getLegajo());
                $("#txtNombreModificar").val(empleadoAModificar.getNombre());
                $("#txtApellidoModificar").val(empleadoAModificar.getApellido());
                $("#txtEdadModificar").val(empleadoAModificar.getEdad());
                
                if(empleadoAModificar.getHorario() == "Mañana")
                    $("#selectHorarioModificar").val(1);
                else if(empleadoAModificar.getHorario() == "Tarde")
                    $("#selectHorarioModificar").val(2);
                else
                    $("#selectHorarioModificar").val(3);

                filtrosDisplayed = false;
                $("#formFiltros").hide();
                
                formDisplayed = false;
                $("#formulario").hide();

                $("#formModificar").show();
            }
        }
        MostrarEmpleados();
    }

    export function eliminarEmpleado(e)
    {   
         lista = lista.filter(function(empleado){
            if (empleado instanceof Empleado)
            {
                return empleado.getLegajo() != e.target.id;
            }
        });
        
        listaFiltrada = listaFiltrada.filter(function(empleado){
            if (empleado instanceof Empleado)
            {
                return empleado.getLegajo() != e.target.id;
            }
        });

        MostrarEmpleados();
    }

    export function Calcular()
    {
        let sumatoria:number  = lista.reduce(
        function(total,item){
            return total++;
        },0);

        console.log(sumatoria/lista.length);
            
    }

    
}
