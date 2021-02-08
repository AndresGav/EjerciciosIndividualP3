function getData(){

     var altura = parseFloat( document.getElementById("id_altura").value);
     var largo = parseFloat( document.getElementById("id_largo").value);

    if (verificarDatos(altura,largo)){
        grados (altura,largo);
    }
     

}


function grados(alt, lar){


    var grHexa = Math.atan(alt/lar);

    grHexa = (grHexa*360) / (2*Math.PI) /*Trasformar grados Hexadecimales*/


    var grInt = parseInt(grHexa); /*Mostar grados*/

    var grDec = parseFloat(+grHexa.toString().replace(/^[^\.]+/,'0'));


    var min = grDec * 60; 

    var minInt = parseInt(min);/*Mostrar minutos*/ 
    var minDec = parseFloat( +min.toString().replace(/^[^\.]+/,'0'));
    

    var segundos = minDec * 60;

    segundosInt = parseInt(segundos); /*Mostrar Segundos*/

    document.getElementById("id_resultado").textContent = grInt+ "⁰ " + minInt+ "' "+ segundosInt +"''";
    
}

function verificarDatos(alt,lar){
    if(alt<=0 || lar<=0){
        alert("Ingrese datos mayores que 0");
        location.reload();
        return false;
    }


    return true;
}