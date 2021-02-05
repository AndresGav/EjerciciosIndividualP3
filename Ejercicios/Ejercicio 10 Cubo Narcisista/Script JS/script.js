function getData(){
    var inicio = parseInt(document.getElementById("id_inicio").value);
    var final = parseInt(document.getElementById("id_final").value);

    narcisistas(inicio,final);
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