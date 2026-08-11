/**  
 * crear algoritmo que devuelva el precio
 * mas el impuesto 
*/

function calcularPrecioConImpuesto(precio, impuesto) {
    let precioConImpuesto = precio + (precio * impuesto);
    return precioConImpuesto;
}

let resultado = calcularPrecioConImpuesto(19.90, 0.15);
console.log(resultado);