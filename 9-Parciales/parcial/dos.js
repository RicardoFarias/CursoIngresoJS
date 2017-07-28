function Mostrar()
{
  var valor = prompt ("ingrese un valor");
  valor = parseInt (valor);
  valor = valor*1.21;
  document.getElementById("importeFinal").value = valor;
}
