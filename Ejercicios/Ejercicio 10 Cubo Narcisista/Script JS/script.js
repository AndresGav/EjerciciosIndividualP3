function getData(){
    var inicio = parseInt(document.getElementById("id_inicio").value);
    var final = parseInt(document.getElementById("id_final").value);

    if(verificarDatos(inicio,final)){
        narcisistas(inicio,final);
    }else{
        location.reload();
    }
    
}

function narcisistas(numIni, numFin){

    document.getElementById("btn_verificar").disabled = true;

    var acum =0;

    for(var i=numIni ; i <= numFin ;i++){
        var num = i.toString();
        for (var j=0; j< num.length ; j++){
            var cifra = parseInt(num[j]);
            acum+= Math.pow(cifra,3);
        }
        
        if(acum == i){
            crearNodo(i);
        }
        acum=0;
    }

}

function crearNodo(num){
    var elemento = document.createElement("p");
    var text = document.createTextNode(num);
    elemento.appendChild(text);
    document.getElementById("respuesta").appendChild(elemento);
}

function cleanData(){

    document.getElementById("btn_verificar").disabled = false;

    var b = document.getElementById("respuesta");

    var list = document.getElementsByTagName('p');

    for (var i=list.length-1 ; i >= 0 ; i--){
        b.removeChild(list.item(i));    
    }
}

function verificarDatos(ini,fin){
    if(ini > fin ){
        alert("EL valor inicial debe ser menor al valor final");
        return false;
    }
    if(ini > 9999 || fin >9999){
        alert("Cuidado no ingreses mayores a 9999");
        return false;
    }

    if(ini <0 || fin <0){
        alert("Ingresa valores positivos");
        return false;
    }

    return true;
}