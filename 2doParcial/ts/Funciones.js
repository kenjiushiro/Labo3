var Personas;
(function (Personas) {
    $("document").ready(InicializarBotones);
    var lista = new Array();
    var listaFiltrada = new Array();
    var currentLegajo;
    var formDisplayed;
    var formModificarDisplayed;
    var filtrosDisplayed;
    var indexAModificar;
    function InicializarBotones() {
        $("#btnSubmit").click(agregarEmpleado);
        $("#formulario").hide();
        $("#formFiltros").hide();
        $("#formModificar").hide();
        formDisplayed = false;
        $("#btnMostrarForm").click(MostrarForm);
        $("#btnMostrarFiltros").click(MostrarFiltros);
        $("#btnCancelar").click(CancelarModificar);
        $("#btnModificar").click(ModificarItem);
        $("#btnFiltrar").click(Filtrar);
        $("#btnPromedioEdad").click(PromedioEdadPorHorario);
        MostrarEmpleados();
    }
    Personas.InicializarBotones = InicializarBotones;
    function CancelarModificar() {
        $("#formModificar").hide();
    }
    Personas.CancelarModificar = CancelarModificar;
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
    function ModificarItem() {
        var e;
        var legajo = Number($("#txtLegajoModificar").val());
        var nombre = String($("#txtNombreModificar").val());
        var apellido = String($("#txtApellidoModificar").val());
        var edad = Number($("#txtEdadModificar").val());
        var horario;
        var valSelectHorario;
        valSelectHorario = Number($("#selectHorarioModificar").val());
        if (valSelectHorario == 1)
            horario = "Mañana";
        else if (valSelectHorario == 2)
            horario = "Tarde";
        else
            horario = "Noche";
        console.log(nombre, apellido, edad, legajo, horario);
        e = new Personas.Empleado(nombre, apellido, edad, legajo, horario);
        $("#txtLegajoModificar").val("");
        $("#txtNombreModificar").val("");
        $("#txtApellidoModificar").val("");
        $("#txtEdadModificar").val("");
        lista[indexAModificar] = e;
        CargarLista();
        CancelarModificar();
    }
    Personas.ModificarItem = ModificarItem;
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
    function MostrarEmpleados() {
        CargarLista();
        CargarListaFiltrada();
    }
    Personas.MostrarEmpleados = MostrarEmpleados;
    function Filtrar() {
        var valSelectHorario;
        var horario;
        valSelectHorario = Number($("#selectFiltroHorario").val());
        if (valSelectHorario == 1)
            horario = "Mañana";
        else if (valSelectHorario == 2)
            horario = "Tarde";
        else
            horario = "Noche";
        listaFiltrada = lista.filter(function (empleado) {
            if (empleado instanceof Personas.Empleado) {
                return empleado.getHorario() == horario;
            }
        });
        CargarListaFiltrada();
    }
    Personas.Filtrar = Filtrar;
    function PromedioEdadPorHorario() {
        var totalEdad = lista.reduce(function (accumulator, empleado) {
            if (empleado instanceof Personas.Empleado) {
                return accumulator + empleado.getEdad();
            }
        }, 0);
        alert(totalEdad);
    }
    Personas.PromedioEdadPorHorario = PromedioEdadPorHorario;
    function CargarListaFiltrada() {
        $("#divListaFiltrada").html("");
        var tablaEmpleados = document.createElement("table");
        tablaEmpleados.setAttribute("class", "table table-stripped");
        $("#divListaFiltrada").append(tablaEmpleados);
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
        tablaEmpleados.appendChild(headerTabla);
        tablaEmpleados.appendChild(bodyTabla);
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
        var auxEmpleado = new Personas.Empleado("asd", "asd", 2, 2, "asd");
        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
        var empleadoAModificar = lista.reduce(function (retorno, empleado) {
            if (empleado instanceof Personas.Empleado) {
                if (empleado.getLegajo() == e.target.id) {
                    indexAModificar = lista.indexOf(empleado);
                    return empleado;
                }
            }
            return retorno;
        }, auxEmpleado);
        if (empleadoAModificar instanceof Personas.Empleado) {
            if (empleadoAModificar.getLegajo() == e.target.id) {
                $("#txtLegajoModificar").val(empleadoAModificar.getLegajo());
                $("#txtNombreModificar").val(empleadoAModificar.getNombre());
                $("#txtApellidoModificar").val(empleadoAModificar.getApellido());
                $("#txtEdadModificar").val(empleadoAModificar.getEdad());
                if (empleadoAModificar.getHorario() == "Mañana")
                    $("#selectHorarioModificar").val(1);
                else if (empleadoAModificar.getHorario() == "Tarde")
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
        CargarLista();
    }
    Personas.Modificar = Modificar;
    function Borrar(e) {
        lista = lista.filter(function (empleado) {
            if (empleado instanceof Personas.Empleado) {
                return empleado.getLegajo() != e.target.id;
            }
        });
        CargarLista();
    }
    Personas.Borrar = Borrar;
    function Calcular() {
        var sumatoria = lista.reduce(function (total, item) {
            return total++;
        }, 0);
        console.log(sumatoria / lista.length);
    }
    Personas.Calcular = Calcular;
})(Personas || (Personas = {}));
