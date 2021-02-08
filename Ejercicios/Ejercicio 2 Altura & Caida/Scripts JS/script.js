function getData(){
    var segundos = document.getElementById("id_segundos").value;
    
    if(verificarDatos(segundos)){
        altura(segundos);
    }
    
}

function altura(seg){
    var altura;

    altura = (((9.8)* Math.pow(seg,2))/2).toFixed(2);

    document.getElementById("id_respuesta").textContent = altura + " m";
    
}


function verificarDatos(seg){
    if(seg<=0){
        alert("Ingrese datos mayores que 0");
        location.reload();
        return false;
    }


    return true;
}