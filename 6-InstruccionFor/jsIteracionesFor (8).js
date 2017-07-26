function Mostrar()
{
var num = prompt("ingrese un numero");
var numdiv=0;
for (i=1;i<=num;i++)
{
    if (num%i==0)
    {
        numdiv++;
    }
}
if (numdiv==2)
{
console.log("es primo");
}
else
{
    console.log("no es primo")
}




}//FIN DE LA FUNCIÓN