function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
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
	if (numero>maximo)
	{
	maximo= numero;
	contador++;	
	}
	else
	{
		if (numero<minimo)
		{
		minimo=numero;
		contador++;	
		}
	}
	respuesta=prompt ("desea continuar");
}	
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
	
	}




}//FIN DE LA FUNCIÓN