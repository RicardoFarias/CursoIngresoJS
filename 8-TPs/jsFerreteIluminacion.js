/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var resultado;
    var marca;
    var ingresosBrutos;
    marca=document.getElementById("Marca").value;
    cantidad=document.getElementById("Cantidad").value;
    cantidad=parseInt(cantidad);
    if (cantidad>=6)
    {
        resultado=(cantidad*35)*0.50;
    }
    else
    {
        if (cantidad==5 && marca=="ArgentinaLuz")
         resultado=(cantidad*35)*0.60;
            else
            {
                if (cantidad==5 && marca !="ArgentinaLuz")
                {
                    resultado=(cantidad*35)*0.70;
                }
                    else
                    {
                        if (cantidad==4 && (marca=="ArgentinaLuz"||marca=="FelipeLamparas"))      
                        {
                            resultado=(cantidad*35)*0.75;
                        }
                            else 
                            {
                                if ((cantidad==4) && (marca!=("ArgentinaLuz"&&"FelipeLamparas")))
                                {
                                    resultado=(cantidad*35)*0.80;
                                }
                                    else
                                    {
                                        if (cantidad==3 && marca =="ArgentinaLuz")
                                        {
                                            resultado=(cantidad*35)*0.85;
                                        }
                                            else
                                            {
                                                if (cantidad==3 && marca =="FelipeLamparas")
                                                {
                                                    resultado=(cantidad*35)*0.90;
                                                }
                                                    else
                                                    {
                                                        if (cantidad==3 && (marca!=("ArgentinaLuz"&&"FelipeLamparas"))) 
                                                        {
                                                            resultado=(cantidad*35)*0.95;
                                                        }
                                                        else
                                                        {
                                                            resultado=cantidad*35;
                                                        }    
                                                    }
                                            }
                                    }
                            }
                    }
            }
    }
    if  (resultado > 120)
    {
        ingresosBrutos=resultado*0.10;
        resultado=resultado*1.10;
        resultado= Math.floor(resultado);
        alert ("$"+resultado + "  IIBB  Usted pago de ingresos brutos: $" + ingresosBrutos);
    }
    else
    {
         resultado= Math.floor(resultado);
         alert (resultado);
    }        
}
