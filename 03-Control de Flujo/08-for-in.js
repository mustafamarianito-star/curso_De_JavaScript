let user = {
    id : 1,
    name : 'Mariano',
    age : 30,

};

for (let prop in user) {
    console.log(prop, user[prop]);

}

let animales = ['Chanchito Feliz', 'Dragon', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}