let autor = "James Clear";
let titulo = "Hábitos Atómicos";
let fechaPublicacion = "2018-10-16";
let genero = "Autoayuda";
let idioma = "Español";
let paginas = 320;

let libro = {
    autor: "James Clear",
    titulo: "Hábitos Atómicos",
    fechaPublicacion: "2018-10-16",
    genero: "Autoayuda",
    idioma: "Español",
    paginas: 320,
};

libro.paginas = 350;

libro.idioma = "Inglés";

delete libro.autor

console.log(libro);