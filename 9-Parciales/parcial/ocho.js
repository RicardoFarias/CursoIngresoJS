function Mostrar()
{
var resp = "si";
var num;
var par=0;
var cont=0;
var suma=0;
var maximo;
var minimo;
var bandera=true;
var prom=0;
    while (resp != "no")
    {
        num = prompt ("ingrese un numero");
        num=parseInt (num);
        while (num<1)
        {
            num = prompt ("ingrese un numero POSITIVO");
            num=parseInt (num);
        }
        if (bandera)
        {
            maximo=num;
            minimo=num;
            bandera=false;
        }
        if (maximo<num)
        {
            maximo=num;
        }
        if (num<minimo)
        {
            minimo=num;
        }
        if (num%2==0)
        {
            par++;
        }
        cont++;
        suma=suma +num;

        resp = prompt ("ingrese no para terminar..");
    }
    prom=suma/cont;
    document.write ("la cantidad de los pares es: "+par+"<br>");
    
    document.write ("la suma de todos los numeros es: "+suma+"<br>");
    
    document.write ("el promedio de los numeros es; "+prom);

}
