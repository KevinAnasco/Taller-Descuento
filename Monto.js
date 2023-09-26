
var Monto = 0;
var Descuento = 0;

for (var i = 1; i <=2; i++) {

    Monto = parseFloat(prompt("Ingrese el Monto"));
 
    if (Monto >= 100){

     Descuento = Monto*0.10;
     Monto = Monto- Descuento;

     alert("Tiene un descuento de: " + Descuento +"% " +" Valor total de : " + Monto);
  
    }
     else {(Monto < 100) 

     Descuento = Monto * 0.02;
     Monto = Monto - Descuento;

     alert("Tiene un descuento de: " + Descuento +"% " +" Valor total de : " + Monto);

    }}
