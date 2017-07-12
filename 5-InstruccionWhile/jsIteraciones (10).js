function Mostrar()
{

	var contador=0;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadNegativos=0;
	var cantidadPositivos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promPositivos;
	var promNegativos;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt ("ingrese un numero");
		numero=parseInt(numero);
		while (isNaN (numero))
		{
			numero=prompt ("Error! Ingrese un numero");
			numero=parseInt(numero);
		}
		if(numero%2==0)
		{
			cantidadPares++;
		}
		if (numero=0)
		{
			cantidadCeros++;
		}
		if (numero>0)
		{
			sumaPositivos+=numero;
			cantidadPositivos++;
		}
		if (numero<0)
		{
			sumaNegativos+=numero;
			cantidadNegativos++;
		}
	}
promPositivos=sumaPositivos/cantidadPositivos;
promNegativos=sumaNegativos/cantidadNegativos;
diferencia=cantidadPositivos-cantidadNegativos;
if (diferencia<0)
{
	diferencia*=-1;
}
Document.write ("el promedio de los positivos es: " + promPositivos);
Document.write ("el promedio de los negativos es :" + promNegativos);
Document.write ("la direncia entre los numeros positivos y negativos es: " + diferencia);
Document.write ("la cantidad de ceros es: " + cantidadCeros);
Document.write ("la cantidad de positivos es: " + cantidadPositivos);
Document.write ("la cantidad de negativos es: " + cantidadNegativos);
Document.write ("la suma de los positivos es: " + sumaPositivos);
Document.write ("la suma de los negativos es: " + sumaNegativos);
Document.write ("la cantidad de numeros pares es: " +cantidadPares);

}//FIN DE LA FUNCIÓN