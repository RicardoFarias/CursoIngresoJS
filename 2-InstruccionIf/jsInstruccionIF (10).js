function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero= Math.random() * 10;
	numero= Math.floor(numero);
	if (numero>8)
	{
	alert (numero + "EXCELENTE");
	}
		else
		{
			if (numero>3)
			{
			alert (numero + "APROBO");
			}
			else
			{
			alert (numero + "Vamos la proxima se puede");
			}
		}

}//FIN DE LA FUNCIÓN