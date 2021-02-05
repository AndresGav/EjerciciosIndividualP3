function getData(){
    var segundos = document.getElementById("id_segundos").value;

    altura(segundos);
}

function altura(seg){
    var altura;

    altura = (((9.8)* Math.pow(seg,2))/2).toFixed(2);

    document.getElementById("id_respuesta").textContent = altura + " m";
    
}