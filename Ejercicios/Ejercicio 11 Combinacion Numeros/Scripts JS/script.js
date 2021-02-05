function generarNum(){

    document.getElementById("btn_generar").disabled = true;

    for (var i=11; i<=44 ;i++){
        var num = i.toString();
        if(num[0]!=num[1]){
            crearNodo("•"+i);
        }
    }
}

function crearNodo(bin){
    var elemento = document.createElement("p");
    var text = document.createTextNode(bin);
    elemento.appendChild(text);
    document.getElementById("respuesta").appendChild(elemento);
}

function cleanData(){

    document.getElementById("btn_generar").disabled = false;

    var b = document.getElementById("respuesta");

    var list = document.getElementsByTagName('p');

    for (var i=list.length-1 ; i >= 0 ; i--){
        b.removeChild(list.item(i));    
    }
}