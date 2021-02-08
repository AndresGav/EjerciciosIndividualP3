function getData(){
    var decimal = parseInt(document.getElementById("id_decimal").value);

    if(verificarDatos(decimal)){
        binario(decimal);

        document.getElementById("btn_transformar").disabled = true;
    }
    
}


function binario(num){
    if(num<2){
        crearNodo(num);
    }else{
        binario(Math.trunc(num/2));
        crearNodo(num%2);
    }
}


function crearNodo(bin){
    var elemento = document.createElement("p");
    var text = document.createTextNode(bin);
    elemento.appendChild(text);
    document.getElementById("respuesta").appendChild(elemento);
}

function cleanData(){

    document.getElementById("btn_transformar").disabled = false;

    var b = document.getElementById("respuesta");

    var list = document.getElementsByTagName('p');

    for (var i=list.length-1 ; i >= 0 ; i--){
        b.removeChild(list.item(i));    
    }
}

function verificarDatos(dec){
    if(dec<=0){
        alert("Ingrese datos mayores que 0");
        location.reload();
        return false;
    }


    return true;
}