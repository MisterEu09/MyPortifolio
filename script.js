var click = 0;
function verificar()
{
    click++
    if(click == 2){
        document.getElementById("areaTable").style.background = "#1f1f1f"; 
        document.getElementById("dataTable").style.color = "#FFF9F2"; 
        document.getElementById("dataTable2").style.color = "#FFF9F2"; 
        document.getElementById("dataTable3").style.color = "#FFF9F2"; 
        document.getElementById("dataTable4").style.color = "#FFF9F2"; 
        document.getElementById("dataTable5").style.color = "#FFF9F2"; 
        document.getElementById("dataTable6").style.color = "#FFF9F2"; 
        document.getElementById("dataTable7").style.color = "#FFF9F2"; 
        document.getElementById("dataTable8").style.color = "#FFF9F2"; 
        document.getElementById("titleTable").style.color = "#FFF9F2"; 
       
        

    }
    else if(click>3){document.getElementById("areaTable").style.background = "#FFF9F2"; 
    click=0;
    document.getElementById("dataTable").style.color = "#1f1f1f"; 
        document.getElementById("dataTable2").style.color = "#1f1f1f"; 
        document.getElementById("dataTable3").style.color = "#1f1f1f"; 
        document.getElementById("dataTable4").style.color = "#1f1f1f"; 
        document.getElementById("dataTable5").style.color = "#1f1f1f"; 
        document.getElementById("dataTable6").style.color = "#1f1f1f"; 
        document.getElementById("dataTable7").style.color = "#1f1f1f"; 
        document.getElementById("dataTable8").style.color = "#1f1f1f"; 
        document.getElementById("titleTable").style.color = "#1f1f1f"; 
        

    }
    document.getElementById("text").innerHTML = click;    
    
       
    
}