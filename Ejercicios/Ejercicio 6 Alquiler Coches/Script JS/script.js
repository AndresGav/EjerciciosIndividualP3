function getData(){
    var km = parseInt( document.getElementById("id_km").value);

    if(verificarDatos(km)){
        calcularMonto(km);
    }
    
}

function calcularMonto(km){

    var monto = 300000;

    if(km > 300 & km<=1000)
    {
        monto += (km-300)*15000; 
    }

    if(km > 1000){
        monto += (km-1000)*10000; 
    }

    var iva = monto * 0.20
    var subtotal = monto-iva;
     

    document.getElementById("id_kilometros").textContent = km+ " km";
    document.getElementById("id_montoIva").textContent = "$"+iva;
    document.getElementById("id_subtotal").textContent = "$"+subtotal;
    document.getElementById("id_montoTotal").textContent ="$"+ monto;
}

function verificarDatos(km){
    if(km<=0){
        alert("Ingrese datos mayores que 0");
        location.reload();
        return false;
    }

    if(km>999999){
        alert("Valor máximo para agregar: 999999");
        location.reload();
        return false;
    }


    return true;
}