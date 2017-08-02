//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = prompt ("ingrese el importe de un producto");
	var final=0;
	importe = parseInt(importe);
	final=importe * 1.21;
	alert("El importe con el Iva es: " + final);
}

