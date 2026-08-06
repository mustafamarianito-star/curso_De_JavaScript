//Primer parte del ejercicio 2 de comparación de tipos
let a = 25;
let a2 = '25';

// tres comparaciones que devuelvan true
console.log('------------------------')
console.log('comparaciones que devuelven true')
console.log(a == a2 , 'la variable a es igual (no extrictamente) a a2');
console.log(a !== a2, 'a es diferente (estrictamente) a a2');
console.log(a >= a2, 'a es mayor o igual que a2');
//ahora las que devuelven false
console.log('------------------------')
console.log('comparaciones que devuelven false')
console.log(a === a2, 'a es igual (estrictamente) a a2');
console.log(a != a2, 'a es diferente (no estrictamente) a a2');
console.log(a > a2, 'a es mayor que a2');
//

