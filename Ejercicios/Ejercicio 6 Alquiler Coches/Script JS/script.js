function getData(){
    var km = parseInt( document.getElementById("id_km").value);
    
    calcularMonto(km);
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

    document.getElementById("id_kilometros").textContent = km+ " km";
    document.getElementById("id_montoIva").textContent = "$"+monto;
    document.getElementById("id_montoTotal").textContent ="$"+ monto;
}