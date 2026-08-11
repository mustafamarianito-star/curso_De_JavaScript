/**
crear algoritmo que genere 
numeros impares
*/

let i = 0;
while(i < 10) {
    if(i % 2 !== 0) {
    console.log('Numero impar', i)
    }
    i++;
}

if(i === 9) {
console.log("Fuera del while");
}