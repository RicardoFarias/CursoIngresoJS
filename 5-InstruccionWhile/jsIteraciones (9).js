function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var bandera=true;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt ("ingrese un mumero");
		numero=parseInt(numero);
		while (isNaN (numero))
		{
			numero=prompt ("Error! Ingrese un numero");
			numero=parseInt(numero);
		}
			if (bandera)
			{
				maximo= numero;
				minimo=numero;
				bandera=false;	
			}
			else
			{
				if (numero>maximo)
				{
					maximo=numero;
					contador++;	
				}
				if (numero<minimo)
				{
					minimo=numero;
				}
			}
		respuesta=prompt ("desea continuar");
	}	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
	
}