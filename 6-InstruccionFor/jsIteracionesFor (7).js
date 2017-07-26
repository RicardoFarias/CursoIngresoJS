function Mostrar()
{
var num = prompt("ingrese un numero");
var numdiv=0;
for (i=1;i<=num;i++)
{
    if (num%i==0)
    {
        console.log(i);
        numdiv++;
    }
}
console.log(numdiv);
}//FIN DE LA FUNCIÓN