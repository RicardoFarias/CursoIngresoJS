function Mostrar()
{
var cont=1;
var suma=0;
var nota;
var sexo;
var prom;
var baja;
var varones=0;
var bandera=true;
    while (cont<=3)
    {
        cont++;
        nota=prompt ("ingrese la nota obtenida");
        nota=parseInt (nota);
        while (nota<0||nota>10)
        {
            nota=prompt ("Ingrese una nota entre 0 y 10");
            nota=parseInt (nota);
        }
        sexo=prompt ("ingrese el sexo del alumno");
        while (sexo!="f" && sexo!="m")
        {
            sexo=prompt ("ingrese el sexo f o m");
        }
        suma=suma+nota;
        if (bandera)
        {
            baja=nota;
            bandera=false;
        }
        if (nota<baja)
        {
            baja=nota;
        }
        if (sexo=="m")
        {
            if(nota>=6)
            {
                varones++;
            }
        }
    }
    prom=suma/3;
alert ("el promedio es: " +prom);
alert ("la nota mas baja es: "+baja);
alert ("la cantidad de varones con nota 6 o mas es: "+varones);
}
