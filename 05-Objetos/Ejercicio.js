/**
 * 
 * sistema de gestion de usuarios y poropiedades
 *  
 */


function Usuario(nombre, email) {
    this.id = Math.random();
    this.nombre = nombre;
    this.email = email;
    this.activo = true;
    this.login = function () {
        console.log('Iniciando sesión...');
    };
}

function Administrador(nombre, email) {
    Usuario.call(this, nombre, email);
    this.rol = 'admin';

    this.cambiarEstado = function (usuario) {
        usuario.activo = !usuario.activo;
    };
}

function auditarObjeto(obj) {
    for (let llave of Object.keys(obj)) {
        if (llave !== 'login' && llave !== 'cambiarEstado') {
            console.log(llave + ':', obj[llave]);
        }
    }
}

function blindarYLimpiar(usuario) {
    delete usuario.login;
    Object.seal(usuario);
}

let user1 = new Usuario('Chanchito', 'chanchito@holamundo.io');
let admin1 = new Administrador('Nicolas', 'nico@holamundo.io');

console.log(user1);
console.log(admin1);

user1.login();

console.log(user1.activo);
admin1.cambiarEstado(user1);
console.log(user1.activo);

auditarObjeto(user1);

blindarYLimpiar(user1);

delete user1.nombre;
user1.nuevaProp = 'test';
user1.activo = true;

console.log(user1);