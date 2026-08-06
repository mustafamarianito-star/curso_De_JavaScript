function actualizarPerfil(usuario, clave, valor) {
    usuario[clave] = valor;
    return usuario;
}

let usuario = {nombre: "Julio Cesar Mustafa", edad: 88}

actualizarPerfil(usuario, "Pais", "Argentina");
console.log(JSON.stringify(usuario));  // ← Cambio aquí

actualizarPerfil(usuario, "Provincia", "Tucuman");
console.log(JSON.stringify(usuario));  // ← Cambio aquí

actualizarPerfil(usuario, "Departamento", "Lules");
console.log(JSON.stringify(usuario));  // ← Cambio aquí

actualizarPerfil(usuario, "Localidad", "San Pablo");
console.log(JSON.stringify(usuario));  // ← Cambio aquí
