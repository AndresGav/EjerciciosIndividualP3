//guardas imagenes en el array
var cambia_imagen = new Array();
cambia_imagen[0] = "/Ejercicios/Ejercicio 12 Juego Random/Img/0.png";
cambia_imagen[1] = "/Ejercicios/Ejercicio 12 Juego Random/Img/1.png";
cambia_imagen[2] = "/Ejercicios/Ejercicio 12 Juego Random/Img/2.png";
cambia_imagen[3] = "/Ejercicios/Ejercicio 12 Juego Random/Img/3.png";
cambia_imagen[4] = "/Ejercicios/Ejercicio 12 Juego Random/Img/4.png";
cambia_imagen[5] = "/Ejercicios/Ejercicio 12 Juego Random/Img/5.png";
cambia_imagen[6] = "/Ejercicios/Ejercicio 12 Juego Random/Img/6.png";
cambia_imagen[7] = "/Ejercicios/Ejercicio 12 Juego Random/Img/7.png";
cambia_imagen[8] = "/Ejercicios/Ejercicio 12 Juego Random/Img/8.png";
cambia_imagen[9] = "/Ejercicios/Ejercicio 12 Juego Random/Img/9.png";
cambia_imagen[10] = "/Ejercicios/Ejercicio 12 Juego Random/Img/10.png";
cambia_imagen[11] = "/Ejercicios/Ejercicio 12 Juego Random/Img/11.png";
cambia_imagen[12] = "/Ejercicios/Ejercicio 12 Juego Random/Img/12.png";
cambia_imagen[13] = "/Ejercicios/Ejercicio 12 Juego Random/Img/13.png";

var index;

var correctas =0;
var incorrectas =0;
var intentos =5;

function rand(nums){
    var ranNum= Math.round(Math.random()*nums);
    return ranNum;
    
}
    
    
function cambiar(){
   index = rand(13);
   document.getElementById("ia").src = cambia_imagen[index];   
}

function comprobar(){
    var valor =  document.getElementById("opciones").value; 
    
    if(valor == index){

        if(correctas==10){
            alert("Felicidaes Ganaste");

            location.reload();
        }

        
        cambiar();

        correctas++;

        document.getElementById("correctas").textContent = correctas;

    }else{

        if(intentos==1){
            alert("Puedes volver a intentarlo !");

            location.reload();
        }

        
        incorrectas++;
        intentos--;

        document.getElementById("incorrectas").textContent = incorrectas;
        document.getElementById("intentos").textContent = intentos;

        
    }
}