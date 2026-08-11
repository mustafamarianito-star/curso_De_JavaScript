/**     
 * crear algoritmo que devuelva cantidad de 
 * numeros positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidadPositivos = 0;
    for (elemento of arr) {
        if (elemento > 0) {
            cantidadPositivos++;
        }
 }
 return {cantidadPositivos};
}
let resultado = cuantosPositivos(array);
console.log(resultado);