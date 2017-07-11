function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while (respuesta=='si')
{
	numero=prompt ("ingrese un mumero");
	numero=parseInt(numero);
	while (isNaN (numero))
	{
		numero=prompt ("Error! Ingrese un numero");
		numero=parseInt(numero);
	}
	if (numero>=0)
	{
	positivo=positivo + numero;
	contador++;	
	}
	else
	{
	negativo=negativo*numero;
	contador++;	
	}
	respuesta=prompt ("desea continuar");
}	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN