var Personas;
(function (Personas) {
    $("document").ready(InicializarBotones);
    var lista = new Array();
    var listaFiltrada = new Array();
    var currentLegajo;
    var formDisplayed;
    var filtrosDisplayed;
    function InicializarBotones() {
        $("#btnSubmit").click(agregarEmpleado);
        $("#formulario").hide();
        $("#formFiltros").hide();
        formDisplayed = false;
        $("#btnMostrarForm").click(MostrarForm);
        $("#btnMostrarFiltros").click(MostrarFiltros);
        MostrarEmpleados();
    }
    Personas.InicializarBotones = InicializarBotones;
    function agregarEmpleado() {
        var e;
        var legajo = Number($("#txtLegajo").val());
        var nombre = String($("#txtNombre").val());
        var apellido = String($("#txtApellido").val());
        var edad = Number($("#txtEdad").val());
        var horario;
        var valSelectHorario;
        valSelectHorario = Number($("#selectHorario").val());
        if (valSelectHorario == 1)
            horario = "Mañana";
        else if (valSelectHorario == 2)
            horario = "Tarde";
        else
            horario = "Noche";
        console.log(nombre, apellido, edad, legajo, horario);
        e = new Personas.Empleado(nombre, apellido, edad, legajo, horario);
        $("#txtLegajo").val("");
        $("#txtNombre").val("");
        $("#txtApellido").val("");
        $("#txtEdad").val("");
        lista.push(e);
        CargarLista();
        console.log(lista);
    }
    Personas.agregarEmpleado = agregarEmpleado;
    function MostrarFiltros() {
        if (!filtrosDisplayed) {
            filtrosDisplayed = true;
            $("#formFiltros").show();
        }
        else {
            filtrosDisplayed = false;
            $("#formFiltros").hide();
        }
    }
    Personas.MostrarFiltros = MostrarFiltros;
    function MostrarForm() {
        if (!formDisplayed) {
            formDisplayed = true;
            $("#formulario").show();
        }
        else {
            formDisplayed = false;
            $("#formulario").hide();
        }
    }
    Personas.MostrarForm = MostrarForm;
    function Filtrar() {
    }
    Personas.Filtrar = Filtrar;
    function MostrarEmpleados() {
        CargarLista();
        CargarListaFiltrada();
    }
    Personas.MostrarEmpleados = MostrarEmpleados;
    function CargarLista() {
        $("#divLista").html("");
        var tablaEmpleados = document.createElement("table");
        tablaEmpleados.setAttribute("class", "table table-stripped");
        $("#divLista").append(tablaEmpleados);
        var headerTabla = document.createElement("thead");
        var bodyTabla = document.createElement("tbody");
        var tableRow = document.createElement("tr");
        var b;
        var m;
        var td = document.createElement("td");
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
            if (empleado instanceof Personas.Empleado) {
                td = document.createElement("td");
                td.innerText = String(empleado.getLegajo());
                tableRow.appendChild(td);
                td = document.createElement("td");
                td.innerText = String(empleado.getHorario());
                tableRow.appendChild(td);
                td = document.createElement("td");
                td.setAttribute("class", "column");
                b = document.createElement("a");
                b.setAttribute("id", String(empleado.getLegajo()));
                b.innerHTML = "Borrar";
                b.addEventListener("click", Borrar);
                m = document.createElement("a");
                m.setAttribute("id", String(empleado.getLegajo()));
                m.innerHTML = "Modificar";
                m.addEventListener("click", Modificar);
                td.appendChild(b);
                td.appendChild(m);
                tableRow.appendChild(td);
            }
        });
    }
    Personas.CargarLista = CargarLista;
    function Modificar(e) {
        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
        var listaNueva = [];
        lista.forEach(function (empleado) {
            if (empleado instanceof Personas.Empleado) {
                console.log(empleado.getLegajo() + " = " + e.target.id);
                console.log(empleado.getLegajo() == e.target.id);
                if (empleado.getLegajo() == e.target.id) {
                    $("#txtLegajo").val(empleado.getLegajo());
                    $("#txtNombre").val(empleado.getNombre());
                    $("#txtApellido").val(empleado.getApellido());
                    $("#txtEdad").val(empleado.getEdad());
                    if (empleado.getHorario() == "Mañana")
                        $("#selectHorario").val(1);
                    else if (empleado.getHorario() == "Tarde")
                        $("#selectHorario").val(2);
                    else
                        $("#selectHorario").val(3);
                }
                else {
                    listaNueva.push(empleado);
                }
            }
        });
        lista = listaNueva;
        CargarLista();
    }
    Personas.Modificar = Modificar;
    function Borrar(e) {
        var listaNueva = [];
        lista.forEach(function (empleado) {
            if (empleado instanceof Personas.Empleado) {
                console.log(empleado.getLegajo() + " = " + e.target.id);
                console.log(empleado.getLegajo() == e.target.id);
                if (empleado.getLegajo() == e.target.id) {
                }
                else {
                    listaNueva.push(empleado);
                }
            }
        });
        lista = listaNueva;
        CargarLista();
    }
    Personas.Borrar = Borrar;
    function CargarListaFiltrada() {
        $("#divListaFiltrada").html("");
        var tablaEmpleadosFiltrada = document.createElement("table");
        tablaEmpleadosFiltrada.setAttribute("class", "table table-stripped");
        $("#divListaFiltrada").append(tablaEmpleadosFiltrada);
        var headerTabla = document.createElement("thead");
        var bodyTabla = document.createElement("tbody");
        var tableRow = document.createElement("tr");
        var td = document.createElement("td");
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
            if (empleado instanceof Personas.Empleado) {
                td = document.createElement("td");
                td.innerText = String(empleado.getLegajo());
                tableRow.appendChild(td);
                td = document.createElement("td");
                td.innerText = String(empleado.getHorario());
                tableRow.appendChild(td);
            }
        });
    }
    Personas.CargarListaFiltrada = CargarListaFiltrada;
    function Calcular() {
        var sumatoria = lista.reduce(function (total, item) {
            return total++;
        }, 0);
        console.log(sumatoria / lista.length);
    }
    Personas.Calcular = Calcular;
})(Personas || (Personas = {}));
