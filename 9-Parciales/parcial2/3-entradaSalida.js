//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo = document.getElementById("largo").value;
	var ancho = document.getElementById("ancho").value;
	var perimetro=0;
	var alambre;
	largo= parseInt(largo);
	ancho= parseInt(ancho);
	perimetro=largo*2+ancho*2;
	alambre=perimetro*6;
	alert("la cantidad de alambre necesaria es: " + alambre);
}

