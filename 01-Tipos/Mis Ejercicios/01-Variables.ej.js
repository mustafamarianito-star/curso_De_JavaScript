// creamos cada una de las variables con los distintos valores (nombre, edad, altura, peso, casado) etc
let nombre = "Juan";
let edad = 30;
let altura = 1.75;
let peso = 70;
let casado = false;
let hijos;

let perfilDeJuan = {
    nombre: "Juan",
    edad: 30,
    altura: 1.75,
    peso: 70,
    casado: false,
    hijos: null
};

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof peso);
console.log(typeof casado);

// nos devuelve undefined porque no le hemos asignado ningun valor a la variable hijos
console.log(typeof hijos);
console.log(typeof perfilDeJuan);
