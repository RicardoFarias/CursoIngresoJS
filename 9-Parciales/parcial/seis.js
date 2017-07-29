function Mostrar()
{
var maximo;
var minimo;
var dia;
var cont=1;
var bandera=true;
    while (cont<=24)
    {
        dia= prompt ("ingrese las ventas del dia");
        dia =parseInt (dia);
        cont++;
        while (dia<0)
        {
            dia = prompt ("Error ingrese un numero mayor a 0");
        }
            if(bandera)
            {
                maximo=dia;
                minimo=dia;
                bandera=false;
            }
            else
            {
                if (maximo<dia)
                {
                    maximo=dia;
                }
                    if (dia<minimo)
                    {
                    minimo=dia;
                    }
            }   
    }
    alert ("numero mayor es: "+maximo);
    alert ("numero menor es: "+minimo);
}
