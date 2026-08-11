/**  
 * crear funcion que tome un array de pares
 * y devuelva un array de objetos  
*/ 

let pares = [
    [1,{id: 1, name: 'Mariano'}],
    [2,{id: 2, name: 'Felipe'}],
    [3,{id: 3, name: 'Chanchito'}]
];

let array = [{
    id: 1, 
    name: 'Mariano', 
},{
    id: 2, 
    name: 'Felipe',
    
},{
    id: 3,
    name: 'Chanchito'
}];

function toCollection(arr) {
    let colleccion = [];
    for (idx in arr) {
        let elemento = arr[idx];
        colleccion[idx] = elemento[1];
        colleccion[idx].id = elemento[0];
    }
    return colleccion;
}

let resultado = toCollection(pares);
console.log(resultado);