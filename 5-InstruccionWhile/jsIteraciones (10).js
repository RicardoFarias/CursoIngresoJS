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
		if (numero==0)
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
		respuesta=prompt ("Desea ingresar otro numero..?");
	}
promPositivos=sumaPositivos/cantidadPositivos;
if (sumaPositivos==0)
{
	promPositivos=0;
}
promNegativos=sumaNegativos/cantidadNegativos;
if (isNaN (promNegativos))
{
	promNegativos="no se ingreso ningun numero negativo";
}
diferencia=cantidadPositivos-cantidadNegativos;
if (diferencia<0)
{
	diferencia*=-1;
}

document.write ("Los resultados son:"+".<br/>");
document.write ("el promedio de los positivos es: " + promPositivos+".<br/>");
document.write ("el promedio de los negativos es: " + promNegativos+".<br/>");
document.write ("la direncia entre los numeros positivos y negativos es: " + diferencia+".<br/>");
document.write ("la cantidad de ceros es: " + cantidadCeros+".<br/>");
document.write ("la cantidad de positivos es: " + cantidadPositivos+".<br/>");
document.write ("la cantidad de negativos es: " + cantidadNegativos+".<br/>");
document.write ("la suma de los positivos es: " + sumaPositivos+".<br/>");
document.write ("la suma de los negativos es: " + sumaNegativos+".<br/>");
document.write ("la cantidad de numeros pares es: " + cantidadPares+".<br/>");

}//FIN DE LA FUNCIÓN