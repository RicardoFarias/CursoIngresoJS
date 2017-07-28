function Mostrar()
{
var largo = document.getElementById("largo").value;
var ancho = document.getElementById("ancho").value;
largo = parseInt (largo);
ancho = parseInt (ancho);
var perimetro = (largo + ancho)*2;
var alambre = perimetro*3;
alert (alambre);
}
