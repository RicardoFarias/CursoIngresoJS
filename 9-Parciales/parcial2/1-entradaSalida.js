//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base = document.getElementById("lado").value;
	var perimetro=0;
	base = parseInt (base);
	perimetro = base*3;
	alert("el perimetro es: " + perimetro);
}

