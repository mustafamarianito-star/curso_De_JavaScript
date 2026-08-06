function concatenar() {
    return Array.from(arguments).join("-");
}

console.log(concatenar("hola", "alberto", "como", "estas"));
// Output: "hola-alberto-como-estas"