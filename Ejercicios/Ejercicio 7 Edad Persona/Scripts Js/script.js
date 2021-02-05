function getData(){

    var fecha = document.getElementById("id_fecha").value;
    
    var fechaSep = fecha.split('-',3);

    document.getElementById("id_edad").textContent= calcEdad(parseInt(fechaSep[0]), parseInt(fechaSep[1]), parseInt(fechaSep[2]));

}

function calcEdad(anio,mes,dia){

    var fecha = new Date();

    var anioA= fecha.getFullYear();
    var mesA = fecha.getMonth()+1;
    var diaA= fecha.getDate();

    if (dia > diaA){
        diaA += 30;
        mes += 1;
    }else{
        diaA -= dia;
    }

    if (mes > mesA){
        mesA = mesA + 12 - mes;
        anio += 1;
    }else       {
       mesA -= mes;
    }

    anioA -= anio;
    return (anioA+ " años, "+ mesA+ " meses, "+diaA+" dias");
    
}