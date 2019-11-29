var Vehiculos;
(function (Vehiculos) {
    $("document").ready(InicializarBotones);
    console.log("asd");
    var lista = new Array();
    function agregar() {
        var id = calcularID();
        var marca = String($("#txtMarca").val());
        var modelo = String($("#txtModelo").val());
        var precio = Number($("#txtPrecio").val());
        var vehiculo;
        var cantidadDePuertas;
        var cuatroXcuatro;
        if ($("#selectTipo").val() == 1) {
            cantidadDePuertas = Number($("#txtCantPuertas"));
            vehiculo = new Vehiculos.Auto(id, marca, modelo, precio, cantidadDePuertas);
            // console.log("Auto creado");
        }
        else {
            var radioValue = $("input[name='es4x4']:checked").val();
            if (radioValue == "true")
                cuatroXcuatro = true;
            else
                cuatroXcuatro = false;
            vehiculo = new Vehiculos.Camioneta(id, marca, modelo, precio, cuatroXcuatro);
            // console.log("Camioneta creada");
        }
        // if wachin isinstanceof para saber de quetipo es
        CargarTabla();
        lista.push(vehiculo);
        console.log(lista);
        // let nombreTd = document.createTextNode(vehiculo.getNombre());
        // let apellidoTd = document.createTextNode(vehiculo.getApellido());
        // $("#botonAlumno").on("click",vehiculo.Saludar);
    }
    Vehiculos.agregar = agregar;
    function InicializarBotones() {
        $("#selectTipo").change(CambiarTipoIdentificador);
        $("#btnSubmit").click(agregar);
        $("#esCamioneta").hide();
        CargarTabla();
    }
    Vehiculos.InicializarBotones = InicializarBotones;
    function calcularID() {
        if (lista.length != 0) {
            var max = lista.reduce(function (prev, current) {
                return (prev.id > current.id) ? prev : current;
            });
            return max.id + 1;
        }
        return 0;
    }
    function CargarTabla() {
        $("#divListaVehiculos").html("");
        var tablaVehiculos = document.createElement("table");
        $("#divListaVehiculos").append(tablaVehiculos);
        var headerTabla = document.createElement("thead");
        var bodyTabla = document.createElement("tbody");
        var tableRow = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = "ID";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Marca";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Modelo";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Precio";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "Cantidad Puertas";
        tableRow.appendChild(td);
        td = document.createElement("td");
        td.innerText = "4x4";
        tableRow.appendChild(td);
        tablaVehiculos.appendChild(headerTabla);
        tablaVehiculos.appendChild(bodyTabla);
        headerTabla.appendChild(tableRow);
        lista.forEach(function (vehiculo) {
            tableRow = document.createElement("tr");
            bodyTabla.appendChild(tableRow);
            console.log(vehiculo.getId());
            td = document.createElement("td");
            td.innerText = String(vehiculo.getId());
            tableRow.appendChild(td);
            td = document.createElement("td");
            td.innerText = String(vehiculo.getMarca());
            tableRow.appendChild(td);
            td = document.createElement("td");
            td.innerText = String(vehiculo.getModelo());
            tableRow.appendChild(td);
            td = document.createElement("td");
            td.innerText = String(vehiculo.getPrecio());
            tableRow.appendChild(td);
            if (vehiculo instanceof Vehiculos.Auto) {
                var auto = void 0;
                auto = vehiculo;
                td = document.createElement("td");
                td.innerText = String(auto.getCantidadPuertas);
                tableRow.appendChild(td);
            }
            else if (vehiculo instanceof Vehiculos.Camioneta) {
                var camioneta = void 0;
                camioneta = vehiculo;
                td = document.createElement("td");
                td.innerText = "";
                tableRow.appendChild(td);
                td = document.createElement("td");
                td.innerText = String(camioneta.getCuatroXcuatro());
                tableRow.appendChild(td);
            }
        });
        console.log(lista);
    }
    Vehiculos.CargarTabla = CargarTabla;
    function Calcular() {
        var sumatoria = lista.reduce(function (total, item) {
            return total++;
        }, 0);
        console.log(sumatoria / lista.length);
    }
    Vehiculos.Calcular = Calcular;
    function CambiarTipoIdentificador() {
        if ($("#selectTipo").val() == 1) {
            $("#lblAtributoSubclase").text("Cantidad de puertas");
            $("#esAuto").show();
            $("#esCamioneta").hide();
        }
        else {
            $("#lblAtributoSubclase").text("Cuatro por cuatro");
            $("#esAuto").hide();
            $("#esCamioneta").show();
        }
    }
    Vehiculos.CambiarTipoIdentificador = CambiarTipoIdentificador;
})(Vehiculos || (Vehiculos = {}));
