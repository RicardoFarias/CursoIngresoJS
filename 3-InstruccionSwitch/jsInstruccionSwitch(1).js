function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("FormIngreso").value;
switch (mesDelAño){
    case "Enero":
    alert ("Que comiences bien el año!!!");
    break;
    case "Marzo":
    alert ("A clases!!!");
    break;
    case "Julio":
    alert ("Se vienen las vacaciones!!!");
    break;
    case "Diciembre":
    alert ("Felices fiestas!!!");
    break;
    default:
    break;
}
}//FIN DE LA FUNCIÓN