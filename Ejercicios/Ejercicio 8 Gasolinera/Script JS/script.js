
function agregar(){

    var litros = parseInt(document.getElementById("id_litros").value);

    alert("Se agregaron " +litros+ " litros de combustible");

    document.getElementById("id_litrosRes").textContent = litros;

    document.getElementById("btn-litros").disabled = true;

    document.getElementById("btn_despachar").disabled = false;
}

function despachar(){
    var litrosConsumir = parseInt(document.getElementById("id_litrosConsumir").value);
    var litrosRes = parseInt(document.getElementById("id_litrosRes").textContent);
    var nCarros = parseInt(document.getElementById("id_Vehiculos").textContent);
    var recaudacion = parseFloat(document.getElementById("id_recaudacion").textContent);
    var mayorConsu = parseInt(document.getElementById("id_mayorConsu").textContent);

    if(litrosConsumir > litrosRes){
        alert("Lo sentimos, por el momento se le puede agregar " + litrosRes + " litros");
        document.getElementById("btn_despachar").disabled = true;
    }else{
        litrosRes-= litrosConsumir;
        document.getElementById("id_litrosRes").textContent = litrosRes;

        nCarros++;
        document.getElementById("id_Vehiculos").textContent = nCarros;

        recaudacion+= litrosConsumir*1.25;
        document.getElementById("id_recaudacion").textContent = recaudacion + "$";

        if(litrosConsumir > mayorConsu){
             var vehi = nCarros;
            document.getElementById("id_mayorConsu").textContent = litrosConsumir + " litros, Vehiculo No. "+ vehi ;
        }

    }

}

function loadData(){
    document.getElementById("btn_despachar").disabled = true;
}