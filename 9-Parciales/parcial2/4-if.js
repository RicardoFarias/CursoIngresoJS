//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1 = prompt ("ingrese un numero");
	var num2 = prompt ("ingrese otro numero");
	var resultado=0;
	num1 = parseInt (num1);
	num2 = parseInt (num2);
	if (num1==num2)
		{
			resultado=num1*num2;
			document.write("al ser iguales multiplicados da: "+ resultado);
		}
		else
			{
				if (num1>num2)
				{
					resultado=num1-num2;
					document.write("al ser mayor el 1ero resultado da: "+ resultado);
				}
					else
					{
						resultado=num1+num2;
						document.write("al ser mayor el 2do resultado da: "+ resultado);
					}
			}		
}

