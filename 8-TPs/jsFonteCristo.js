/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{}    

function NumerosPares ()
{   
    var num = prompt ("ingrese un numero positivo"); 	
    var cantpar=0;
    if (num>0)
    {
        for (i=1;i<=num;i++)
        {
            if (i%2==0)
            {
            cantpar++;
            }
        }   
    alert ("la cantidad de pares son: "+cantpar);
    }
    else
    {
        alert ("el numero debe ser positivo");
    }
}
function NumerosImpares ()
{
    var num = prompt ("ingrese un numero positivo"); 	
    var cantimpar=0;
    if (num>0)
    {
        for (i=1;i<=num;i++)
        {
            if (i%2!=0)
            {
            cantimpar++;
            }
        }
    alert ("cantidad de impares :"+cantimpar);
    }
    else
    {
        alert ("debe ingresar un numero positivo");
    }
}
function NumerosDivisibles ()
{
    var num = prompt ("ingrese un numero positivo"); 
    var cant;
    if (num>0)
    {
        for (i=1;i<=num;i++)
        {
            if(num%i==0)
            {
                cant++;
            }
        }   
    
    alert (cant);
    }
}
function VerificarPrimos()
{

}

function NumerosPrimos()
{

}