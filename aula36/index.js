//                0       1      2
const frutas = ['Pera', 'Maçã', 'Uva'];
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]); // só frutas, exibe string no array.
// }

// com o for in, você acessa o índice ou chaves do objeto
for (let i in frutas) {
    console.log(i);
}

// agora vamos ver como podemos fazer com objetos

const usuarios = {
    nome: 'Rogério',
    sobrenome: 'Ferreira',
    idade: 27 
};

for (let chaves in usuarios) { // i = chaves
    console.log(chaves);
}

console.log(usuarios.nome); // ou
console.log(usuarios['nome']);