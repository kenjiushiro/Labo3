namespace Vehiculos{
    $("document").ready(InicializarBotones);
    
    console.log("asd");
    var lista:Array<Vehiculo> = new Array<Vehiculo>();
    
    
    export function agregar()
    {
        let id = calcularID();
        let marca = String($("#txtMarca").val());
        let modelo = String($("#txtModelo").val());
        let precio = Number($("#txtPrecio").val());
        let vehiculo:Vehiculo;
        let cantidadDePuertas:number;
        let cuatroXcuatro:boolean;

        if($("#selectTipo").val() == 1){
            cantidadDePuertas = Number($("#txtCantPuertas"));
            vehiculo = new Auto(id,marca,modelo,precio,cantidadDePuertas);
            // console.log("Auto creado");
        }
        else{
            let radioValue = $("input[name='es4x4']:checked"). val();
            if(radioValue == "true")
                cuatroXcuatro = true;
            else
                cuatroXcuatro = false;

            vehiculo = new Camioneta(id,marca,modelo,precio,cuatroXcuatro);
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
    
    export function InicializarBotones()
    {
        $("#selectTipo").change(CambiarTipoIdentificador);
        $("#btnSubmit").click(agregar);
        $("#esCamioneta").hide();
        CargarTabla();
    }

    function calcularID():number
    {
        if(lista.length != 0)
        {
            let  max:Vehiculo = lista.reduce(function(prev, current) {
                return (prev.id > current.id) ? prev : current
            }) 
            
            return max.id + 1;
        }
        return 0;
    }

    export function CargarTabla()
    {   
        $("#divListaVehiculos").html("");
        let tablaVehiculos =document.createElement("table");
        $("#divListaVehiculos").append(tablaVehiculos);
        let headerTabla = document.createElement("thead");
        let bodyTabla = document.createElement("tbody");
        let tableRow = document.createElement("tr");
        let td = document.createElement("td");
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

            if (vehiculo instanceof Auto)
            {
                let auto:Auto;
                auto = vehiculo;
                td = document.createElement("td");
                td.innerText = String(auto.getCantidadPuertas);
                tableRow.appendChild(td);
            }
            else if(vehiculo instanceof Camioneta)
            {
                let camioneta:Camioneta;
                camioneta=vehiculo;
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
    export function Calcular()
    {
        let sumatoria:number  = lista.reduce(
        function(total,item){
            return total++;
        },0);

        console.log(sumatoria/lista.length);
            
    }
    export function CambiarTipoIdentificador()
    {
        if($("#selectTipo").val() == 1){
            $("#lblAtributoSubclase").text("Cantidad de puertas");
            $("#esAuto").show();
            $("#esCamioneta").hide();
        }   
        else
        {
            $("#lblAtributoSubclase").text("Cuatro por cuatro");
            $("#esAuto").hide();
            $("#esCamioneta").show();

        }
    }
    
    
}
