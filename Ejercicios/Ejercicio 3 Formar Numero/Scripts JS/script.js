function getData(){
    var num1 = document.getElementById("id_valor1").value;
    var num2 = document.getElementById("id_valor2").value;
    var num3 = document.getElementById("id_valor3").value;
    var num4 = document.getElementById("id_valor4").value;
    var num5 = document.getElementById("id_valor5").value;

    document.getElementById("id_resultado").textContent =  getCifras(num1,num2,num3,num4,num5);
}

function getCifras(n1,n2,n3,n4,n5){

    var resultado=0;

    for(var i = 0 ; i <5 ; i++){
        for(var j =0 ; j<5 ; j++){

            if(i==0 && j==0){
                
                resultado += parseInt(n1[j]) * 10000;
            }

            if(i==1 && j==1){
                
                resultado += parseInt(n2[j]) * 1000;
            }

            if(i==2 && j==2){
                
                resultado += parseInt(n3[j]) * 100;
            }

            if(i==3 && j==3){
                
                resultado += parseInt(n4[j]) * 10;
            }

            if(i==4 && j==4){
                
                resultado += parseInt(n5[j]);
            }
        }
    }

    return resultado;
}

function verificarDatos(){
    if(a){
        alert("Ingrese datos mayores que 0");
        location.reload();
        return false;
    }


    return true;
}