
/*
programa para calcular el total de venta de personas viendo la serie de televicion surcoreana 
al contratar 5 meses o mas te hacemos un descuento de $200
*/



//crear variables
const precio_porcontratar = 200; 
let cantidad = 8;

//calcular el total
let total = cantidad * precio_porcontratar;

//aplicar descuento
if (cantidad >= 5 ) {
  total -= 200;
}


//mostrar el total en consola 
console.log("total: "+ total);