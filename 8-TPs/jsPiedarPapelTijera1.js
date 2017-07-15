/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var contP=0;
var contG=0;
var contE=0;

function comenzar()
{
eleccionMaquina= Math.floor (Math.random()* (4-1))+1;
console.log(eleccionMaquina);	

}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();
    if (eleccionMaquina==1)
    {
       contE++;
        alert ("Empate    "+contG+"-"+contE+"-"+contP);  
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contP++;
            alert ("Perdió    "+contG+"-"+contE+"-"+contP);
        }
        else
        {
            contG++;
            alert ("Ganó     "+contG+"-"+contE+"-"+contP);
        }
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    comenzar();
if (eleccionMaquina==1)
    {
        contG++;
        alert ("Ganó     "+contG+"-"+contE+"-"+contP);
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contE++;
            alert ("Empate    "+contG+"-"+contE+"-"+contP);  
        }
        else
        {
           contP++;
        alert ("Perdió    "+contG+"-"+contE+"-"+contP);
        }
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
    comenzar();
	if (eleccionMaquina==1)
    {
        contP++;
        alert ("Perdió    "+contG+"-"+contE+"-"+contP);
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contG++;
            alert ("Ganó     "+contG+"-"+contE+"-"+contP);
        }
        else
        {
            contE++;
            alert ("Empate    "+contG+"-"+contE+"-"+contP);    
        }
    }


}//FIN DE LA FUNCIÓN