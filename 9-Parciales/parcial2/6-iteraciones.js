//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=0;
	var cont=0;
	var bandera=true;
	var mayor=0;
	var menor=0;
	while (cont<7)
		{
			cont++;
			importe=prompt("ingrese el importe de venta");
			importe= parseInt (importe);
			while(importe<1)
				{
					importe=prompt("ingrese un importe mayor a 0");
					importe = parseInt (importe);
				}
				if (bandera)
					{
						mayor=importe;
						menor=importe;
						bandera=false;
					}
					else
						{
							if (importe>mayor)
								{
								mayor=importe;
								}
								if (importe<menor)
									{
										menor=importe;
									}
						}			
		}			
	alert("el numero maximo ingresado es: " + mayor);
	alert("el numero menor ingresado es: "+menor);
}

