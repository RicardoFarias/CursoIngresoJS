function Mostrar()
{

var num = prompt("ingrese un numero");
var numpar=0;
for (i=1;i<=num;i++)
{
    if (i%2==0)
    {
        console.log(i);
        numpar++;
    }
}
console.log(numpar);

}//FIN DE LA FUNCIÓN