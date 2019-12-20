namespace Personas
{
    $("document").ready(InicializarBotones);
    var lista:Array<Persona> = new Array<Persona>();
    var listaFiltrada:Array<Persona> = new Array<Persona>();
    var currentLegajo:number;

    var formDisplayed:boolean;
    var filtrosDisplayed:boolean;


    
    export function InicializarBotones()
    {
        $("#btnSubmit").click(agregarEmpleado);
        $("#formulario").hide();
        $("#formFiltros").hide();
        formDisplayed = false;
        $("#btnMostrarForm").click(MostrarForm);
        $("#btnMostrarFiltros").click(MostrarFiltros);
        MostrarEmpleados();
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

      export function Filtrar()
    {





    }



    
    export function MostrarEmpleados()
    {   
        CargarLista();
        CargarListaFiltrada();
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

        let td = document.createElement("td");
        td.innerText = "Nombre";
        tableRow.appendChild(td);

        td = document.createElement("td");
        td.innerText = "Apellido";
        tableRow.appendChild(td);

        td = document.createElement("td");
        td.innerText = "Edad";
        tableRow.appendChild(td);

        td = document.createElement("td");
        td.innerText = "Legajo";
        tableRow.appendChild(td);

        td = document.createElement("td");
        td.innerText = "Horario";
        tableRow.appendChild(td);

        td = document.createElement("td");
        td.innerText = "Acciones";
        tableRow.appendChild(td);

        tablaEmpleados.appendChild(headerTabla);
        tablaEmpleados.appendChild(bodyTabla);
        headerTabla.appendChild(tableRow);
        
        lista.forEach(function (empleado) {

            tableRow = document.createElement("tr");
            bodyTabla.appendChild(tableRow);

            td = document.createElement("td");
            td.innerText = String(empleado.getNombre());
            tableRow.appendChild(td);

            td = document.createElement("td");
            td.innerText = String(empleado.getApellido());
            tableRow.appendChild(td);

            td = document.createElement("td");
            td.innerText = String(empleado.getEdad());
            tableRow.appendChild(td);
            if (empleado instanceof Empleado)
            {
                
                td = document.createElement("td");
                td.innerText = String(empleado.getLegajo());
                tableRow.appendChild(td);
                
                td = document.createElement("td");
                td.innerText = String(empleado.getHorario());
                tableRow.appendChild(td);

                
                td = document.createElement("td");
                td.setAttribute("class","column");
                b = document.createElement("a");
                b.setAttribute("id",String(empleado.getLegajo()));
                b.innerHTML = "Borrar";
                b.addEventListener("click",Borrar);
                
                m = document.createElement("a");
                m.setAttribute("id",String(empleado.getLegajo()));
                m.innerHTML = "Modificar";
                m.addEventListener("click",Modificar);
                
                td.appendChild(b);
                td.appendChild(m);

                tableRow.appendChild(td);
            }
        }); 
    }

    export function Modificar(e)
    {   
        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
        let listaNueva = [];
        
        lista.forEach( (empleado) => 
        {
            if (empleado instanceof Empleado)
            {   
                console.log(empleado.getLegajo() + " = " + e.target.id);
                console.log(empleado.getLegajo() == e.target.id);
                if(empleado.getLegajo() == e.target.id)
                {
                    $("#txtLegajo").val(empleado.getLegajo());
                    $("#txtNombre").val(empleado.getNombre());
                    $("#txtApellido").val(empleado.getApellido());
                    $("#txtEdad").val(empleado.getEdad());

                    if(empleado.getHorario() == "Mañana")
                        $("#selectHorario").val(1);
                    else if(empleado.getHorario() == "Tarde")
                        $("#selectHorario").val(2);
                    else
                        $("#selectHorario").val(3);
                }
                else
                {
                    listaNueva.push(empleado);
                }
            }

        });

        lista = listaNueva;

        CargarLista();
    }

    export function Borrar(e)
    {   
        let listaNueva = [];
        lista.forEach( (empleado) => 
        {
            if (empleado instanceof Empleado)
            {   
                console.log(empleado.getLegajo() + " = " + e.target.id);
                console.log(empleado.getLegajo() == e.target.id);
                if(empleado.getLegajo() == e.target.id)
                {

                }
                else
                {
                    listaNueva.push(empleado);
                }
            }

        });
        lista = listaNueva;
        CargarLista();
    }

    export function CargarListaFiltrada()
    {
        $("#divListaFiltrada").html("");
        let tablaEmpleadosFiltrada =document.createElement("table");
        tablaEmpleadosFiltrada.setAttribute("class","table table-stripped");
        $("#divListaFiltrada").append(tablaEmpleadosFiltrada);
        let headerTabla = document.createElement("thead");
        let bodyTabla = document.createElement("tbody");
        let tableRow = document.createElement("tr");
        let td = document.createElement("td");

        td.innerText = "Nombre";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Apellido";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Edad";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Legajo";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Horario";
        tableRow.appendChild(td);

        tablaEmpleadosFiltrada.appendChild(headerTabla);
        tablaEmpleadosFiltrada.appendChild(bodyTabla);
        headerTabla.appendChild(tableRow);
        
        listaFiltrada.forEach(function (empleado) {

            tableRow = document.createElement("tr");
            bodyTabla.appendChild(tableRow);

            td = document.createElement("td");
            td.innerText = String(empleado.getNombre());
            tableRow.appendChild(td);

            td = document.createElement("td");
            td.innerText = String(empleado.getApellido());
            tableRow.appendChild(td);

            td = document.createElement("td");
            td.innerText = String(empleado.getEdad());
            tableRow.appendChild(td);
            if (empleado instanceof Empleado)
            {
                td = document.createElement("td");
                td.innerText = String(empleado.getLegajo());
                tableRow.appendChild(td);
                
                td = document.createElement("td");
                td.innerText = String(empleado.getHorario());
                tableRow.appendChild(td);
            }

          }); 
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
