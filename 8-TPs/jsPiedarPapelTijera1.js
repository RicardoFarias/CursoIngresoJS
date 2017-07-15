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
var resultado;
function mostrarResultado()
{
    if(contG>contP+contE&&contP+contE+contG>=3)
    {
        contG--;
        contP++;
        resultado="perdió";
    }
    alert(resultado+contG+"-"+contE+"-"+contP);
}
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
        resultado="empate";
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contP++;
            resultado="perdió";
        }
        else
        {
            contG++;
            resultado="ganó";
        }
    }
mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
    comenzar();
if (eleccionMaquina==1)
    {
        contG++;
        resultado="ganó";
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contE++;
            resultado="empate";
        }
        else
        {
           contP++;
        resultado="perdió";
        }
    }

mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
    comenzar();
	if (eleccionMaquina==1)
    {
        contP++;
        resultado="perdió";
    }
    else
    {
        if (eleccionMaquina==2)
        {
            contG++;
            resultado="ganó";
        }
        else
        {
            contE++;
            resultado="empate";
        }
    }

mostrarResultado();
}//FIN DE LA FUNCIÓN