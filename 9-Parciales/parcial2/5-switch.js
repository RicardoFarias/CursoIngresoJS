//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes = prompt ("ingrese un mes");
	switch (mes)
	{
		case "enero":
		alert ("veranito!!!");
		break;
		case "febrero":
		alert ("veranito!!");
		break;
		default:
		alert ("extraño enero y febrero!!");
		break;
	}
}

