var Personas;
(function (Personas) {
    $("document").ready(Cosa);
    console.log("asd");
    var lista = new Array();
    function agregar() {
        var nombre = String($("#txtNombre").val());
        var apellido = String($("#txtApellido").val());
        var identificador = String($("#txtId").val());
        var wachin;
        if ($("#selectTipo").val() == 1) {
            wachin = new Personas.Profesor(nombre, apellido, identificador);
        }
        else {
            wachin = new Personas.Alumno(nombre, apellido, identificador);
        }
        if (wachin)
            isinstanceof;
        para;
        saber;
        de;
        quetipo;
        es;
        alert(wachin.Saludar());
        lista.push(wachin);
        var nombreTd = document.createTextNode(wachin.getNombre());
        var apellidoTd = document.createTextNode(wachin.getApellido());
        $("#botonAlumno").on("click", wachin.Saludar);
    }
    Personas.agregar = agregar;
    function Modificar() {
        console.log("asd");
    }
    Personas.Modificar = Modificar;
    function CambiarTipoIdentificador() {
        if ($("#selectTipo").val() == 1) {
            $("#lblId").text("CUIL");
        }
        else {
            $("#lblId").text("Legajo");
        }
    }
    Personas.CambiarTipoIdentificador = CambiarTipoIdentificador;
    function Cosa() {
        $("#selectTipo").change(CambiarTipoIdentificador);
        $("#btnSubmit").click(agregar);
    }
    Personas.Cosa = Cosa;
})(Personas || (Personas = {}));
