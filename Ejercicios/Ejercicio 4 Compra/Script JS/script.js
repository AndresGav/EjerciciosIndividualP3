function getData(){

    var cantidad = parseInt(document.getElementById("id_cantidad").value);

    calcDetalles(cantidad);

}


function calcDetalles(cant){

    var docenas = Math.trunc( cant/12); /*DOCENAS*/
    var residuo = cant%12;
    var prdAdicional = 0;
    var subtotal =0;
    var descuento =0;
    var total =0;

    if(docenas>3){
        prdAdicional++;
        prdAdicional = docenas-3;
    }
    if(docenas>3 && residuo>3){
        prdAdicional++;
    }
    subtotal = cant * 0.60;

    

    if(docenas>3){
        document.getElementById("id_porcentajeDes").textContent = "15%";
        descuento = subtotal * 0.15;
    }else{
        document.getElementById("id_porcentajeDes").textContent = "10%";
        descuento = subtotal * 0.10;
    }

    /*TOTALES A PAGAR*/
    total = subtotal - descuento;
    document.getElementById("id_totalUnidades").textContent = cant + prdAdicional;
    document.getElementById("id_cantidadPrd").textContent = cant;
    document.getElementById("id_docenas").textContent = docenas;
    document.getElementById("id_unidadesObsequidas").textContent = prdAdicional;
    document.getElementById("id_subTotal").textContent = subtotal.toFixed(2);
    document.getElementById("id_descuento").textContent = descuento.toFixed(2);
    document.getElementById("id_total").textContent = total.toFixed(2);
    
}