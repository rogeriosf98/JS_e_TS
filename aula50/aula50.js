/*Parâmetros da função
variável arguments */

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcaoDois(a, b) {
    a = a || 0;  // caso não tenha nenhum de entrada, assuma zero; 
    b = b || 0;
    console.log(a + b);
}
funcaoDois('', 2);

// desestruturação de objeto na função...

function funcaoTres( { nome, sobrenome, idade } ) {
    console.log(nome, sobrenome, idade);
}
funcaoTres( { 
    nome: 'Rogério', 
    sobrenome: 'Ferreira', 
    idade: 20} 
); 
// abaixo como ficaria sem desconstrução...
function funcaoTres(usuario) {
    console.log(usuario.nome);
    console.log(usuario.sobrenome);
    console.log(usuario.idade);
}

funcaoTres({
    nome: 'Rogério',
    sobrenome: 'Ferreira',
    idade: 20
});

// perceba que náo é mecessário a criação parametro usuário, já desconstroi ele com os argumentos,
// que viram os parâmetros do objeto. 