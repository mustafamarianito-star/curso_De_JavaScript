/**
 * cuando creamos una funcion constructora,
 * el nombre debe ser expresado en UpperCamelCase
 * o PascalCase
 */
//{id: 1, recuperarClave: function(){} }

function Usuario(){
    this.id = 1;
    this.recuperarClave = function() {
        console.log('recuperando clave...')
    }

}

let usuario = new Usuario();
console.log(usuario)