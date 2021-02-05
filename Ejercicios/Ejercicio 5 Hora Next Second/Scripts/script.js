function getData(){
    
    var hora = document.getElementById("id_hora").value;

    var hh = hora[0]+hora[1];
    var mm = hora[3]+hora[4];
    var ss = hora[6]+hora[7];

    hh = parseInt(hh) 
    mm = parseInt(mm) 
    ss = parseInt(ss) 
    
    document.getElementById("id_horaCalculada").textContent =  sumSeg(hh,mm,ss);
}

function sumSeg(hora, minuto, segundo){

            segundo = segundo + 1;
            
            if( hora!=23 && minuto!=59 && segundo == 60)
            {
                segundo = 0;
                minuto = minuto + 1;
            }
            else
            {
                if(hora!=23 && minuto==59 && segundo == 60)
                {
                    segundo = 0;
                    minuto = 0;
                    hora = hora + 1;
                }
                else
                {
                    if(hora ==23 && minuto==59 && segundo==60)
                    {
                        hora = 0;
                        minuto = 0;
                        segundo = 0;
                    }
                    else
                    {
                        if( hora ==23 && minuto!=59 && segundo == 60)
                        {
                            segundo = 0;
                            minuto = minuto + 1;
                        }
                    }
                    

                }
            }

    return hora+":" + minuto+":"+ segundo
}