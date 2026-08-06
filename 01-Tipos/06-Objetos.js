let nombre = "Felipe"
let pelicula = "El Señor de los Anillos"
let edad = 30
let fechaNacimiento = "1993-01-01"
let personaje = {
    nombre: "Felipe ",
    pelicula: "El Señor de los Anillos",
    edad: 30,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje ["pelicula"]);

personaje.edad = 13;

personaje["edad"] = 91;

let llave = "edad";

personaje[llave] = 30;

delete personaje.pelicula;

console.log(personaje);